// constructor function
// 일반적으로 대문자로 네이밍 한다
function Song(title, singer, year) {			//	song (x) Song(o)
	this.title = title;
  this.singer = singer;		//	this는 현재 이 object를 말한다
  this.year = new Date(year);
  this.getInfo = function () {    //  변수 뿐만 아니라 함수도 넣을 수 있다
    return `This title is ${this.title}. And singer is ${this.singer}`;
  }
  this.getYear = function () {
    return this.year.getUTCFullYear;    //  return 값을 메서드 내가 원하는 만큼 얻을 수 있다
  }
}

// constructor function은 프로토타입으로도 등록할 수 있다
Song.prototype.getInfo = function () {
  return `This title is ${this.title}. And singer is ${this.singer}`;
}
Song.prototype.getYear = function () {
  return this.year.getUTCFullYear;
}

const song1 = new Song("Gang", "Rain", "2010-11-23");
const song2 = new Song("GangGang", "storm", "2010-11-24");
const song3 = new Song("GangGangGang", "Sun", "2010-11-25");
// new 키워드를 통해 기존 인스턴스를 삭제하고 새로운 인스턴스를 생성한다

console.log(song1.getInfo())
console.log(song1)
console.log(song1,song2,song3)
//  song1 이라는 객체안에 함수로 정의되었기때문에 getInfo가 아닌 getInfo()라고 써주는 것이 맞다 하지만 함수를 굳이 바로 호출하지 않을거라면 ()를 빼주면 된다
// () 안에는 return값이 들어갈 것이다
