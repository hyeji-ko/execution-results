# 전사 신기술 세미나 실행계획

## 🔐 보안 설정

### GitHub Secrets 설정
이 프로젝트는 GitHub Secrets를 사용하여 Firebase 설정을 안전하게 관리합니다.

#### 1. GitHub 저장소에서 Secrets 설정
1. GitHub 저장소 → Settings → Secrets and variables → Actions
2. 다음 Secrets를 추가하세요:

```
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

#### 2. 로컬 개발 환경
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
- **GitHub Pages**: GitHub Secrets 사용 (자동 배포)

### 📁 파일 구조
```
├── .env                    # 로컬 개발용 (Git에 포함되지 않음)
├── config.js              # GitHub Actions에서 생성 (Git에 포함되지 않음)
├── .github/workflows/     # GitHub Actions 워크플로우
└── src/                   # 소스 코드
```