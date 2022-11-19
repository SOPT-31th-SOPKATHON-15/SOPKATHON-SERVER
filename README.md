# SOPKATHON-SERVER

## service

---
* 서비스 이름: 참참참
* 소개 : 낭비하는 지출을 참았을 때 상품명과 금액을 표시하고 리스트로 참은 금액을 볼 수 있는 서비스

<br/><br/>

---

## 각자 개발 담당 부분

---

- 현정 : 홈 조회, 리스트 팝업창 조회
- 다현 : 상품 리스트 조회
- 수린 : 작성하기

<br/><br/>


## 1. Foldering

```
.
├── tsconfig.json
├── nodemone.json
├── package.json
├── .gitignore
├── .env
├── yarn.lock
├── prisma
├── node_modules
└── src
    ├── controller
    ├── service
    ├── router
    ├── constants
    └── index.ts 
```

## Git convention
### ✔️ Commit Convention

- ✅ `[CHORE]` : 동작에 영향 없는 코드 or 변경 없는 변경사항(주석 추가 등)
- ✨ `[FEAT]` : 새로운 기능 구현
- ➕ `[ADD]` : Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성
- 🔨 `[FIX]` : 버그, 오류 해결
- ⚰️ `[DEL]` : 쓸모없는 코드 삭제
- 📝 `[DOCS]` : README나 WIKI 등의 문서 수정
- ✏️ `[CORRECT]` : 주로 문법의 오류나 타입의 변경, 이름 변경시
- ⏪️ `[RENAME]` : 파일 이름 변경시
- ♻️ `[REFACTOR]` : 전면 수정
- 🔀 `[MERGE]`: 다른 브랜치와 병합

ex) commit -m "[FEAT] user API 구현"

### ✔️ Branch Convention

- [feat] : 기능 추가
- [fix] : 에러 수정, 버그 수정
- [docs] : README, 문서
- [refactor] : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
- [modify] : 코드 수정 (기능의 변화가 있을 때)
- [chore] : gradle 세팅, 위의 것 이외에 거의 모든 것

ex) feat-user-api

### 브랜치 전략

- `main` : 메인 브랜치
- `main`에 직접적인 commit, push는 가급적 금지합니다
- 작업 전, 반드시 `main` 브랜치를 pull 받고 시작합니다
  `git pull origin main`
- 기능 개발 시 `feature/기능` 브랜치를 파서 관리합니다
  `git branch feature/기능`
- 작은 기능별로 `commit message rules`에 따라 커밋을 진행합니다
- 작업 완료 시 `main` 브랜치로 Pull Request를 보냅니다
- 팀원과 코드리뷰를 진행한 후, 최종적으로 `main` 브랜치로 merge합니다
- 다 쓴 브랜치는 삭제합니다

### ✔️ Code Convention
https://jade-savory-505.notion.site/Code-Convention-d4a469f20a184c88b1e46e4262f8adbd

---

## API DOCS

> API 명세서 링크: https://jade-savory-505.notion.site/API-Docs-6b7e59da93424d5a9aac4a7ebd4e83fa

<br/><br/>
---

## ERD
![Untitled (1)](https://user-images.githubusercontent.com/75441684/202859524-664084f9-fb85-4a1a-89b0-b582f1221d8b.png)

---

## schema.prisma
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Product {
  id          Int      @id @default(autoincrement())
  productName String   @db.VarChar(200)
  price       Int
  contents    String?
  userId      Int
  date        DateTime @db.Timestamp(6) @default(now())
  User        User     @relation(fields: [userId], references: [id], onDelete: Cascade, map: "product_user_id_fk")
}

model User {
  id      Int       @id @default(autoincrement())
  name    String    @unique @db.VarChar(50)
  Product Product[]
}

```
---

## Package.json
```
{
  "name": "sopkathon",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/SOPT-31th-SOPKATHON-15/SOPKATHON-SERVER.git",
  "author": "hyeonjeong Park <py0429@ewhain.net>",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "db:pull": "npx prisma db pull",
    "db:push": "npx prisma db push",
    "generate": "npx prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "express": "^4.18.2",
    "prisma": "^4.6.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20"
  }
}

```

---
##  server architecture

