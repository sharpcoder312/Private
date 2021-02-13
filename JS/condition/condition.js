// == 와 === 비교 // tip) !== 같지않다
// 피연산자 &&(and) ||(or)

const x = "10";

if (x == 10) {
  console.log("x is 10");
} else if (x == 20) {
  console.log("x is 20");
} else {
  console.log("x is string");
}

if (x === 10) {                   //  ===는 자료형이 틀렸을 때 생길 수 있는 오류들을 사전에 차단할 수 있다
  console.log("x is 10");
} else if (x === 20) {
  console.log("x is 20");
} else {
  console.log("x is string");
}

const age = prompt("How old are you?");

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}


// 3항 연상자
// 조건 ? 참일경우 : 아닐경우 ;
// 여러 경우가 나온다면 그냥 if문을 쓰는 것이 옳을 것이다

const age = 20;
let group;    //  let group = ""
age > 20 ? group = "senior" : group = "junior";

// if (x > 20) {
//   group = "Senior"
// } else {
//   group = "Junior"
// }

console.log(group)



// switch case문

const animal = "monkey";

switch (animal) {
  case "lion":
    console.log("big");
    break;
  case "tiger":
    console.log("big");
    break;
  case "monkey":
    console.log("medium");
    break;
  case "cat":
    console.log("small");
    break;
  default:                      // 아무 case에도 속하지 않을때 기본값 줄 수 있음
    console.log("not animal");
    break;
}


