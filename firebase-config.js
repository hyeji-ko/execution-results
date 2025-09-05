// Firebase Configuration
// .env 파일에서 설정을 로드합니다.
// .env 파일은 .gitignore에 포함되어 Git에 업로드되지 않습니다.

// Firebase 설정 가져오기
function getFirebaseConfig() {
    // 로컬 개발 환경 확인
    const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isLocalDev) {
        console.log('로컬 개발 환경에서 실행 중 - .env 파일 사용');
        // 로컬 개발: .env 파일 사용
        if (window.env) {
            return {
                apiKey: window.env.VITE_API_KEY,
                authDomain: window.env.VITE_AUTH_DOMAIN,
                projectId: window.env.VITE_PROJECT_ID,
                storageBucket: window.env.VITE_STORAGE_BUCKET,
                messagingSenderId: window.env.VITE_MESSAGING_SENDER_ID,
                appId: window.env.VITE_APP_ID
            };
        }
    }
    
    // GitHub Pages 또는 기본 설정: config.js 사용
    if (window.firebaseConfig) {
        console.log('GitHub Pages 환경에서 실행 중 - config.js 사용');
        return window.firebaseConfig;
    }
    
    // 최후의 수단: 기본 설정 (오류 방지)
    console.warn('환경변수를 찾을 수 없습니다. 기본 설정을 사용합니다.');
    return {
        apiKey: "demo-api-key",
        authDomain: "demo-project.firebaseapp.com",
        projectId: "demo-project",
        storageBucket: "demo-project.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:demo123456"
    };
}

// Firebase 설정 가져오기 (환경변수 로드 후 실행)
function initializeFirebase() {
    const firebaseConfig = getFirebaseConfig();
    
    // Firebase 초기화 (CDN 버전 사용)
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase 초기화 완료:', firebaseConfig);
    } else {
        console.error('Firebase CDN이 로드되지 않았습니다.');
    }
}

// 환경변수 로드 완료 후 Firebase 초기화
if (window.env) {
    // 이미 환경변수가 로드된 경우 즉시 초기화
    initializeFirebase();
} else {
    // 환경변수 로드 대기
    window.addEventListener('load', () => {
        setTimeout(initializeFirebase, 100); // 환경변수 로드 대기
    });
}

// Firestore 데이터베이스 참조
const db = firebase.firestore();

// Firebase 설정 상태 확인
console.log('Firebase initialized successfully');

// useLocalStorage는 app.js에서 정의됨

// 데이터 저장 함수 (로컬 스토리지 또는 Firebase)
async function saveData(data) {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지 사용
            localStorage.setItem('seminarPlan', JSON.stringify(data));
            return { success: true, message: '로컬 스토리지에 저장되었습니다.' };
        } else {
            // Firebase 사용
            const docRef = await db.collection('seminarPlans').add({
                ...data,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true, message: 'Firebase에 저장되었습니다.', id: docRef.id };
        }
    } catch (error) {
        console.error('데이터 저장 오류:', error);
        return { success: false, message: '저장 중 오류가 발생했습니다: ' + error.message };
    }
}

// 데이터 불러오기 함수
async function loadData() {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 가장 최신 데이터 불러오기
            const data = localStorage.getItem('seminarPlans');
            if (data) {
                const allData = JSON.parse(data);
                if (allData.length > 0) {
                    // 일시 기준으로 내림차순 정렬하여 가장 최신 데이터 반환
                    allData.sort((a, b) => {
                        const dateA = new Date(a.data.datetime || '1900-01-01');
                        const dateB = new Date(b.data.datetime || '1900-01-01');
                        return dateB - dateA; // 내림차순
                    });
                    
                    const latestData = allData[0];
                    return { success: true, data: latestData.data, id: latestData.id };
                } else {
                    return { success: false, message: '저장된 데이터가 없습니다.' };
                }
            } else {
                return { success: false, message: '저장된 데이터가 없습니다.' };
            }
        } else {
            // Firebase에서 불러오기 (모든 데이터를 가져온 후 JavaScript에서 정렬)
            const snapshot = await db.collection('seminarPlans').get();
            
            if (!snapshot.empty) {
                const plans = [];
                snapshot.forEach(doc => {
                    plans.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                
                // JavaScript에서 정렬: 세미나 개최 회차 내림차순, 일시 내림차순
                plans.sort((a, b) => {
                    // 세미나 개최 회차 비교 (숫자로 변환하여 비교)
                    const sessionA = parseInt(a.session) || 0;
                    const sessionB = parseInt(b.session) || 0;
                    
                    if (sessionA !== sessionB) {
                        return sessionB - sessionA; // 내림차순
                    }
                    
                    // 같은 회차인 경우 일시 비교
                    const dateA = new Date(a.datetime || '1900-01-01');
                    const dateB = new Date(b.datetime || '1900-01-01');
                    return dateB - dateA; // 내림차순
                });
                
                // 가장 최신 데이터 반환
                const latestPlan = plans[0];
                return { success: true, data: latestPlan, id: latestPlan.id };
            } else {
                return { success: false, message: '저장된 데이터가 없습니다.' };
            }
        }
    } catch (error) {
        console.error('데이터 불러오기 오류:', error);
        return { success: false, message: '데이터 불러오기 중 오류가 발생했습니다: ' + error.message };
    }
}

