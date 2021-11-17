chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Got an alarm!", alarm);
    if (alarm.name === "testAlarm") {
        chrome.notifications.create('test', {
            type: 'basic',
            iconUrl: './icons/icon128.png',
            title: 'C\'est parti !',
            message: 'bouge toi !',
            priority: 2
        });
    }
});