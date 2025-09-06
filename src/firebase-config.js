// Firebase Configuration (ES6 모듈)
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';


// Firebase는 main.js에서 초기화되므로 여기서는 import만 사용

// 데이터 저장 함수
export async function saveData(data) {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지 사용
            localStorage.setItem('seminarPlan', JSON.stringify(data));
            return { success: true, message: '로컬 스토리지에 저장되었습니다.' };
        } else {
            // Firebase 사용
            const dataToSave = Array.isArray(data) ? data[0] : data;
            
            const docRef = await addDoc(collection(window.db, 'seminarPlans'), {
                ...dataToSave,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            return { success: true, message: 'Firebase에 저장되었습니다.', id: docRef.id };
        }
    } catch (error) {
        console.error('데이터 저장 오류:', error);
        return { success: false, message: '저장 중 오류가 발생했습니다: ' + error.message };
    }
}

// 데이터 불러오기 함수
export async function loadData() {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 가장 최신 데이터 불러오기
            const data = localStorage.getItem('seminarPlans');
            if (data) {
                const parsedData = JSON.parse(data);
                return { success: true, data: parsedData, id: 'local', message: '로컬 스토리지에서 데이터를 불러왔습니다.' };
            }
            return { success: true, data: null, id: null, message: '로컬 스토리지에 저장된 데이터가 없습니다.' };
        } else {
            // Firebase에서 데이터 불러오기
            const snapshot = await getDocs(collection(window.db, 'seminarPlans'));
            
            if (!snapshot.empty) {
                const plans = [];
                snapshot.forEach(doc => {
                    plans.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                
                // 세미나 개최 회차 내림차순, 일시 내림차순으로 정렬
                plans.sort((a, b) => {
                    const sessionA = parseInt(a.session) || 0;
                    const sessionB = parseInt(b.session) || 0;
                    
                    if (sessionA !== sessionB) {
                        return sessionB - sessionA;
                    }
                    
                    const dateA = new Date(a.datetime || '1900-01-01');
                    const dateB = new Date(b.datetime || '1900-01-01');
                    return dateB - dateA;
                });
                
                return { success: true, data: plans[0], id: plans[0]?.id, message: 'Firebase에서 데이터를 불러왔습니다.' };
            } else {
                return { success: true, data: null, id: null, message: 'Firebase에 저장된 데이터가 없습니다.' };
            }
        }
    } catch (error) {
        console.error('데이터 불러오기 오류:', error);
        return { success: false, message: '데이터 불러오기 중 오류가 발생했습니다: ' + error.message };
    }
}

// 데이터 업데이트 함수
export async function updateData(id, data) {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 특정 ID의 데이터 업데이트
            const allData = JSON.parse(localStorage.getItem('seminarPlans') || '[]');
            const index = allData.findIndex(item => item.id === id);
            if (index !== -1) {
                allData[index] = { ...allData[index], ...data };
                localStorage.setItem('seminarPlans', JSON.stringify(allData));
                return { success: true, id: id, message: '로컬 스토리지 데이터가 업데이트되었습니다.' };
            }
            return { success: false, message: '로컬 스토리지에서 해당 ID를 찾을 수 없습니다.' };
        } else {
            // Firebase에서 데이터 업데이트
            await updateDoc(doc(window.db, 'seminarPlans', id), {
                ...data,
                updatedAt: serverTimestamp()
            });
            return { success: true, id: id, message: 'Firebase 데이터가 업데이트되었습니다.' };
        }
    } catch (error) {
        console.error('데이터 업데이트 오류:', error);
        return { success: false, message: '데이터 업데이트 중 오류가 발생했습니다: ' + error.message };
    }
}

// 데이터 삭제 함수
export async function deleteData(id) {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 특정 ID의 데이터 삭제
            const allData = JSON.parse(localStorage.getItem('seminarPlans') || '[]');
            const filteredData = allData.filter(item => item.id !== id);
            localStorage.setItem('seminarPlans', JSON.stringify(filteredData));
            return { success: true, message: '로컬 스토리지 데이터가 삭제되었습니다.' };
        } else {
            // Firebase에서 데이터 삭제
            await deleteDoc(doc(window.db, 'seminarPlans', id));
            return { success: true, message: 'Firebase 데이터가 삭제되었습니다.' };
        }
    } catch (error) {
        console.error('데이터 삭제 오류:', error);
        return { success: false, message: '데이터 삭제 중 오류가 발생했습니다: ' + error.message };
    }
}

// 모든 세미나 계획 목록 불러오기
export async function loadAllPlans() {
    try {
        if (window.useLocalStorage) {
            // 로컬 스토리지에서 모든 세미나 계획 불러오기
            const data = localStorage.getItem('seminarPlans');
            if (data) {
                return { success: true, data: JSON.parse(data), message: '로컬 스토리지에서 모든 계획을 불러왔습니다.' };
            }
            return { success: true, data: [], message: '로컬 스토리지에 저장된 계획이 없습니다.' };
        } else {
            // Firebase에서 모든 세미나 계획 불러오기
            const snapshot = await getDocs(collection(window.db, 'seminarPlans'));
            
            const plans = [];
            snapshot.forEach(doc => {
                const docData = doc.data();
                plans.push({
                    id: doc.id,
                    ...docData
                });
            });
            
            // 세미나 개최 회차 내림차순, 일시 내림차순으로 정렬
            plans.sort((a, b) => {
                const sessionA = parseInt(a.session) || 0;
                const sessionB = parseInt(b.session) || 0;
                
                if (sessionA !== sessionB) {
                    return sessionB - sessionA;
                }
                
                const dateA = new Date(a.datetime || '1900-01-01');
                const dateB = new Date(b.datetime || '1900-01-01');
                return dateB - dateA;
            });
            
            console.log(`🔥 Firebase에서 총 ${plans.length}개의 계획을 로드했습니다.`);
            return { success: true, data: plans, message: 'Firebase에서 모든 계획을 불러왔습니다.' };
        }
    } catch (error) {
        console.error('모든 계획 불러오기 오류:', error);
        return { success: false, message: '계획 목록 불러오기 중 오류가 발생했습니다: ' + error.message };
    }
}

// 전역으로 노출
window.saveData = saveData;
window.loadData = loadData;
window.updateData = updateData;
window.deleteData = deleteData;
window.loadAllPlans = loadAllPlans;