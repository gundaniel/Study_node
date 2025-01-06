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
 


 