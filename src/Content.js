chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //비밀번호 변경
    const pwdUrl="https://portal.hanyang.ac.kr/sso/openPage.do?pgmId=P308193&tk=2cbefdb5b90558e3c72743f63b996894d302feff964db4f6e6cc686fba085da9&returl=https%3A%2F%2Fportal.hanyang.ac.kr%2Fport.do"
    const btn_cancel = document.querySelector('input#btn_cancel');
    //코로나 자가진단
    const corona="https://portal.hanyang.ac.kr/openPage.do?pgmId=P320980&tk=daad9bae1afb44e5c91969df5d1031b326e3fea62674ed9f101a5948cd5909f9"
    const coronaCheck = [...document.querySelectorAll('input')].filter(c => c.id.indexOf('b') !== -1 )
    const submitCheck = document.querySelector('input#btn_confirm')
    function click_All_Inputs(inputs){
        inputs.map(c => c.checked = true)
        submitCheck.click()
    }
    switch (request.action) {
        case "autoLogin":
            click_All_Inputs(coronaCheck);
            break;
        default:
            console.log('default')
    }
})