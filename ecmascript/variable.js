// 변수 선언
// 선언과 동시에 값을 주어야 자료형이 결정된다

var number = 10;

var number = "자바스크립트";
console.log(number);

console.log("---------------");

var number = 30;
console.log(number);

console.log("---------------");

console.log(number1);

var number1 = 40; //변수는 끌어올려진다 (호이스팅)
console.log(number1);

number2 = 40;
var number2;
console.log(number2);

console.log("---------------");

//3.for문에서 초기화식 변수선언
console.log(i);
for(var i = 0; i <3; i ++){
    console.log("TEST i= " + i);
}
i = 0;
console.log("---------------");

var i;
console.log(i);
for(i=0; i<3;i++){
    console.log("TEST i = " + i );
}
console.log("---------------");

//4. if문 내에서 변수선언

if(num !== 10) { 
    // var로 선언한 변수는 끌어 올려진다.
    var num = 20;
    console.log("num !== 10");
}else{
    console.log("num === 10");
}
console.log("num= "+num);
console.log("----------------");

// let 선언과 동시에 초기화
let number3 = 100;
console.log(number3);
// 같은 이름으로 중복 선언이 불가능하다
// 변수 선언의 끌어올림이 발생하지 않는다.
console.log("----------------");

// const 상수 선언. 선언과 동시에 초기화해야 한다.
const number4 = 10;
console.log(number4);


//----------------------------------------------
//클래스 선언문 

/*class Coffee {
    constructor(){
        this.name = "Americano";
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    display(){
        console.log(this.name);
    }
}

let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.name());
coffee.display();
console.log("----------------");
*/
// 설정자 접근자

class Coffee{
    constructor(name){
        this._name = name;
    }

    //getter 함수
    get name(){
        console.log("call getter");
        return this._name;
    }

    //setter 함수
    set name(name){
        console.log("call setter");
        this._name = name;
    }
    display(){
        console.log(this._name);
    }
}

