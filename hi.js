const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "userName"; //key값을 설정.
const SHOWING_CN = "showing"; //보이게

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //해당하는 value 가져옴
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

// 사용자 이름 입력되었을 때 실행시킬 함수
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //입력칸없애고
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`; //헬로우멘트
}

// 사용자 이름이 아직 입력되지 않았을 때
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit); //이벤트함수
}

// 사용자 이름 제출 이벤트
function handleSubmit(event) {
  event.preventDefault(); // 자동새로고침 막기
  const currentValue = input.value; // 인풋으로 받은 밸류
  paintGreeting(currentValue); // 그 받은 밸류를 페인트
  saveName(currentValue); // 그걸 저장
}

// 사용자 이름 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function init() {
  loadName();
}

init();
