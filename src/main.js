// 전사 신기술 세미나 실행계획 웹앱 메인 진입점

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { SeminarPlanningApp } from './app.js';

// Firebase 설정
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY || "AIzaSyDT0Uv6LSMfD5b8ykB0ch4N7EvpF4-chTM",
    authDomain: import.meta.env.VITE_AUTH_DOMAIN || "execution-results.firebaseapp.com",
    projectId: import.meta.env.VITE_PROJECT_ID || "execution-results",
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET || "execution-results.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || "449225654732",
    appId: import.meta.env.VITE_APP_ID || "1:449225654732:web:4a99d2c54e6c9dda621d69"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('Firebase 초기화 완료:', firebaseConfig);

// 전역으로 노출
window.db = db;
window.useLocalStorage = false; // Firebase 사용

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    const seminarApp = new SeminarPlanningApp();
    window.app = seminarApp;
});

