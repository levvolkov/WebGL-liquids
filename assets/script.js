const myTags = [
  ,
  "JavaScript",
  "CSS",
  "HTML",
  "Docker",
  "Postman",
  "DBeaver",
  "Selenium",
  "Java",
  "git",
  "DevTools",
  "PostgreSQL",
  "Maven",
  "Gradle",
  "MySQL",
  "JUnit",
  "InteliJ IDEA",
  "Selenide",
  "VSCode",
  "Node.js",
  "Jest",
  "Playwright",
  "Puppeteer",
  "Cypress",
  "Jenkins",
];

var tagCloud = TagCloud(".content", myTags, {
  // radius in px 320
  radius: 400,

  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});

var colors = ["#2F4F4F"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".content").style.color = random_color;

/* Функция задержки для текста h1 */
function m(t) {
  for (
    var e,
      n = document.getElementById(t),
      i = n.innerHTML.replace("&amp;", "&").split(""),
      a = "",
      o = 0,
      s = i.length;
    s > o;
    o++
  ) {
    e = i[o].replace("&", "&amp");
    a += e.trim()
      ? '<span class="letter-' + o + '">' + e + "</span>"
      : "&nbsp;";
  }

  n.innerHTML = a;

  setTimeout(function () {
    n.className = "transition-in";
  }, 500 * Math.random() + 500);
}

window.onload = function () {
  m("h1");
};

/* Убирает мерцание заголовка  id="h1" при загрузке страницы */
$(document).ready(function () {
  $("#h1").removeClass("hidden");
});
