export const RESORT_WHATSAPP_NUMBER = '916207799112';
export const RESORT_WHATSAPP_BASE_URL = `https://wa.me/${RESORT_WHATSAPP_NUMBER}`;

export interface BookingEnquiryInput {
  guestName: string;
  mobileNumber: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomCategory: string;
  roomsCount: number;
  specialRequests?: string;
}

export interface BookingValidationErrors {
  guestName?: string;
  mobileNumber?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  children?: string;
  roomCategory?: string;
  roomsCount?: string;
}

export interface ContactEnquiryInput {
  name: string;
  phoneOrEmail: string;
  subject: string;
  message: string;
}

export interface ContactValidationErrors {
  name?: string;
  phoneOrEmail?: string;
  subject?: string;
  message?: string;
}

export function getDefaultDates(referenceDate: Date = new Date()): { checkIn: string; checkOut: string } {
  const tomorrow = new Date(referenceDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(referenceDate);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const format = (d: Date) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return {
    checkIn: format(tomorrow),
    checkOut: format(dayAfter),
  };
}

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  const diffMs = end.getTime() - start.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

export function normalizeIndianPhone(raw: string): string {
  return raw.replace(/[^\d+]/g, '').trim();
}

export function isValidPhoneNumber(raw: string): boolean {
  const digitsOnly = raw.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

export function validateBookingEnquiry(input: BookingEnquiryInput): BookingValidationErrors {
  const errors: BookingValidationErrors = {};

  if (!input.guestName.trim() || input.guestName.trim().length < 2) {
    errors.guestName = 'Please enter the guest full name (at least 2 characters).';
  }

  if (!input.mobileNumber.trim()) {
    errors.mobileNumber = 'Please enter a valid mobile number for WhatsApp confirmation.';
  } else if (!isValidPhoneNumber(input.mobileNumber)) {
    errors.mobileNumber = 'Please enter a valid 10 to 15 digit mobile number.';
  }

  if (!input.checkIn) {
    errors.checkIn = 'Please select a check-in date.';
  }

  if (!input.checkOut) {
    errors.checkOut = 'Please select a check-out date.';
  } else if (input.checkIn && calculateNights(input.checkIn, input.checkOut) <= 0) {
    errors.checkOut = 'Check-out date must be after the check-in date.';
  }

  if (!Number.isInteger(input.adults) || input.adults < 1 || input.adults > 20) {
    errors.adults = 'Please select at least 1 adult (maximum 20 per enquiry).';
  }

  if (!Number.isInteger(input.children) || input.children < 0 || input.children > 20) {
    errors.children = 'Number of children cannot be negative.';
  }

  if (!input.roomCategory.trim()) {
    errors.roomCategory = 'Please select a room category.';
  }

  if (!Number.isInteger(input.roomsCount) || input.roomsCount < 1 || input.roomsCount > 10) {
    errors.roomsCount = 'Please select between 1 and 10 rooms.';
  }

  return errors;
}

export function buildBookingWhatsAppMessage(input: BookingEnquiryInput): string {
  const nights = calculateNights(input.checkIn, input.checkOut);
  const lines = [
    'Hello Jiva Resort Cherrapunjee Reservation Desk,',
    '',
    'I would like to submit a room booking enquiry:',
    `• Guest Name: ${input.guestName.trim()}`,
    `• Mobile Number: ${input.mobileNumber.trim()}`,
    `• Room Category: ${input.roomCategory.trim()}`,
    `• Number of Rooms: ${input.roomsCount}`,
    `• Check-in Date: ${input.checkIn} (Check-in 2:00 PM)`,
    `• Check-out Date: ${input.checkOut} (Check-out 12:00 PM)`,
    ...(nights > 0 ? [`• Duration: ${nights} ${nights === 1 ? 'Night' : 'Nights'}`] : []),
    `• Guests: ${input.adults} ${input.adults === 1 ? 'Adult' : 'Adults'}, ${input.children} ${input.children === 1 ? 'Child' : 'Children'}`,
  ];

  if (input.specialRequests && input.specialRequests.trim()) {
    lines.push(`• Special Requests: ${input.specialRequests.trim()}`);
  }

  lines.push('', 'Please share room availability and final tariff including applicable taxes.');
  return lines.join('\n');
}

export function buildBookingWhatsAppUrl(input: BookingEnquiryInput): string {
  const message = buildBookingWhatsAppMessage(input);
  return `${RESORT_WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildQuickRoomWhatsAppUrl(
  roomName: string,
  checkIn?: string,
  checkOut?: string,
  adults?: number,
  children?: number
): string {
  const lines = [
    'Hello Jiva Resort Cherrapunjee,',
    `I would like to enquire about booking the *${roomName}*.`,
  ];
  if (checkIn) lines.push(`• Preferred Check-in: ${checkIn}`);
  if (checkOut) lines.push(`• Preferred Check-out: ${checkOut}`);
  if (typeof adults === 'number') {
    lines.push(`• Guests: ${adults} Adults${typeof children === 'number' && children > 0 ? `, ${children} Children` : ''}`);
  }
  lines.push('Could you please share availability, applicable taxes, and booking confirmation details?');
  return `${RESORT_WHATSAPP_BASE_URL}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function validateContactForm(input: ContactEnquiryInput): ContactValidationErrors {
  const errors: ContactValidationErrors = {};
  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!input.phoneOrEmail.trim() || input.phoneOrEmail.trim().length < 5) {
    errors.phoneOrEmail = 'Please enter your phone number or email address.';
  }
  if (!input.subject.trim()) {
    errors.subject = 'Please select or enter an enquiry topic.';
  }
  if (!input.message.trim() || input.message.trim().length < 10) {
    errors.message = 'Please write a short message (at least 10 characters).';
  }
  return errors;
}

export function buildContactWhatsAppUrl(input: ContactEnquiryInput): string {
  const text = [
    'Hello Jiva Resort Cherrapunjee Team,',
    `• Name: ${input.name.trim()}`,
    `• Contact: ${input.phoneOrEmail.trim()}`,
    `• Topic: ${input.subject.trim()}`,
    `• Message: ${input.message.trim()}`,
  ].join('\n');
  return `${RESORT_WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
