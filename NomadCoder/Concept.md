변수 Variable

+ 생성 // 초기화 // 사용 or 업데이트(modify)
  + ex) `a = 21` 변수 a 생성 후 21로 초기화
+  `let`  
  + 처음 변수를 생성을 하거나 초기화 할 때 선언
  + 업데이트 가능
+ `const` 
  + constant 상수
  + let과 달리 업데이트 불가
+ `var` 
  + variable



#### 데이터 타입

+ string
  + 문자열
  + ""  or ''사용
+ boolean
  + true // false

+ Number
+ Float
  + Floating number
  + 떠돌이 소수점



#### Array

+ 데이터 저장과 정렬
+ 생성(정의)시 []  브라켓 사용 
+ [] 안에는 문자열, 문자, 숫자, 정의한 변수 등이 들어갈 수 있다
+ n번째의 데이터를 출력 원할시 `[n-1]`로 출력한다



#### Object

+ Array와 달리 각 value에 이름을 줄 수 있다. 쉽게 말해, data에 label을 주는 것이다

+ 생성(정의)시 {} 컬리 브라켓 사용

+ 특정 데이터 출력 원할시 `객체명.데이터` 로 출력한다

+ 특정 데이터만 가져와서 업데이트 가능

  ````js
  const nicoInfo = {
      name:"Nico",
      gender: "Male"
  }
  nicoInfo.gender = "Female"
  ````

+ Object와 Array는 서로 종속 시킬 수 있다

  ````js
  const nicoInfo = {
      name:"Nico"
      gender: "Male"
      favMovies: ["Along the gods", "LOTR"]
      favFood: [
          {
              name: "Kimchi",
              fatty: false
          },
          {
              name: "Cheese burger",
              fatty: true
          }
      ]
  }
  ````

  위 코드에서 facFood의 fatty를 출력할 시,

  ````js
  console.log(nicoInfo.favFood[0].fatty)
  ````

  이런 식으로 출력 가능



#### Function

````js
function sayHello(name, age){
    console.log('Hello!', name, "you have", age);
}

sayHello("Nicolas", 15)
````

위 코드에서 `name`과 `age`는 **매개변수(parameter)** `Nicolas`와 `15`는 **전달인자(argument)**라 부를 수 있다.

매개변수는 변수(variable) 전달인자는 값(value)로 보는 것이 일반적이다.

또한, 위의 코드는 더 섹시하게 표현할 수 있다

````js
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Nicolas", 15);
````

````js
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas)
````

이하의 코드는 객체와 함수를 섞은 것이다

````js
const calculator = {
    plus: function(a, b){
        return a + b;
    }
    minus: function(a, b){
        return a - b;
    }
	multiply: function(a, b){
        return a * b;
    }
	divide: function(a, b){
        return a / b;
    }
	power: function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5)
console.log(plus)
````



#### DOM

+ Document Object Model
+ 자바스크립트에서 html에 있는 요소(태그)를 객체로 바꾸어서 변경(사용)할 수 있다. 한 마디로 js에서 html 내용 조작이 가능하다
  + 자신의 페이지에서 js로 선택하는 것은 모든 것이 객체 Object가 된다

+ `console.dir()`은 `console.log`와 달리 JSON과 같은 트리 구조로 출력하는데, DOM JS 객체의 전체 표현을 보려고 할 때 유용하다

  물론 `console.log`는 요소를 HTML과 같은 트리 구조로 출력한다

  ````js
  title.innerHTML = "Hi! From JS";
  title.style.color = "red";
  document.title = "I own you now";
  ````

  ````js
  document.queryselector()	//	정의 : queryselector는 특정 name이나 id를 제한하지 않고 css선택자를 사용하여 요소를 찾을 수 있다. 객체를id로 찾고싶다면 "#title"  class로 찾고 싶다면 ".title"
  document.getElementById		//	gets only by ID
  document.getElementsByClassName		//	 gets MANY elements by classname
  ````

  

#### Tip

+ `console.log`() 는 console 이라는 object안에 log 함수를 뜻한다 

  log 또한 console 안에 속해있기 때문에 함수임과 동시에 object라 할 수 있다

+ Js에서 id로 무언가 선택할 때는 `document.getElementById` 라고 써서 선택할 수 있다

  ````js
  const title = document.getElementById ("title");
  
  console.log(title)
  ````



