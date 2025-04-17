# Vercel 자동설치기 패키지

이 폴더는 Vercel에서 자동 배포 가능한 구조로 되어 있습니다. 설치기 index.html을 루트에 두어 정적 배포가 작동하며, GAS 및 Cloudflare Worker 연동을 위한 템플릿이 포함되어 있습니다.

## 구성 파일
- index.html: 설치기 UI
- template.html: GAS 템플릿
- GAS_Code_doGet.js: Apps Script 코드
- vercel.json: 정적 파일 라우팅 설정
- README.md: 프로젝트 설명
- .gitignore: Git 업로드 제외 목록

## 배포 방법
1. GitHub 저장소에 이 폴더를 그대로 커밋
2. Vercel에서 GitHub 저장소 연결 후 배포
3. 완료된 도메인 주소로 접속하여 설치기 사용