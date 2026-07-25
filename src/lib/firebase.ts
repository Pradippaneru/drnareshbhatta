import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Load firebase-applet-config.json safely if it exists locally, without breaking builds when gitignored
const localConfigs = import.meta.glob('../../firebase-applet-config.json', { eager: true }) as Record<string, { default?: Record<string, string> }>;
const firstConfig = Object.values(localConfigs)[0];
const defaultConfig: Record<string, string> = firstConfig?.default || (firstConfig as unknown as Record<string, string>) || {};

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || defaultConfig?.apiKey;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || defaultConfig?.authDomain;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || defaultConfig?.projectId;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || defaultConfig?.storageBucket;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || defaultConfig?.messagingSenderId;
const appId = import.meta.env.VITE_FIREBASE_APP_ID || defaultConfig?.appId;
const databaseId = import.meta.env.VITE_FIREBASE_DATABASE_ID || defaultConfig?.firestoreDatabaseId;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = databaseId 
  ? getFirestore(app, databaseId)
  : getFirestore(app);
