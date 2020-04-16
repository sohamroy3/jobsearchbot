

require("parramato").Server({
    root:"https://pixie.jubi.ai/jobsearchbot",//pixie link
    socketLocalPath: '/socket',///
    httpPort:4445,//server is running on port no 4445
    cluster:false,
    dbUri:'mongodb://root:root@127.0.0.1:27017/pigaro',//
    staticDirectory:__dirname+"/static",
    adapterPath:"/adapter",
    adapterDirectory:__dirname+"/adapter",
    projectId:"job_search_377703808087",///////////projectid changed
    dashbotKey:"VxtYPVW6168LIiXwqpIku9wE",
    directMultiplier:1,
    fallbackMultiplier:0.8,
    passphraseMiddleware:"YGUYGgyjgblgUGIYGIGkwhbiuashbo98u9283hr9h24rqIYGI932kbidbiadsYE",
    timeoutSeconds:60,
    fcmServerKey:"AAAAYTZC9WQ:APA91bFRmKa",
    firebaseWebConfig:{
        apiKey: "sd-ZrO9xKQ",
        authDomain: "on-f31.firebaseapp.com",
        databaseURL: "https://on-f31.firebaseio.com",
        projectId: "on-f31",
        storageBucket: "",
        messagingSenderId: "4175221234234"
    }
},()=>{
    //TO DO AFTER INITIALIZATION
})