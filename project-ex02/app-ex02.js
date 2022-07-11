/**
 * douzone-bipa-math npm 모듈 테스트(모듈 패키지: local 배포)
 * 
 * 로컬 패키지 배포
 * $[project-ex02] npm i ../douzone-bipa-math
 * 명령으로 설치 후 테스트
 */

var math = require('douzone-bipa-math');

console.log(math.PI);
console.log(math.max(11,156,10,12,55));
console.log(math.min(11,156,10,12,55));