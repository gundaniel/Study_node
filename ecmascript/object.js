/*
객체에 포함된 데이터(이름, 값 쌍쌍)를 가리켜 객체의 프로퍼티라고 부른다. 
객체를 생생하는 방법은 다음과 같다.
• Object() 생성자 (X)
• 객체 리터럴     (★)
• 생성자 함수     (X)
• ES6의 클래스    (★)
*/

//----------------------------------------------------------------

//객체 리터럴
let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

//프로퍼티 추가
dic.apple = "사과";
dic.ten = 10;

console.log(dic.apple);
console.log(dic.ten);
//----------------------------------------------------------------

console.log("---------------------");
//프로퍼티 삭제

delete dic.girl;

console.log(dic.boy);
console.log(dic.girl);  //undefined (삭제됨)
console.log(dic.friend);
console.log(dic.apple);
console.log(dic.ten);

console.log("---------------------");
//----------------------------------------------------------------

let book = {
    name:"너의 이름은",
    author: "신카이 마코토",
    publication:"2016"
};

console.log(` 
    책 정보를 출력합니다
    책제목: ${book.name}, 
    저자: ${book.author}, 
    출판년도: ${book.publication}`
);  
console.log("---------------------");

//----------------------------------------------------------------
function creatBook(title, author, publisher, pubdate){
    return{
        title :title,
        author : author,
        publisher : publisher,
        pubdate : pubdate 
    };
} 

const bookData = creatBook("너의 이름은","신카이마코토","미정출판사","2016년");
console.log(`
    책 정보
    책이름 : ${bookData.title} 
    저 자  : ${bookData.author} 
    출판사 : ${bookData.publisher}
    출판년도 : ${bookData.pubdate}
    `);

console.log("---------------------"); 
//----------------------------------------------------------------

//프로퍼티 수정
/*let obj1 = {
     present : "현재",
};

console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);*/

//객체 상수 프로퍼티 수정
/*const obj1 = {
     present : "현재",
};

console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);*/
// 변경됨

//객체 상수 변경(실행결과? = 오류발생)
/*const obj1 = {
    present : "현재",
};

obj1 = { };
console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);

console.log("----------------");*/

//객체의 메소드

const musician = {
    play: function(instrument){
        return `${instrument}을(를) 연주한다`;
    }
}

console.log(musician.play("기타"));
console.log(musician.play("피아노"));

console.log("----------------");
 
const memberData = {
    name : "홍길동",
    age : 20 , 
    display : function(){
        return `${this.name}님의 나이는 "${this.age}"살 입니다.`;
    }
};
console.log(memberData.display());
console.log("----------------");

//단축 프로퍼티 적용

let id = "javauser";
let pwd = "java1234";

let user = {id,pwd};

console.log(user.id);
console.log(user.pwd);
console.log("------------------------------");


//for..in
let user1 = {
    id : "nodeuser",
    pw : "node1234",
    name : "홍길동",
    moblie: "010-8934-1234",
    country : "대한민국"  
}
//user1.info -> 정적 접근시 . 사용 (이름이 거의 바뀔일이 없을때 사용)
//user1[info] -> 동적 접근시 [] 사용 (이름이 바뀌어도 상관없음)

for(let info in user1){
    console.log(`${info} : ${user1[info]}`);
}
console.log("------------------------------");
 


//getName setName -> 접근자 설정자가 아님

//클래스 표현식
/*const Coffee = class{
    constructor(){
    this.name = "Americano";
    }
    getName(){
        return this.name;
    }
    setName(name) {
        this.name = name;
    }    
    display(){
    console.log(this.name)
    }
};*/

//설정자 접근자
/*class Coffee{
    //생성자
    constructor(name){
        this._name = name;
    }
    //접근자
    get name(){
        console.log("call getter");
        return this._name;
    }
    //설정자
    set name(name){
        console.log("call setter");
        this._name = name;
    }
    display(){
        console.log(this._name);
    }
}

let coffee  = new Coffee("Americano");
coffee.name= "Espresso";
console.log(coffee.name);
console.log("----------------------------");
*/

//-----------------------------------------------------------
//[요구사항3] 영화정보를 가지는 클래스 선언 및 제목과 장르를 프로퍼티로 선언

class Movie{
    constructor(mName, mGenre){
        this._mName = mName;
        this._mGenre = mGenre;
    }

    get mName(){
        return this._mName;
    }
    set mName(mName){
        this._mName = mName;
    }
    get mGenre(){
        return this._mGenre;
    }
    set mGenre(mGenre){
        this._mGenre = mGenre;
    }
    display(){
        return `영화 이름은 ${this._mName}이며, 영화 장르는 ${this._mGenre} 입니다`;
    }
}    

let movie = new Movie("베놈3","코미디/액션");
console.log(movie.display());
console.log("----------------------------");

//-----------------------------------------------------------

//정적 메서드 

class Coffee {
    constructor(name){
        this._name = name;
        //정적 프로퍼티
        Coffee.salesVolume++;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    display(){
        console.log(this._name);
    }
    //정적 메소드 
    static getSalesVolume(){
        return Coffee.salesVolume;  
    }
}

//정적 프로퍼티 초기화
 Coffee.salesVolume = 0;
 let coffee = new Coffee("Americano");
 console.log(coffee.name);
 
 //정적메서드 호출
 console.log(Coffee.getSalesVolume());

 coffee = new Coffee("Espresso");
 console.log(coffee.name);
 //정적 메서드 호출2
 console.log(Coffee.getSalesVolume());
 console.log("----------------------------");


 //함수 선언시 function 키워드로 선언
 /*function 함수명(매개변수1, 매개변수2, 매개변수n){
    return;
 }
 //함수 표현식
 const 함수명 = function(){

 }*/