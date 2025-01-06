/*자바스크립트는 함수를 선언할 때 function 키워드로 다음과 같이 선언한다.
(형식)
function 함수명(매개변수1, 매개변수2, ..., 매개변수n) {
    return;
}
ES6에서는 기존의 함수 선언 방식을 개선한 화살표 함수(arrow function)를 추가.
화살표 함수는 다음과 같이 화살표를 사용해 함수를 선언하는 방식이다.
(형식)
const 함수명 = (매개변수1, 매개변수2, ..., 매개변수n) => {
    return;
} */

//함수 선언식
/*
console.log("-----------1------------");
console.log(sum(4,5)); //-> (호이스팅 O)
function sum(num1,num2){
    return num1 + num2;
 };
 console.log("-----------1------------");
 */
/*
 console.log("-----------2------------");
 //함수 표현식 - 익명함수 = 반드시 먼저 선언(호이스팅 X)
 const sum =  function(num1, num2){
    return num1 + num2;
 ;}
 console.log(sum(4,7));
 console.log("-----------2------------");
  */ 
 console.log("-----------3------------");
//함수표현식 - 화살표함수 (function을 =>로 대체 /return, {}(함수가 1개시) 생략가능)
 const sum = (num1, num2) /*function대체*/ => /*return,{}생략*/ num1 + num2 ;
console.log(sum(2,9));
console.log("-----------3------------");
 
console.log("-----------4------------");
//익명과 화살표 함수
console.log("익명과 화살표 함수");
const f = function(){
    return "100";
};
console.log("f()",f());
console.log("-----------4------------");
console.log("-----------5------------");
const af = () => "100";
console.log("af()",af());
console.log("-----------5------------");
console.log("-----------6------------");
console.log("매개변수가 하나일때 괄호() 생략가능")
const f1= function(a){
    return 100 + a
};
console.log("f1(10)",f1(10));
console.log("-----------6------------");
console.log("-----------7------------");
const af1 = (a) => {
    return 100 + a
};
console.log("af1(5)",af1(5));
console.log("-----------7------------");
console.log("-----------8------------");
const af11 = a => 100 + a;
console.log("af11(1)",af11(1));
console.log("-----------8------------");
console.log("-----------9------------");
console.log("매개변수가 두개이상일때 괄호() 생략불가")
const f2 = function(a,b){
    return a * b;
};
console.log("f2(3,5",f2(3,5));
console.log("-----------9------------");