// 데이터 업데이트 함수
async function updateData(id, data) {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 특정 ID의 데이터 업데이트
            const allData = JSON.parse(localStorage.getItem('seminarPlans') || '[]');
            const index = allData.findIndex(item => item.id === id);
            
            if (index !== -1) {
                allData[index].data = data;
                allData[index].updatedAt = new Date().toISOString();
                localStorage.setItem('seminarPlans', JSON.stringify(allData));
                return { success: true, message: '로컬 스토리지가 업데이트되었습니다.' };
            } else {
                return { success: false, message: '업데이트할 데이터를 찾을 수 없습니다.' };
            }
        } else {
            // Firebase 업데이트
            await db.collection('seminarPlans').doc(id).update({
                ...data,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true, message: 'Firebase가 업데이트되었습니다.' };
        }
    } catch (error) {
        console.error('데이터 업데이트 오류:', error);
        return { success: false, message: '업데이트 중 오류가 발생했습니다: ' + error.message };
    }
}

// 데이터 삭제 함수
async function deleteData(id) {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 특정 ID의 데이터 삭제
            const allData = JSON.parse(localStorage.getItem('seminarPlans') || '[]');
            const filteredData = allData.filter(item => item.id !== id);
            localStorage.setItem('seminarPlans', JSON.stringify(filteredData));
            return { success: true, message: '로컬 스토리지에서 삭제되었습니다.' };
        } else {
            // Firebase 삭제
            await db.collection('seminarPlans').doc(id).delete();
            return { success: true, message: 'Firebase에서 삭제되었습니다.' };
        }
    } catch (error) {
        console.error('데이터 삭제 오류:', error);
        return { success: false, message: '삭제 중 오류가 발생했습니다: ' + error.message };
    }
}

// 모든 세미나 계획 목록 불러오기
async function loadAllPlans() {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 모든 세미나 계획 불러오기
            const data = localStorage.getItem('seminarPlans');
            if (data) {
                const allData = JSON.parse(data);
                const plans = allData.map(item => ({
                    id: item.id,
                    ...item.data
                }));
                
                // 일시 기준으로 내림차순 정렬
                plans.sort((a, b) => {
                    const dateA = new Date(a.datetime || '1900-01-01');
                    const dateB = new Date(b.datetime || '1900-01-01');
                    return dateB - dateA; // 내림차순
                });
                
                console.log(`📁 로컬 스토리지에서 ${plans.length}개의 계획을 로드했습니다.`);
                return { success: true, data: plans };
            } else {
                console.log('📁 로컬 스토리지에 저장된 계획이 없습니다.');
                return { success: true, data: [] };
            }
        } else {
            // Firebase에서 모든 계획 불러오기 (모든 데이터를 가져온 후 JavaScript에서 정렬)
            const snapshot = await db.collection('seminarPlans').get();
            
            const plans = [];
            snapshot.forEach(doc => {
                const docData = doc.data();
                console.log(`🔥 Firebase 문서 ${doc.id}:`, docData);
                plans.push({
                    id: doc.id,
                    ...docData
                });
            });
            
            // JavaScript에서 정렬: 세미나 개최 회차 내림차순, 일시 내림차순
            plans.sort((a, b) => {
                // 세미나 개최 회차 비교 (숫자로 변환하여 비교)
                const sessionA = parseInt(a.session) || 0;
                const sessionB = parseInt(b.session) || 0;
                
                if (sessionA !== sessionB) {
                    return sessionB - sessionA; // 내림차순
                }
                
                // 같은 회차인 경우 일시 비교
                const dateA = new Date(a.datetime || '1900-01-01');
                const dateB = new Date(b.datetime || '1900-01-01');
                return dateB - dateA; // 내림차순
            });
            
            console.log(`🔥 Firebase에서 총 ${plans.length}개의 계획을 로드했습니다.`);
            return { success: true, data: plans };
        }
    } catch (error) {
        console.error('모든 계획 불러오기 오류:', error);
        return { success: false, message: '계획 목록 불러오기 중 오류가 발생했습니다: ' + error.message };
    }
}

// Firebase 설정 확인
function checkFirebaseStatus() {
    if (useLocalStorage) {
        console.log('로컬 스토리지 모드로 실행 중');
        return true;
    } else {
        try {
            const app = firebase.app();
            console.log('Firebase 앱이 정상적으로 초기화되었습니다:', app.name);
            return true;
        } catch (error) {
            console.error('Firebase 초기화 오류:', error);
            return false;
        }
    }
}

// 전역 함수로 노출 (HTML에서 호출하기 위해)
window.saveData = saveData;
window.loadData = loadData;
window.updateData = updateData;
window.deleteData = deleteData;
window.loadAllPlans = loadAllPlans;
window.db = db;
// useLocalStorage는 app.js에서 전역으로 설정됨

// 페이지 로드 시 Firebase 상태 확인
document.addEventListener('DOMContentLoaded', function() {
    checkFirebaseStatus();
});
