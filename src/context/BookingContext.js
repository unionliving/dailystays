'use client';

import { createContext, useContext, useState, useMemo } from 'react';

const BookingContext = createContext(null);

// Formats a local Date as YYYY-MM-DD without shifting days across timezones
// (Date#toISOString converts to UTC first, which rolls back a day for IST).
function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Appends the selected stay (checkin/checkout/adults/children) to an ipms247
// booking link, matching the query params live.ipms247.com/letsbook.me expects.
export function buildBookingUrl(baseLink, { checkInDate, checkOutDate, guests } = {}) {
  if (!baseLink) return baseLink;
  try {
    const url = new URL(baseLink);
    if (checkInDate) url.searchParams.set('checkin', formatLocalDate(checkInDate));
    if (checkOutDate) url.searchParams.set('checkout', formatLocalDate(checkOutDate));
    if (guests) {
      url.searchParams.set('adults', String(guests));
      url.searchParams.set('children', '0');
    }
    return url.toString();
  } catch {
    return baseLink;
  }
}

export function BookingProvider({ children }) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const value = useMemo(
    () => ({
      checkInDate,
      checkOutDate,
      guests,
      setCheckInDate,
      setCheckOutDate,
      setGuests,
      buildBookingUrl: (baseLink) => buildBookingUrl(baseLink, { checkInDate, checkOutDate, guests }),
    }),
    [checkInDate, checkOutDate, guests]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return ctx;
}
