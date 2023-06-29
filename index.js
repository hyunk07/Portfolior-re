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
$(".prevBtn").on("click", () => {
  $(" .ingallery > li").last().prependTo(".ingallery ");
  // $('.gallery').animate({ marginLeft: 90 * idx + '%' }, 300);
});

//오른쪽 버튼, 다음버튼
$(".nexBtn")
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
