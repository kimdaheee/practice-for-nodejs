//웹 서버가 되는 코드
const http = require('http');
//어플리케이션을 동작하기 위해서는 nodejs에서 제공하는 http 모듈이 필요하다는 뜻
//리턴값을 http에 담은 것
//한번 할당되면 거기에 할당된 값을 바꿀 수 없기 때문에 상수(const)

const hostname = '127.0.0.1';
//127.0.0.1로 접속한 사용자에 대해서 응답하라는 명령
const port = 3000;

const server = http.createServer((req, res) => {
  //서버를 만듦
  //서버 인스턴스 생성
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  //모든 응답 헤더와 본문이 전송되었음을 서버에 알림
  //createserver 함수를 호출하면 http의 server라는 객체를 리턴하게 됨
  //이 객체가 listen이라는 함수를 가지고 있기 때문에 호출이 가능
});

server.listen(port, hostname, () => {//포트,호스트네임,콜백
  //서버가 리스닝 하게 시킴
  //hostname: 컴퓨터의 ip
  //비동기식 함수
  //마지막 매개변수는 callback 서버가 결합되었을 때 호출됨
  console.log(`Server running at http://${hostname}:${port}/`);
});
