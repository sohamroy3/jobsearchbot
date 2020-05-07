module.exports = {
    
    
    catagory: (modal)=>{
        return new Promise(async function (resolve, reject){

            modal.reply={
                type : "generic",
                text : "which field,you want to choose?. Pick a Job field from below.",
                next : {

                        data : [
                            {
                                title: "Buisness",
                                text: "If you are that type of a person who can sell anything!",
                                buttons: [
                                    {
                                        text: "SELECT",
                                         data: "enter registration number",
                                    },
                                    ]
                            },
                            {
                                title: "Information Technology",
                                text: "If you are technology geek",
                                buttons: [
                                    {
                                        text: "SELECT",
                                         data: "upload picture of number plate",
                                    },
                                    ]
                            },
                            {
                                title: "Government jobs",
                                text: "If you want to go for government jobs",
                                buttons: [
                                    {
                                        text: "SELECT",
                                         data: "upload rc card",
                                    },
                                    ]
                            },
                       ],
                }

            }
            
            
            
            
            
            
            
                resolve(modal);
                delete(modal.stage);
        })
    }

}



