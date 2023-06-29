/* ---------------------------- scroll-up-bar ---------------------------- */
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
/* ---------------------------- 스크롤 up버튼 ---------------------------- */
$(document).on("scroll", () => {
  let scrollHT = $(document).scrollTop();

  if (scrollHT > 5) {
    $(".upbtn").css({ opacity: 1, pointerEvents: "all" });
  } else {
    $(".upbtn").css({ opacity: 0, pointerEvents: "none" });
  }
});
/* ---------------------------- 스크롤 다운버튼 ---------------------------- */
$(document).on("scroll", () => {
  let scrollHT = $(document).scrollTop();

  if (scrollHT > 5) {
    $(".main-down").css({ opacity: 0, pointerEvents: "none" });
  } else {
    $(".main-down").css({ opacity: 1, pointerEvents: "all" });
  }
});
/* ---------------------------- a[href="#"] ---------------------------- */
$('a[href="#"]').on("click", (e) => e.preventDefault());

/* ---------------------------- globalNav ---------------------------- */
const globalNav = document.querySelector(".nav-bar");
const mobileBtn = document.querySelector(".mobile-btn");
mobileBtn.addEventListener("click", () => globalNav.classList.toggle("act"));

/* ---------------------------- kakao-map ---------------------------- */
var mapContainer = document.getElementById("kakao-map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.576062, 126.973562), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
map.setZoomable(false);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도 중심 좌표 변화 이벤트를 등록한다
kakao.maps.event.addListener(map, "center_changed", function () {
  console.log("지도의 중심 좌표는 " + map.getCenter().toString() + " 입니다.");
});

// 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
kakao.maps.event.addListener(map, "click", function (mouseEvent) {
  console.log(
    "지도에서 클릭한 위치의 좌표는 " + mouseEvent.latLng.toString() + " 입니다."
  );
});

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.576062, 126.973562), // 마커의 좌표
  map: map, // 마커를 표시할 지도 객체
});
