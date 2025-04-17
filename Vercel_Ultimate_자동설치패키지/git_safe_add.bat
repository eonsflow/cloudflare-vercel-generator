@echo off
REM 1. Git 안전 디렉토리 등록
git config --global --add safe.directory "F:/언즈/★구글-애드센스/★외부유입전략적자동화서비스/★운영자가 먼저 써본_자동화 랜딩시스템_v1.1/Vercel_Ultimate_자동설치패키지"

REM 2. 해당 경로로 이동
cd /d "F:\언즈\★구글-애드센스\★외부유입전략적자동화서비스\★운영자가 먼저 써본_자동화 랜딩시스템_v1.1\Vercel_Ultimate_자동설치패키지"

REM 3. Git 커밋 및 푸시
git add .
git commit -m "🚀 자동 설치기 루트 등록 및 Vercel 배포용 커밋"
git push -u origin main

echo 모든 작업 완료!
pause
