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