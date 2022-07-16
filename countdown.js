let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://3.bp.blogspot.com/-KEpe5ww6bIA/UNO2A04yTQI/AAAAAAAAIwY/yiMMHxRTXms/s1600/number_9.png",
"https://3.bp.blogspot.com/-8SyWiLcpoWw/UNO2AHXdufI/AAAAAAAAIwU/fNc6cj-Qf5s/s1600/number_8.png",
"https://2.bp.blogspot.com/-tjYbwCQw4S8/UNO1-r_86nI/AAAAAAAAIwI/LiSlF5IDHkE/s1600/number_7.png",
"https://4.bp.blogspot.com/-XihUIBuL8k4/UNO191EQDcI/AAAAAAAAIwA/Kn7VSW6ToTg/s1600/number_6.png",
"https://4.bp.blogspot.com/-wc3qqfFnInQ/UNO19KMHOCI/AAAAAAAAIv4/YJj9twvvI0g/s1600/number_5.png",
"https://2.bp.blogspot.com/-ACDt5s7fi5s/UNO18HREIRI/AAAAAAAAIvw/GQICsxU_jFw/s1600/number_4.png",
"https://2.bp.blogspot.com/-YWUaTFjv2Lw/UNO17P9q_bI/AAAAAAAAIvo/Oiyc7TOC3V0/s1600/number_3.png",
"https://1.bp.blogspot.com/-zYsWvZ2Dzek/UNO16JRlO-I/AAAAAAAAIvg/uZ8rFCv3Fko/s1600/number_2.png",
"https://4.bp.blogspot.com/-7T-JzvxK5y0/UNO15R_x8oI/AAAAAAAAIvY/q6WNM45XVhE/s1600/number_1.png",
"https://3.bp.blogspot.com/-tYr6u3ie0s4/UNw-x5hdEYI/AAAAAAAAJ0Y/dqcpRVu4vr4/s1600/number_0.png",
"https://2.bp.blogspot.com/-bmZcFPhhwsE/VPQUGlP2iOI/AAAAAAAAsHE/uNUcLiyKKuA/s800/text_natsuyasumi.png"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}