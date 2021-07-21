document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

        const activeTab = tabs[0];
        //변수 선언 및 도큐먼트 지정
        const autoCheckBtn = document.querySelector('button#autoCheck');

        autoCheckBtn.addEventListener("click", ()=>{
            console.log('popup')
            chrome.tabs.sendMessage(activeTab.id, { action: "autoLogin" })
        });
    })
})