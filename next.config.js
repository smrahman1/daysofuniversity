/** @type {import('next').NextConfig} */

const firebaseConfig = {
  FB_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  FB_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  FB_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  FB_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  FB_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  FB_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const nextConfig = () => {
  const commonSettings = {
    images: {
      domains: ["lh3.googleusercontent.com"],
    },
    reactStrictMode: true,
  };
  return {
    ...commonSettings,
    env: {
      ...firebaseConfig,
    },
  };
};

module.exports = nextConfig;
