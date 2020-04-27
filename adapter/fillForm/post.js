var emailValidation=(modal)=>{
    var regex=/^(.+)@(.+)$/;
    
        return new Promise(async function (resolve, reject){
            console.log(modal);
            delete(modal.stage)
             resolve(modal)
            
        })


    }
    



module.exports= emailValidation;