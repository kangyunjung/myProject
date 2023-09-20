const messages = [
    "미래호의 발사는 이곳 미래호 연구실에 있는 총 7개의 구역에서 담당한단다.",
    "다음 메시지를 표시합니다.",
    "더 많은 메시지를 추가할 수 있습니다."
];

const typingElement = document.getElementById('typing');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let messageIndex = 0;

function typeMessage() {
    const message = messages[messageIndex];
    let messageCharIndex = 0;

    function type() {
        if (messageCharIndex < message.length) {
            typingElement.innerHTML += message.charAt(messageCharIndex);
            messageCharIndex++;
            setTimeout(type, 100); // 다음 글자를 0.1초마다 추가
        } else {
            // 메시지 표시가 완료되면 버튼 활성화
            prevButton.disabled = messageIndex === 0; // 첫 번째 메시지에서는 이전 버튼 비활성화
            nextButton.disabled = messageIndex === messages.length - 1; // 마지막 메시지에서는 다음 버튼 비활성화
        }
    }

    typingElement.innerHTML = ''; // 이전 텍스트를 지움
    type(); // 타이핑 효과 시작
}

prevButton.addEventListener('click', function () {
    // 이전 버튼 클릭 시 이전 메시지 표시
    messageIndex = Math.max(messageIndex - 1, 0);
    prevButton.disabled = true; // 버튼 비활성화
    nextButton.disabled = true;
    typeMessage();
});

nextButton.addEventListener('click', function () {
    // 다음 버튼 클릭 시 다음 메시지 표시
    messageIndex = Math.min(messageIndex + 1, messages.length - 1);
    prevButton.disabled = true; // 버튼 비활성화
    nextButton.disabled = true;
    typeMessage();
});

// 페이지 로드 시 처음 메시지 표시
typeMessage();