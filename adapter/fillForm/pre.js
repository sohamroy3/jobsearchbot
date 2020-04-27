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
    }
}