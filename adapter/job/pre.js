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
                                text: "Just type in your Vehicle Registration number. Simple as that.",
                                buttons: [
                                    {
                                        text: "SELECT",
                                        // data: "enter registration number",
                                    },
                                    ]
                            },
                            {
                                title: "Information Technology",
                                text: "Upload a pic of your number plate and I will fetch your details.",
                                buttons: [
                                    {
                                        text: "SELECT",
                                        // data: "upload picture of number plate",
                                    },
                                    ]
                            },
                            {
                                title: "Government jobs",
                                text: "Upload front of your RC card for policy in 2 minutes",
                                buttons: [
                                    {
                                        text: "SELECT",
                                        // data: "upload rc card",
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



