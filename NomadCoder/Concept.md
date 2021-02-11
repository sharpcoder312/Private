#### 특성

+ 인터프리터 (컴파일 할 필요x)
  + 코드를 작성하면 엔진이 바로 코드를 이해할 수 있음. 즉, 코드를 수정하면 별다른 프로세스 없이 바로 적용

+ 클라이언트 => 확장 ex) node.js 서버 // electron 데스크탑 앱 제작 // react native 모바일 앱 제작
  + 자바스크립트 엔진이 브라우저 밖을 나오는 것을 의미함

#### 변수 Variable

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
  + 사용빈도가 현재 엄청 낮다
  + 단점
    + let과 const와 달리 window 객체 안에 저장된다. 반면 let과 const는 ES6부터 따로 저장소가 생겼다 (window객체는 건드리지 않는 것이 좋다)
    + let과 const와 달리 코드블럭 안에서 선언한 것도 밖으로 끄집어 낼 수 있다



#### 데이터 타입(자료형)

+ string
  + 문자열

  + ""  or ''사용

  + 관련 기본 함수

    + substring 함수

      ````js
      const user = "sang eon";
      console.log(user.substring(0, 4))
      => `seok e` 출력 0번째에서 6번째 문자까지 출력
      ````

    + join // split 함수

      + 각각의 글자를 합쳐 출력 // 쪼개서 **배열의 형태**로 출력

      ````js
      const hobbies = ["game", "programming", "tv"];
      console.log(hobbies.join())
      => `game,programmin,tv`
      console.log(hobbies.split(""))
      => `"g","a","m", ~~`
      "" 내에는 자르는 기준을 입력할 수 있다
      ex) " " 공백을 기준
      ex) "," 쉼표를 기준
      
      심화 )
      const homework = "eng+kor+math"
      console.log(homework.split("+")[0])
      => `eng`		//		여기서 split 하지 않고 [0]만 입력했다면 e가 출력되었을 것이다
      ````

    + toUpperCase // toLowerCase 함수

      + 대소문자로 변환

+ boolean
  
+ true // false
  
+ Number

+ Float
  + Floating number
  + 떠돌이 소수점
  
+ null

  + 선언되었고 null로 값 지정(빈 값)

+ undefined

  + 선언 자체 x (선언 자체는 됐는데 값이 지정되어 있지않다고도 볼 수 있음)

  + 적든 적지않든 결과는 같다

    ````js
    const girlFriend = undefined;
    const girlFreind;		//		두 코드는 같음
    ````

+ symbol





````js
console.log(typeof weight)
````

`typeof`은 타입을 확인하는 명령이다



#### Array

+ 데이터 저장과 정렬
+ 생성(정의)시 []  브라켓 사용 
+ [] 안에는 문자열, 문자, 숫자, 정의한 변수 등이 들어갈 수 있다
+ n번째의 데이터를 출력 원할시 `배열명[n-1]`로 출력한다



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

  위 코드에서 favFood의 fatty를 출력할 시,

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

  + **자신의 페이지에서 js로 선택하는 것은 모든 것이 객체 Object가 된다**

    ````js
    document.queryselector()
    ````

    여기서 **document**는 html을 의미하며 이를 통해서 HTML Document가 JS가 되는 것이다

    또한 document는 많은 key(.~)를 가지고 있다.

    ````js
    console.log(document)
    ````

    이것으로 객체화된 document 내에 있는 요소들을 볼 수 있다

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

+ **Event와 Event handlers**

  + Event : 웹사이트에서 발생하는 것들

  + Event 예시

    + addEventListener

      자바스크립트가 우리의 이벤트를 받기 기다리는 것을 Listen to event라 칭한다. 여기서 우리는 event가 무엇인지 정해야한다. listener는 우리가 이벤트에서 다룰 함수를 의미한다. type은 target이 기다리는 이벤트 행위를 말한다.

      ````js
      addEventListener구문
      target.addEventListener(type, listener);
      ````

      ````js
      function handleResize(){
      	console.log("I have been resized")
      }
      
      
      window.addEventListener("resize", handleResize);
      ````

      코드 맨 마지막줄에 handleResize()라고 적지 않는 것은 바로 함수를 호출해버리기 때문이다. 우리는 우리가 원할때 이 함수를 호출하기를 원한다

#### Tip

+ `console.log`() 는 console 이라는 object안에 log 함수를 뜻한다 

  log 또한 console 안에 속해있기 때문에 함수임과 동시에 object라 할 수 있다

+ Js에서 id로 무언가 선택할 때는 `document.getElementById` 라고 써서 선택할 수 있다

  ````js
  const title = document.getElementById ("title");
  
  console.log(title)
  ````

+ 자바스크립트는 html과 css를 바꾸는 기능을 하지만 이벤트에 반응하기 위해 만들어졌다.

  이벤트란? 웹사이트에서 발생하는 것들을 말한다.
  click,resize,submit,input, change, load, before, closing, printing 같은 것들

