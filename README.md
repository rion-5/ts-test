1. TypeScript 코드 컴파일
TypeScript 코드를 컴파일하여 JavaScript 파일로 변환합니다.

npx tsc

컴파일된 파일은 dist 디렉토리에 생성됩니다 (tsconfig.json 설정에 따라 다를 수 있습니다).

2. JavaScript 코드 실행
컴파일된 JavaScript 파일을 실행합니다.

  node dist/index.js

3. ts-node를 사용하여 직접 실행 (개발 시)
개발 중에는 ts-node를 사용하여 직접 TypeScript 파일을 실행할 수 있습니다.

  npx ts-node src/index.ts

4. 스크립트 추가 (선택 사항)
package.json 파일에 스크립트를 추가하여 빌드와 실행을 쉽게 할 수 있습니다.

  {
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js",
      "dev": "ts-node src/index.ts"
    }
  }

이후 다음 명령어를 사용하여 빌드 및 실행할 수 있습니다.

npm run build
npm start
npm run dev


5. tsconfig.json 파일을 사용하지 않고, 커맨드라인에서 직접 옵션을 주는 방법:
만약 tsconfig.json 파일을 사용하지 않고, 커맨드라인에서 직접 옵션을 지정하고 싶다면, 다음과 같이 할 수 있습니다.

npx tsc ./src/파일명.ts --outDir ./dist --target es5 --module commonjs

위 명령어는 ./src/파일명.ts 파일을 컴파일하고, 결과 파일을 ./dist 디렉터리에 생성하며, 타겟 JavaScript 버전은 ES5, 모듈 시스템은 CommonJS로 설정합니다. (원하는 옵션으로 조정할 수 있습니다)
