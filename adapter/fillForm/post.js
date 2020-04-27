module.exports = {
    name: (modal)=>{
        return new Promise(async function (resolve, reject){
        
           modal.tags.name=modal.data;
                
                delete(modal.stage)
                resolve(modal)  
            
            
           
            console.log(modal);
                  
        })
    },
    emailValidation: (modal)=>{
        return new Promise(async function (resolve, reject){
            let regex=/^(.+)@(.+)$/;
            if(modal.data.match(regex)){
                console.log("Matchedddddddd")
                delete(modal.stage)
                resolve(modal)  
            }
            else{
                console.log("Wrong email...!")
                reject(modal)
            }
            console.log(modal);
                  
        })
    }
           
}
