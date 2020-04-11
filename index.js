require("parramato").Server({
    root:"https://yourdomain.com/path",//pixy link
    socketLocalPath: '/socket',///
    httpPort:4000,//server running port
    cluster:false,
    dbUri:'mongodb://root:root@127.0.0.1:27017/pigaro',//
    staticDirectory:__dirname+"/static",
    adapterPath:"/adapter",
    adapterDirectory:__dirname+"/adapter",
    projectId:"job search_839521566830",///////////projectid changed
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