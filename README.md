# 전사 신기술 세미나 실행계획

## 🔐 환경 설정

### 로컬 개발 환경
로컬에서는 `.env` 파일을 사용합니다:

```env
VITE_API_KEY=your_api_key_here
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

### 🚀 배포
- **로컬**: `.env` 파일 사용
- **GitHub Pages**: 기본 설정 사용 (Firebase 연결 안됨)

### 📁 파일 구조
```
├── .env                    # 로컬 개발용 (Git에 포함되지 않음)
├── index.html              # 메인 HTML 파일
├── app.js                  # JavaScript 로직
├── firebase-config.js      # Firebase 설정
├── styles.css              # 스타일시트
└── package.json            # 의존성 관리
```

### 🔧 사용법
1. 로컬 개발 시: `.env` 파일에 실제 Firebase 설정 추가
2. GitHub Pages 배포 시: 기본 설정으로 작동 (Firebase 연결 안됨)