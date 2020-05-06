module.exports={
   
   
    pincodeInfo:(pincode)=>{
        return new Promise(function(resolve, reject){
            var request = require("request");
    
            var options = { 
                method: 'GET',
                url: 'http://postalpincode.in/api/pincode/' + pincode,
                headers: 
                    {

                    } 
            };
    
            request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            return response.body.status;
            });
    
        })
    }
}