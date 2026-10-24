# DEMON 팀 홈페이지

Next.js App Router · React · TypeScript 기반의 반응형 홈페이지입니다.
기존 https://demon-kr.github.io/ 에 공개된 내용과 이미지로 다시 구성했습니다.

## 실행

```sh
pnpm install
pnpm dev
```

http://localhost:3000 에서 확인합니다.

```sh
pnpm typecheck
pnpm build
```

정적 빌드 결과는 `out/`에 생성됩니다. GitHub Pages 등 정적 호스팅에 배포할 수 있습니다. 저장소 하위 경로에 배포한다면 `next.config.ts`의 `basePath`를 설정하세요.

## 파일 구성

- `app/page.tsx`: 한국어/영어 문구, UI, 테마/언어 설정, 연도별 활동 기록, 갤러리, FAQ
- `app/team-data.json`: 기존 사이트에서 가져온 16명의 팀원, 2021–2025년 활동 기록, 갤러리 정보
- `app/globals.css`: 반응형 스타일과 테마 색상 변수
- `app/layout.tsx`: 메타데이터 및 첫 화면의 테마 적용
- `public/images/`: 기존 사이트의 실제 프로필 이미지와 갤러리 사진

테마(시스템/라이트/다크) 및 한국어/영어 선택은 브라우저에 저장됩니다. 시스템 모드는 운영체제 설정 변경도 반영합니다. 갤러리는 이전/다음, 인디케이터, 좌우 방향키, 모바일 스와이프를 지원합니다. FAQ는 기본 HTML details/summary를 사용합니다.

## 콘텐츠 기준

2026-10-23에 기존 사이트를 확인해 가져왔습니다. 공개된 연혁은 2021–2025년 기록입니다. 소속이 공개되지 않은 팀원은 ‘미기재’로 표시했고, 프로필 이미지가 없는 팀원은 이니셜을 표시합니다. 원본 사이트의 공통 기본 GitHub 주소 및 no-reply 연락처는 개인 링크에서 제외했습니다. 가입 문의 주소는 기존 FAQ의 `h4ckingc4mp@gmail.com`을 사용했습니다.

별도의 DB·관리자·신청서 수집 기능은 포함하지 않습니다. Google Fonts를 불러올 수 없으면 시스템 글꼴을 사용합니다. 사진은 프로젝트에 저장되어 외부 이미지 호스팅에 의존하지 않습니다.

`.openai/hosting.json`은 이 초안의 Sites 비공개 호스팅 설정입니다.
