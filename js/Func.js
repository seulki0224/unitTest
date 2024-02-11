//함수


//1. [기본 함수 구조]
//함수선언
function helloFunc(){
  //실행코드
  console.log(1234);
}
//함수호출
helloFunc();

//2. [**return] 키워드를 사용하여 
//JS데이터를 함수밖으로 내보내기 할수 있고, 
//그 값을 새로운 변수에 할당하여 추가적으로 사용할수 있다.
function returnFunc(){
    return 123;
}
let aReturn = returnFunc();
console.log(aReturn);

//3. [매개변수] 사용
//*매개변수와 인수 구분!
function sum(a, b) { //** 매개변수(parameters) = a, b
  return a+b;
}
let a = sum(1,2); //** 인수 (arguments) = 1, 2
let b = sum(7,12);
let c = sum(2,4);
console.log(a,b,c);

//4. 기명함수[** 함수 선언 **]
//함수에 이름을 명시하는것
function hello(){
  console.log('기명함수 호출 함수선언')
}
//4.1호출방법은 동일
hello();

//5. 익명함수[ **함수 표현** ]
//데이터 활용 또는, 변수에 할당하여 사용
//이름이 없으면 호출할수 없으므로 변수에 할당하여 사용
//호이스팅에서 중요하게 사용됨
let world = function(){
  console.log('익명함수 호출 함수표현')
}
//5.1호출방법은 동일
world();

//6. 객체 데이터
const heropy = {
  name :' HEPOPY',
  age : 85,
  //**메소드(Method)** : 속성부분에 함수가 할당외어있는것을 Method라 함
  getName : function(){
    return this.name; 
    //** this : 소속돼 있는 객체 데이터를 의미함  */
    //** Return키워드로 함수에서 빠져나갈수 있음 */
  }
};
//6.1 호출방법 변수에담아서 호출
const hisName = heropy.getName();
console.log(hisName);
//6.2 또는
console.log(heropy.getName());