module.exports = {
    emailValidation: (modal)=>{
        return new Promise(async function (resolve, reject){
            let regex=/^(.+)@(.+)$/;
            console.log(modal);
            delete(modal.stage)
            resolve(modal)        
        })
    },
           
}
