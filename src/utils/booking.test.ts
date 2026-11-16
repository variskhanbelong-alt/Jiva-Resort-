import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildBookingWhatsAppMessage,
  buildBookingWhatsAppUrl,
  buildQuickRoomWhatsAppUrl,
  calculateNights,
  formatINR,
  isValidPhoneNumber,
  validateBookingEnquiry,
  validateContactForm,
} from './booking';

test('calculateNights computes positive night difference and rejects reversed dates', () => {
  assert.equal(calculateNights('2026-12-10', '2026-12-13'), 3);
  assert.equal(calculateNights('2026-12-10', '2026-12-10'), 0);
  assert.equal(calculateNights('2026-12-13', '2026-12-10'), 0);
  assert.equal(calculateNights('', '2026-12-10'), 0);
});

test('isValidPhoneNumber accepts standard 10-digit Indian and E.164 phone numbers', () => {
  assert.equal(isValidPhoneNumber('9876543210'), true);
  assert.equal(isValidPhoneNumber('+91 62077 99112'), true);
  assert.equal(isValidPhoneNumber('12345'), false);
  assert.equal(isValidPhoneNumber('abc'), false);
});

test('validateBookingEnquiry catches missing fields and invalid checkout date', () => {
  const emptyErrors = validateBookingEnquiry({
    guestName: '',
    mobileNumber: '123',
    checkIn: '2026-12-15',
    checkOut: '2026-12-14',
    adults: 0,
    children: -1,
    roomCategory: '',
    roomsCount: 0,
  });

  assert.ok(emptyErrors.guestName);
  assert.ok(emptyErrors.mobileNumber);
  assert.ok(emptyErrors.checkOut);
  assert.ok(emptyErrors.adults);
  assert.ok(emptyErrors.children);
  assert.ok(emptyErrors.roomCategory);
  assert.ok(emptyErrors.roomsCount);
});

test('validateBookingEnquiry passes on valid booking enquiry', () => {
  const errors = validateBookingEnquiry({
    guestName: 'Aarav Sharma',
    mobileNumber: '+91 9876543210',
    checkIn: '2026-12-15',
    checkOut: '2026-12-18',
    adults: 2,
    children: 1,
    roomCategory: 'AC Suites Loft Room',
    roomsCount: 1,
    specialRequests: 'Early check-in request if possible',
  });

  assert.deepEqual(errors, {});
});

test('buildBookingWhatsAppMessage and buildBookingWhatsAppUrl include all guest details', () => {
  const input = {
    guestName: 'Meera Nair',
    mobileNumber: '9876501234',
    checkIn: '2026-12-20',
    checkOut: '2026-12-22',
    adults: 2,
    children: 0,
    roomCategory: 'AC Double Room',
    roomsCount: 1,
    specialRequests: 'Valley view preferred',
  };

  const msg = buildBookingWhatsAppMessage(input);
  assert.match(msg, /Meera Nair/);
  assert.match(msg, /AC Double Room/);
  assert.match(msg, /2 Nights/);
  assert.match(msg, /Valley view preferred/);

  const url = buildBookingWhatsAppUrl(input);
  assert.ok(url.startsWith('https://wa.me/916207799112?text='));
  assert.ok(decodeURIComponent(url).includes('Meera Nair'));
});

test('buildQuickRoomWhatsAppUrl includes room name and WhatsApp target', () => {
  const url = buildQuickRoomWhatsAppUrl('Non-AC Room', '2026-12-01', '2026-12-03', 2, 1);
  assert.ok(url.startsWith('https://wa.me/916207799112?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Non-AC Room'));
  assert.ok(decoded.includes('2026-12-01'));
});

test('validateContactForm validates all required contact fields', () => {
  const invalid = validateContactForm({
    name: 'A',
    phoneOrEmail: '12',
    subject: '',
    message: 'Hi',
  });
  assert.ok(invalid.name);
  assert.ok(invalid.phoneOrEmail);
  assert.ok(invalid.subject);
  assert.ok(invalid.message);

  const valid = validateContactForm({
    name: 'Rohan Das',
    phoneOrEmail: 'rohan@example.com',
    subject: 'Group Stay Enquiry',
    message: 'Planning a 3-night family trip to Sohra next month.',
  });
  assert.deepEqual(valid, {});
});

test('formatINR formats Indian Rupee tariffs without decimals', () => {
  assert.equal(formatINR(5000), '₹5,000');
  assert.equal(formatINR(25000), '₹25,000');
});
