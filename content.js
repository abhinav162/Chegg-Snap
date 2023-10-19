let timeOut1 = null;
let timeOut2 = null;
let timeOut3 = null;
let timeOut4 = null;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.msg === "start") {
        setInterval(() => {
            var wrapper = document.querySelector(`.app > div > :last-child > footer`)

            // var skipbtn = document.querySelector(`footer > div > div > div > button`);
            setTimeout(() => {
                wrapper.querySelector(`footer > div > div > div > button`).click();
                // skipbtn.click();
            }, 1000)

            // var quesSkipModal = document.querySelector(`#question-skip-modal > div > div > :first-child > :nth-child(2) > div > div > input`);
            setTimeout(() => {
                document.querySelector(`#question-skip-modal > div > div > :first-child > :nth-child(2) > div > div > input`).click();
            }, 2000)


            // var donTkNOW = document.querySelector(`#skip_radio_button_container_4 > label`);
            setTimeout(() => {
                document.querySelector(`#skip_radio_button_container_4 > label`).click();
                // donTkNOW.click();
            }, 3000)

            setTimeout(() => {
                document.querySelector(`#modal-submit-button`).click()
            }, 4000)
        }, 5000)
    }
    else if (message.msg === "stop")
    {
        console.log("Stop message received");
        clearInterval(timeOut1);
        clearInterval(timeOut2);
        clearInterval(timeOut3);
        clearInterval(timeOut4);
    }
});