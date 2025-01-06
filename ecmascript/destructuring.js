/* 비구조화 할당 이전 (파일명: destructuring.js)
객체의 속성 또는 값을 해체하여 그 값을 변수에 각각 할당하여 사용하는 표현식으로 
구조 분해 할당이라고도 한다. */

//객체 리터럴 : const obj = {}; 배열 : const array = [];
console.log("--------------1--------------");
const Week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const mon = Week[0];
const tue = Week[1];
const wed = Week[2];

console.log(mon); 
console.log(tue);
console.log(wed);
console.log("--------------1--------------");

console.log("--------------2--------------");
const user = {
    userId : 'javauser',
    userPwd : 'java1234',
    userName : '홍길동',
    userAge : 30
};
const userId = user.userId;
const userPwd = user.userPwd;
const userName = user.userName;
const userAge = user.userAge;
 
console.log (`
    --------정보출력--------
    유저아이디 : ${userId}
    유저비밀번호: ${userPwd}
    유저이름: ${userName}
    유저나이: ${userAge}
    -----------------------
    `);
console.log("--------------2--------------"); 
console.log("--------------3--------------"); 
/* 배열의 비구조화 할당(=구조 분해 할당)
구조 분해 할당은 말뜻 그대로 구조를 분해해 할당하는 문법이다. 
배열이나 객체에서 요소를 해제해 개별 변수에 그 값을 담을 때 사용한다. */

/*const color = ['red', 'green', 'blue'];
let r = color[0];
let g = color[1];
let b = color[2];*/

const color = ['red', 'green', 'blue'];
const [r, g, b] = color; 
//배열을 구조 분해하여, 저장된 요솟값을 변수 선언과 동시에 순서대로 할당한다
console.log(r);
console.log(g);
console.log(b); 
console.log("--------------3--------------"); 

/* 
const array = [1, 2, 3];
const one = array[0];
const two = array[1];
const three = array[2]; */
console.log("--------------4--------------"); 
// //구조 분해 할당하면 코드를 다음과 같이 간결하게 작성할 수 있다.
// const array = [1,2,3];
// const [one, two, three] = array;
// console.log(`${one} ${two} ${three}`); 

/* 변수 값 변경 
const color = ['red', 'green', 'blue'];
let [r, g, b] = color; 

[b, g, r] = [r, g, b];
console.log(r);
console.log(g);
console.log(b); 
console.log("------------------"); */

/* 조금 더 간결하게 
const [b, g, r] = ['red', 'green', 'blue'];
console.log(r);
console.log(g);
console.log(b);
console.log("------------------"); */

/* 기본값 할당 
const [a, b, c = 'C언어'] = ['C#','javascript'];
console.log(a);
console.log(b);
console.log(c);
console.log("------------------"); */

/* 일부 요소값 무시하기 
const [a,,c,d] = ['C#', 'javascript', 'python', 'react'];
console.log(a);
console.log(c);
console.log(d);
console.log("------------------"); */

// [요구사항 1] 3개 이상의 과일 이름으로 배열을 정의한 후 각각의 변수에 대입하여 출력해 주세요 

const frult = ["apple","banana","grape"];
const [q,w,e] = frult;

console.log(`${q},${w},${e}`);

/* rest 문법(=rest 연산자)
rest 문법은 스프레드 연산자처럼 점 3개(...)로 표현하기 때문에 비슷해 보인다. 
그러나 스프레드 연산자가 주로 값을 전개해서 활용하는 것과는 다르게 
rest 문법은 나머지 값을 처리하는 데 주로 사용한다. 

다음과 같이 배열을 비구조화 할당할 때 rest 문법으로 나머지 값을 처리할 수 있다. */
console.log("--------------4--------------"); 
console.log("--------------5--------------"); 
const [c, j, ...language] = ['C', 'javascript', 'python', 'react', 'C++'];
console.log(c);
console.log(j);
console.log(language.length);
console.log(language[0]);
console.log(language[1]);
console.log(language[2]);
console.log("--------------5--------------"); 
console.log("--------------6--------------"); 
/* 배열의 결합 */
const array1 = ['html', 'javascript'];
const array2 = ['python', 'react', 'C++'];
const array3 = [array1, array2];

console.log("- array1 배열 출력");
for(let i=0; i<array1.length; i++){
     console.log(array1[i]);
}
console.log("--------------6--------------"); 
console.log("--------------7--------------"); 
console.log("- array3 배열 출력");
console.log(array3.toString());
console.log("--------------7--------------"); 
console.log("--------------8--------------"); 
console.log("- coffeeNames 배열 출력");
// for ~ of문 - for in문처럼 객체의 프로퍼티를 열거하지 않는다. 
let coffeeNames = ["Americano", "Cappuccino", "Espresso"];
		
for(let name of coffeeNames) {
     console.log(name);
} 
console.log("--------------8--------------"); 
console.log("--------------9--------------"); 

console.log("- array3 배열 출력");
// const array3 = [array1, array2];
for(let language of array3){
     console.log(language);
}
console.log("--------------9--------------"); 
console.log("--------------10--------------");
console.log("- array4 배열 출력");
const array4 = [...array1, ...array2]; //스프레드 연산자 배열의 값자리에 ...을 사용(값을 펼침)
for(let language of array4){
     console.log(language);
}
console.log("--------------10--------------");
console.log("--------------11--------------"); 


/* [요구사항 2] 학과 정보를 아래의 요청사항에 맞게 코딩해 주세요  */
const subject = ["컴퓨터공학과", "인문학과", "전기전자공학과", "역사학과"];
console.log("1. 배열의 값 출력 (2가지 이상)");
for(let book of subject){
    console.log(book);
}
console.log("");
console.log("2. 구조분해할당으로 설정하여 값 출력");
const [com,man, ...books] = ["컴퓨터공학과", "인문학과", "전기전자공학과", "역사학과"];
console.log(`${com},${man},//${books[0]},${books[1]}`);
console.log("--------------11--------------"); 
  