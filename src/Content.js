chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //비밀번호 변경
    // const btn_cancel = document.querySelector('input#btn_cancel');
    //코로나 자가진단
    const coronaCheck = [...document.querySelectorAll('input')].filter(c => c.id.indexOf('b') !== -1 )
    const submitCheck = document.querySelector('input#btn_confirm');
    function click_All_Inputs(inputs){
        inputs.map(c => c.checked = true)
        submitCheck.click()
    }
    switch (request.action) {
        case "autoLogin":
            click_All_Inputs(coronaCheck);
            break;
        default:
            console.log('error')
    }
})