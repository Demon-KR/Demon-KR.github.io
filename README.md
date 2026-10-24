# DEMON TEAM

- https://demon-kr.github.io

## Build

```sh
pnpm install
pnpm dev
```

```sh
pnpm typecheck
pnpm build
```

## 다른 폴더 또는 기기에서 실행하기

`node_modules`와 `.next`는 복사하지 말고, 소스와 `pnpm-lock.yaml`만 옮긴 뒤 해당 폴더에서 `pnpm install --frozen-lockfile`을 실행하세요. pnpm의 패키지 연결 구조를 보존하지 않고 `node_modules`를 복사하면 TypeScript의 플랫폼 패키지를 찾지 못할 수 있습니다.

3000번 포트를 다른 서버가 사용 중이면 Next.js가 표시하는 다음 포트(예: http://127.0.0.1:3001)로 접속하세요.

개발 모드는 macOS 파일 감시 제한(`EMFILE`)을 피하도록 Watchpack 폴링을 사용합니다. 실행 명령은 그대로 `pnpm dev`입니다.

## 팀 데이터 수정

한국어 전용 사이트입니다. `app/team-data.json`을 저장하면 개발 화면에 자동으로 반영됩니다.

- 팀원: `name`, `imageUrl`, `fallbackText`, `tags`, `links`
- 주분야: `tags`의 일반 문자열입니다. 입력한 값을 그대로 표시합니다.
- 소속: `tags`에서 `@`로 시작하는 문자열입니다.
- 연혁: `year`, `entries`의 `date`와 `desc`
- 갤러리: `id`, `title`, `subtitle`, `description`, `imageUrl`

`out/`은 빌드 결과이므로 직접 편집하지 마세요. 개발 서버를 실행한 저장소의 데이터 파일을 수정해야 합니다.

## GitHub Pages 배포

`.github/workflows/nextjs.yml`에서 `main` 브랜치에 push할 때 자동으로 빌드·배포합니다. Actions 탭의 `Run workflow`로 수동 실행할 수도 있습니다.

1. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
2. 소스, `pnpm-lock.yaml`, 워크플로 파일을 `main` 브랜치에 커밋하고 push합니다.
3. **Actions → Deploy DEMON to GitHub Pages**에서 빌드 및 배포 결과를 확인합니다.

Node.js 24와 `package.json`에 지정된 pnpm 버전으로 의존성을 설치하고, `pnpm build`가 생성한 `out/`을 GitHub Pages에 배포합니다. 별도 PAT나 직접 등록하는 배포 시크릿은 필요하지 않습니다.

현재 저장소는 `Demon-KR/Demon-KR.github.io`이므로 기본 주소는 `https://demon-kr.github.io/`입니다. `next.config.ts`의 `output: 'export'` 설정을 유지하세요.
