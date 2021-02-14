const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleEnter: () => {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: () => {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: () => {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleContext: () => {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[3];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);


// 위 코드와 아래 코드는 확연한 차이가 있다
// 위 코드는 Listener를 통해 우리가 원할 때 event를 실행할 수 있지만
// 이래 코드는 코드가 유효하지않는 이상 영구적으로 event가 실행된다
// const title = document.getElementById("title");
// title.innerText = "Hi! From JS";
// title.style.color = "red";