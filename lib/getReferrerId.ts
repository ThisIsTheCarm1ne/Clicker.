// This function gets referrer ID
// and stores it as a cookie
"use client"

import { useSearchParams } from 'next/navigation';

export default function getReferrerId() {
  const refId = useSearchParams().get('ref');

  if (!refId) {
    return '';
  }

  document.cookie = `referrerId=${refId}; path=/; max-age=3600`;

  return refId;
}
