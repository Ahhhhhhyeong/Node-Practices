## Node Practices

1. Package
    - 완전한 애플리케이션(nodemon, babel, webpack)
    - 프로젝트에서 사용하는 모듈(라이브러리)

2. 의존성(Dependency)
    - 개발하는 프로젝트(애플리케이션, 라이브러리)에서 설치하고 사용하는 패키지
    - 일반 의존성
        - 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 빌드와 배포에 포함되어야 한다.
        - $[project-ex01] npm i...

- 개발 의존성
    - 개발에 필요하거나 도움이 되는 패키지(Dev. Tools)로 빌드와 배포에 포함되지 않는다.
    - $[project-ex01] npm i -D...

3. 패키지 설치
    1. 전역(Global)설치 : 여러 프로젝트에서 공용으로 사용하는 도구
    2. 지역(Local)설치 : 특정 프로젝트에 종속적인 도구나 라이브러리
    3. 패키지 설치 예제
        - npm i ejs [local install, general dependency]
        - npm i -D nodemon [local install, dev dependency]
        - npm i -g gulp [global install, general dependency]
        - npx gulp --version(설치 테스트)
    4. 패키지 삭제 예제
        - npm un ejs [local install delete]
        - npm un -g gulp [global install delete]
        - npx gulp --version(삭제 테스트)

4. Node(JavaScript) Project 생성
    1. project 생성(mkdir)
    2. project 이동(cd)
    3. project 초기화: project manifest file(package.json 생성)
        - $[project-ex02] npm init -y (default, -y 없을 시 입력해야함)


5. Module
    1. 코어 모듈: node에서 제공하는 모듈(fs, os, ...)
    2. 파일 모듈: 파일 경로로 불러와서 모듈만의 함수, 객체를 사용한다.
    3. npm 모듈: npm을 통해서 node_modules에 설치하고 사용하는 모듈
        - 원격 배포
        - 로컬 배포

6. npmjs.com의 npm registry에 패키지 배포(원격배포)
7. helloweb-ex01: 웹애플리케이션 만들어 보기(express 프레임 x)
8. helloweb-ex02: 웹애플리케이션 만들어 보기(express 프레임 o)
