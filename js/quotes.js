const quotes = [
    {
        quote: "피할 수 없으면 즐겨라.",
        author: "로버트 엘리어트",
    },
    {
        quote: "산다는 것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라.",
        author: "헨리 포드",
    },
    {
        quote: "신은 용기 있는자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author: "엘사 맥스웰",
    },
    {
        quote: "계단을 밟아야 계단 위에 올라설 수 있다.",
        author: "터키 속담",
    },
    {
        quote: "미래는 바로 오늘 준비하는 시람들의 것이다.",
        author: "말콤엑스",
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author: "제임스 오펜하임",
    },
    {
        quote: "행복은 습관이다, 그것을 몸에 지니라.",
        author: "허버드",
    },
    {
        quote: "고통의 원인은 집착이다.",
        author: "부처",
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 떄라곤 없다.",
        author: "볼드윈",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //랜덤 명언 저장(배열 길이만큼)

quote.innerHTML = todaysQuote.quote;
author.innerText = todaysQuote.author;