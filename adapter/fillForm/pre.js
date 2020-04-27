module.exports = {
    emailValidation: (modal)=>{
        return new Promise(async function (resolve, reject){
            modal.reply= {
                type: "text",
                text:"Enter your email "+modal.tags.name
            }                 
                
                resolve(modal)  
            
            
           
            console.log(modal.tags);
        })
    },
    lastMsg: (modal)=>{
        return new Promise(async function (resolve, reject){
            modal.reply= {
                type: "text",
                text:modal.tags.name+", Your Input Email is "+modal.tags.email
            }  
            modal.reply= {
                type: "text",
                text:"Your input phone Number is "+modal.tags.email
            }   
            modal.reply= {
                type: "text",
                text:"Your data is sent to our 52 linked companies.Now you can close the window"
            }                 
                
                resolve(modal)
                delete(modal.stage)
        })
    },
}