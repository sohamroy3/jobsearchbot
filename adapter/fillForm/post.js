var helper = require('././commonHelper/helper.js')
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
            modal.tags.email=modal.data;
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
    },
    phoneValidation: (modal)=>{
        return new Promise(async function (resolve, reject){
            modal.tags.phone=modal.data;
            let regex=/^[0-9]{10}$/;
            if(modal.data.match(regex)){
                console.log("Matchedddddddd")
                delete(modal.stage)
                resolve(modal)  
            }
            else{
                console.log("Wrong Phone...!")
                reject(modal)
            }
            console.log(modal);
                  
        })
    },
    pincode:(modal)=>{
        return new Promise(async function(resolve, reject){
            let pinInfo = await helper.pincodeInfo(modal.data)
            console.log(pinInfo)
            if(pinInfo == "Error"){
                reject(modal)
            }
            else{
                modal.tags.pincode = modal.data
                delete(modal.stage)
                resolve(modal)
            }
        })
    },
           
}