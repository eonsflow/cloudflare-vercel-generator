
# 자동설치기 호출기 (Vercel 배포용)

이 프로젝트는 Google Apps Script를 통해 자동 생성된 index.html을 다운로드할 수 있는 설치기 UI입니다.
고객은 본인의 Worker URL과 시트 ID를 입력하면 자동으로 개인화된 index.html 파일을 받아 Netlify 등에 배포할 수 있습니다.

## 구성 파일

- `index.html`: 고객이 사용하는 설치기 UI
- `GAS_Code_doGet.js`: Google Apps Script에 붙여넣을 치환용 Web App 코드
- `template.html`: 고객 최종 랜딩페이지 HTML 템플릿 (GAS에 포함)

## Vercel 배포 방법

1. [https://vercel.com](https://vercel.com) 가입 및 로그인
2. 새 프로젝트 생성 후 이 디렉토리 업로드
3. 배포 완료 후 링크에서 설치기 사용 가능
