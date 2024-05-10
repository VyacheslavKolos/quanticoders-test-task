// / <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_LANDING_URL: string;
  readonly VITE_CAPTCHA_V2_KEY: string;
  readonly VITE_CAPTCHA_V3_KEY: string;
  readonly NODE_ENV: string;
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';
