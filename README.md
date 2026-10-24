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

## GitHub Pages 배포

`.github/workflows/nextjs.yml`에서 `main` 브랜치에 push할 때 자동으로 빌드·배포합니다. Actions 탭의 `Run workflow`로 수동 실행할 수도 있습니다.

1. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
2. 소스, `pnpm-lock.yaml`, 워크플로 파일을 `main` 브랜치에 커밋하고 push합니다.
3. **Actions → Deploy DEMON to GitHub Pages**에서 빌드 및 배포 결과를 확인합니다.

Node.js 24와 `package.json`에 지정된 pnpm 버전으로 의존성을 설치하고, `pnpm build`가 생성한 `out/`을 GitHub Pages에 배포합니다. 별도 PAT나 직접 등록하는 배포 시크릿은 필요하지 않습니다.

현재 저장소는 `Demon-KR/Demon-KR.github.io`이므로 기본 주소는 `https://demon-kr.github.io/`입니다. `next.config.ts`의 `output: 'export'` 설정을 유지하세요.
