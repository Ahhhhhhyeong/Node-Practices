/*
douzone-bipa-math 파일 모듈 테스트
하나의 프로젝트 안의 모듈간 export/import 할 때 방식
*/
var math = require('../douzone-bipa-math/index');

console.log(math.PI);
console.log(math.max(11,156,10,12,55));
console.log(math.min(11,156,10,12,55));