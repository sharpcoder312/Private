const animals = [
  { name: "monkey", size: "medium", weight: 100 },
  { name: "lion", size: "big", weight: 200 },
  { name: "tiger", size: "big", weight: 200 },
  { name: "hippo", size: "big", weight: 300 },
  { name: "cat", size: "small", weight: 10 }
]




// old
for (let i = 0; i < animals.length; i++) {      // 여기서 animals.length에 들어갈 것은 `배열의 길이(크기)`이다. ex) i < 5
  console.log(animals[i]);
}

// new
for (let animal of animals) {     //  let parameter(요소)명 of 배열명  tip) 요소는 아무거나 넣어줘도 상관없다. 단, 타인이 이해할 수 있게끔 하는 것이 좋다.
  console.log(animal.size);
  console.log(animal.name);
}



// ES6



// forEach
animals.forEach(function (animal, index) {     //  () 자리에는 parameter(요소)명을 넣는다. 또한, forEach는 기본적으로 index도 함께 받아볼 수 있다
  console.log(animal, index);
  console.log(animal.size, index);
  console.log(animal.name, index);
})



// map 배열 재정의
const mappedAnimals = animals.map(function (animal) {
  // return animal.name          //  배열을 재정의 하기위해서는 결과값을 return해야한다. // name만 가진 배열 반환
  // return { name: animal.name, size: animal.size }
  return `${animal.name} is ${animal.size}`;
})

console.log(mappedAnimals)     

// 추가 arrow 함수
// function(){} = ()=>{}
const mappedAnimalss = animals.map((animal)=>{
return animal.name
})          // 여기서 arrow함수의 장점을 볼 수 있는데 map함수의 인자가 animal처럼 1개 이고 return이 1줄 일 때 소괄호, 중괄호와 return을 빼고 쓸 수 있다
const mappedAnimalsss = animals.map(animal=>animal.name)



// filter 원하는 값만 필터링
const filteredAnimals = animals.filter(animal => animal.size === "big")
console.log(filteredAnimals)

const filteredAnimalss = animals.filter(animal => animal.weight >= 200 && animal.size === "big")
console.log(filteredAnimalss)



// reduce 배열의 합 구하기, 새로운 형태 도출 등등
const reducedAnimals = animals.reduce((acc, cur) => {    //    accmulate 축적하다
  return acc + cur.weight
}, 0)

console.log(reducedAnimals)
// 새배열 정의 = 기존배열.reduce((쌓이는값, 현재값)) => {
// return 쌓이는값변수 + 현재값변수.합구할요소 
// }, 초기값)                                               초기값(보통 0)을 넣어주는 것이 굉장히 중요하다! 오류 차단