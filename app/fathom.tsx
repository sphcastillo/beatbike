'use client';

import { load, trackPageview } from 'fathom-client';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const siteId = process.env.NEXT_PUBLIC_FATHOM_ID;
  
    if (!siteId) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Fathom site ID missing");
      }
      return;
    }
  
    load(siteId, { auto: false });
  }, []);
  

  useEffect(() => {
    if (!pathname) return;
  
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams}` : "");
  
    trackPageview({
      url,
      referrer: document.referrer
    });
  }, [pathname, searchParams]);
  

  return null;
}

export function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  );
}