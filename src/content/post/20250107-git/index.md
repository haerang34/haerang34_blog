---
title: "GIT 정리"
description: "코드 형상관리 프로그램? 답답하니 내가 만든다 -리누즈 토발즈-               "
publishDate: "2025-01-07"
tags: ["git","github"]
draft: false
# coverImage:
#   src: "./Web Development Almasi.jpg"
#   alt: "Code written on a screen"
#   credit: "Ferenc Almasi"
---

## GIT

### 1. Git이란 무엇인가?
   * Linux 개발자 리누스 토발즈가 개발한 분산형 버전관리 / 형상관리 시스템
   > 리누스 토발즈는 리눅스 커널을 관리하는 기존툴이 엉망인것에 너무 열받아 
   > 단 2주 만에 Git 프로그램을 완성   
   * 오픈소스 라이브러리이며, 일반적으로 Git이라고 하면 로컬 시스템에서 적용
   * github/gitlab을 통한 Web 저장소를 사용하여 소스 코드 버전 관리 및 공유

### 2. Git 설치
   * [git 다운로드 링크](https://git-scm.com/downloads)
   * 설치 후 터미널등을 사용하여 git 정상인지 확인
   `git --version`
   ![](./image.png)<!-- {"width":340} -->
### 3. Git 사용자 등록
   * 현재 작업중인 개발자의 신분 확인을 위해 설정
   ```
   git config --global user.name "Koo Ji Wan"
   git config --glboal user.email "kjwan@syntekabio.com"
   ```
   * 설정 확인
   ```
   git config --get user.name
   git config --get user.email
   ```

### 4. Git 용어 및 구조
   ![](./image%202.png)<!-- {"width":499} -->
   * git에서 명령에 따른 파일 상태의 변화
     1. stage: 스테이징, 현재 코드 형상을 캡처.
     2. commit: 커밋, 스테이징된 코드 형상을 커밋메시지와 함께 기억.
     3. push: 특정 리포지토리에 commit된 코드를 저장.
     4. pull: 특정 리포지토리에 저장된 코드를 다른 git리포지토리로 불러옴.
   ![](./image%203.png)<!-- {"width":499} -->
   * git 관리 순서
     1. branch: 분기라고 하며, 특정 분기로 코드를 나누어 저장시킬 수 있는 방식.
     2. repositoy: 저장소라고 하며, 여려 branch가 같이 관리되고 있으며, 대게 프로젝트 이름으로 불림.
        * local repository: 로컬시스템 내 git 프로그램으로 관리되는 저장소. 내부적으로만 코드 접근 가능, 보통 임시 저장 용도로 사용.
        * remote repository: github, gitlab등 원격 서버에 관리되는 저장소, 대내외적으로 코드 접근이 가능

### 5. 실사용 예제

* 재직 당시 회사 메일 아이디로 gitlab 사이트 아이디 만들어 접속 해서 진행
* 현재는 github를 통해 활용 중.
1. http://code.syntekabio.co.kr/ 사이트 접속![](./image%204.png)

2. new project -> create blank project -> project name 입력 -> project URL에서 users->본인 이름 선택 -> visibility level=internal로 선택 -> project configuration/initialize repository with a readme 해제 -> create project 클릭
   ![](./image%205.png)

3. gitalb 리포지토리 기반 새 폴더를 만들 경우
```
git clone http://code.syntekabio.co.kr/jwkoo/test-project.git
cd test-project
git switch --create main
touch README.md
git add README.md
git commit -m "add README"
git push --set-upstream origin main
```

4. 존재하는 폴더를 gitlab에 push 할 경우
```
cd existing_folder
git init --initial-branch=main
git remote add origin http://code.syntekabio.co.kr/jwkoo/test-project.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin main
```