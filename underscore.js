var _ = require('underscore');
//모듈을 가져온 다음 실행시킬 수 있고 객체를 리턴
var arr = [3,6,9,1,12];
//배열을 만듦
console.log(arr[0]);
console.log(_.first(arr)); //첫번째 원소값을 가져오는 함수
console.log(arr[arr.length-1]);
console.log(_.last(arr));//마지막 원소값을 가져오는 함수
