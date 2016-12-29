function hello(name){
  console.log('Hi,'+name);
}
hello('dahee');

//uglify: 코드의 쓸데없는 공백들을 다 없애줌
//uglify -m: 매개변수 같은 값도 짧은 문자로 다 바꿔줌
//uglify 원본 이름 -o 저장할 이름: 바뀐 코드를 저장시켜줌
//저장할이름.min.js를 붙이는 것이 규칙이기도 함
