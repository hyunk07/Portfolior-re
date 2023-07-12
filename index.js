// a 기본값 삭제
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});

// 
$(".toptxt").on("click", () => {
  window.scrollTo({ top: 0 });
});

// .toptxt
/* -------헤더------ */
let prescroll = window.scrollY;
console.log(prescroll);

$(window).on("scroll", () => {
  //스크롤시 변수에 저장
  let scroll = window.scrollY;
  console.log(scroll);
  console.log("prescroll00", prescroll);

  // 이전 스크롤값이 크면 트루, 스크루 올리면 헤더보임
  if (prescroll > scroll) {
    $("header").css({ top: 0 });
  } else {
    // 이후 스크롤값이 크면 풜스, 스크루 올리면 헤더가려짐
    $("header").css({ top: -100 });
  }

  // prescroll에 현재 스크롤값 대입. 현재 좌표에서
  prescroll = scroll;
  console.log(prescroll);
});
/* -------슬라이드------ */
/* 개인 */
//왼쪽 버튼, 이전버튼
$(".inprevBtn").on("click", () => {
  $(" .ingallery > li").last().prependTo(".ingallery ");
  // $('.gallery').animate({ marginLeft: 90 * idx + '%' }, 300);
});

//오른쪽 버튼, 다음버튼
$(".innexBtn")
  .last()
  .on("click", () => {
    $(" .ingallery> li").first().appendTo(".ingallery");
  });
/* 팀 */
$(".tprevBtn").on("click", () => {
  $(" .tgallery > li").last().prependTo(".tgallery ");
  // $('.gallery').animate({ marginLeft: 90 * idx + '%' }, 300);
});

//오른쪽 버튼, 다음버튼
$(".tnexvBtn")
  .last()
  .on("click", () => {
    $(" .tgallery> li").first().appendTo(".tgallery");
  });

// ---------타이핑
const $text = document.querySelector(" .text");

// 글자 모음
const letters = ["제작중입니다...ing", "잠시만 기다려주세요"];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

// ---------타이핑
const $text2 = document.querySelector(" .text2");

// 글자 모음
const letters2 = ["제작중입니다...ing", "잠시만 기다려주세요"];

// 글자 입력 속도
const speed2 = 100;
let j = 0;

// 타이핑 효과
const typing2 = async () => {
  const letter = letters2[i].split("");

  while (letter.length) {
    await wait(speed2);
    $text2.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove2();
};

// 글자 지우는 효과
const remove2 = async () => {
  const letter = letters2[i].split("");

  while (letter.length) {
    await wait(speed2);

    letter.pop();
    $text2.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  j = !letters2[j + 1] ? 0 : j + 1;
  typing2();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing2, 1500);

// ---------------------------------------
const $text3 = document.querySelector(" .text3");

// 글자 모음
const letters3 = ["중요한 건 꺾였는데도 그냥 하는 마음"];

// 글자 입력 속도
const speed3 = 100;
let f = 0;

// 타이핑 효과
const typing3 = async () => {
  const letter = letters3[f].split("");

  while (letter.length) {
    await wait(speed3);
    $text3.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove3();
};

// 글자 지우는 효과
const remove3 = async () => {
  const letter = letters3[f].split("");

  while (letter.length) {
    await wait(speed3);

    letter.pop();
    $text3.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  f = !letters3[f + 1] ? 0 : f + 1;
  typing3();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing3, 1500);
