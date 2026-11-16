import { useState, type FormEvent } from 'react';
import { MessageCircle, CheckCircle2, AlertCircle, Calendar, Users } from 'lucide-react';
import { ROOM_CATEGORIES } from '../data/rooms';
import { RESORT_INFO } from '../data/resort';
import {
  buildBookingWhatsAppUrl,
  calculateNights,
  getDefaultDates,
  validateBookingEnquiry,
  type BookingEnquiryInput,
  type BookingValidationErrors,
} from '../utils/booking';

interface BookingEnquiryFormProps {
  initialRoom?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
}

export function BookingEnquiryForm({
  initialRoom,
  initialCheckIn,
  initialCheckOut,
  initialAdults,
  initialChildren,
}: BookingEnquiryFormProps) {
  const defaults = getDefaultDates();

  const [formData, setFormData] = useState<BookingEnquiryInput>({
    guestName: '',
    mobileNumber: '',
    checkIn: initialCheckIn || defaults.checkIn,
    checkOut: initialCheckOut || defaults.checkOut,
    adults: initialAdults && initialAdults >= 1 ? initialAdults : 2,
    children: typeof initialChildren === 'number' && initialChildren >= 0 ? initialChildren : 0,
    roomCategory: initialRoom || ROOM_CATEGORIES[1].name,
    roomsCount: 1,
    specialRequests: '',
  });

  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<BookingEnquiryInput | null>(null);

  const nights = calculateNights(formData.checkIn, formData.checkOut);
  const selectedRoomObj = ROOM_CATEGORIES.find((r) => r.name === formData.roomCategory);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateBookingEnquiry(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedUrl(null);
      return;
    }

    const whatsappUrl = buildBookingWhatsAppUrl(formData);
    setSubmittedUrl(whatsappUrl);
    setSubmittedSummary({ ...formData });

    // Launch WhatsApp via synthetic anchor click (no window.open or window.alert)
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Direct Room Enquiry
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Submit your preferred dates and room category. Your enquiry opens directly with our reservation desk on WhatsApp ({RESORT_INFO.whatsappDisplay}). This is an enquiry request, not an instant automated confirmation.
        </p>
      </div>

      {submittedUrl && submittedSummary && (
        <div
          role="status"
          className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-900"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="font-display text-base font-bold text-emerald-950">
                WhatsApp Enquiry Initiated
              </h3>
              <p className="text-sm text-emerald-900 mt-1">
                Your booking enquiry for <strong>{submittedSummary.roomCategory}</strong> ({submittedSummary.checkIn} to {submittedSummary.checkOut}) has been prepared for our reservation team. Availability and final tariff with applicable taxes will be confirmed directly by Jiva Resort Cherrapunjee.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Open WhatsApp Message</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmittedUrl(null)}
                  className="min-h-[44px] px-3 py-2 text-sm font-medium text-emerald-900 underline hover:no-underline"
                >
                  Edit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="guestName" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Guest Full Name *
            </label>
            <input
              id="guestName"
              name="guestName"
              type="text"
              required
              value={formData.guestName}
              onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
              placeholder="e.g. Aarav Sharma"
              aria-invalid={Boolean(errors.guestName)}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            />
            {errors.guestName && (
              <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.guestName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Mobile / WhatsApp Number *
            </label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              required
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              aria-invalid={Boolean(errors.mobileNumber)}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            />
            {errors.mobileNumber && (
              <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.mobileNumber}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Check-in Date (from 2:00 PM) *
            </label>
            <div className="relative">
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                required
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                aria-invalid={Boolean(errors.checkIn)}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
              />
            </div>
            {errors.checkIn && (
              <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.checkIn}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="checkOut" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Check-out Date (by 12:00 PM) *
            </label>
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              required
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              aria-invalid={Boolean(errors.checkOut)}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            />
            {errors.checkOut && (
              <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.checkOut}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="roomCategory" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Room Category *
            </label>
            <select
              id="roomCategory"
              name="roomCategory"
              value={formData.roomCategory}
              onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
            >
              {ROOM_CATEGORIES.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name} — {room.tariffDisplay} {room.taxLabel}
                </option>
              ))}
            </select>
            {errors.roomCategory && (
              <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.roomCategory}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="adults" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Adults *
              </label>
              <input
                id="adults"
                name="adults"
                type="number"
                min={1}
                max={20}
                value={formData.adults}
                onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div>
              <label htmlFor="children" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Children
              </label>
              <input
                id="children"
                name="children"
                type="number"
                min={0}
                max={20}
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div>
              <label htmlFor="roomsCount" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Rooms *
              </label>
              <input
                id="roomsCount"
                name="roomsCount"
                type="number"
                min={1}
                max={10}
                value={formData.roomsCount}
                onChange={(e) => setFormData({ ...formData, roomsCount: Number(e.target.value) })}
                className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
          </div>
        </div>

        {(errors.adults || errors.children || errors.roomsCount) && (
          <p className="text-xs text-red-700 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.adults || errors.children || errors.roomsCount}</span>
          </p>
        )}

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold text-slate-800 mb-1.5">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={3}
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            placeholder="Share arrival time, local shuttle request, accessibility needs, or travelling with pets..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
          />
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
              <Calendar className="w-4 h-4 text-blue-700" aria-hidden="true" />
              {nights > 0 ? `${nights} ${nights === 1 ? 'Night' : 'Nights'}` : 'Select valid dates'}
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
              <Users className="w-4 h-4 text-blue-700" aria-hidden="true" />
              {formData.adults} Adults · {formData.children} Children · {formData.roomsCount}{' '}
              {formData.roomsCount === 1 ? 'Room' : 'Rooms'}
            </span>
          </div>
          {selectedRoomObj && (
            <span className="font-semibold text-slate-900 tabular-nums">
              Indicative: {selectedRoomObj.tariffDisplay} {selectedRoomObj.taxLabel}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Send Enquiry on WhatsApp</span>
        </button>
      </form>
    </div>
  );
}
