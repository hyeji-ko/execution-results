// 전사 신기술 세미나 실행계획 웹앱 메인 진입점

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { SeminarPlanningApp } from './app.js';

// Firebase 설정
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
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

