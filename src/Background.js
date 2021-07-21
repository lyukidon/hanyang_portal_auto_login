chrome.commands.onCommand.addListener(function(command) {
    console.log(command)
    if (command == 'shortcut1'){
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            console.log('send')
                chrome.tabs.sendMessage(tabs[0].id, { action: "autoLogin" })
        })
    }
});