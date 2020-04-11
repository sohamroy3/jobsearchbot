require("parramato").createAdapter("intent",{
    operationFileNames:{
        validate:"post",
        decorate:"pre"
    },
    adapterDirectory:__dirname+"/adapter"
})