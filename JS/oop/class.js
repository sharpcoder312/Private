// ES6부터 class가 추가 됐는데. 기능은 같고 적는 방법만 상이하다
// oop.js의 console.log(song1.getInfo())와 같은 값이 찍히는 것을 볼 수 있다

class Song {
  constructor(title, singer, year) {
    this.title = title;
    this.singer = singer;
    this.year = year;
  }
  getInfo() {                                                             //    function 키워드는 필요없다
    return `This title is ${this.title}. And singer is ${this.singer}`;
  }
}

const song1 = new Song("Gang", "Rain", "2010-11-23");
console.log(song1.getInfo())