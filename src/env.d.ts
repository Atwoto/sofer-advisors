/// <reference types="astro/client" />

interface Window {
  trackLeadEvent?: (eventName: string, params?: Record<string, any>) => void;
  dataLayer?: any[];
}
