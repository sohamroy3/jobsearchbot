// module.exports={
   
   
//     pincodeInfo:(pincode)=>{
//         return new Promise(function(resolve, reject){
//             var request = require("request");
    
//             var options = { 
//                 method: 'GET',
//                 url: 'http://postalpincode.in/api/pincode/' + pincode,
//                 headers: 
//                     {

//                     } 
//             };
    
//             request(options, function (error, response) {
//             if (error) throw new Error(error);
//             console.log(response.body);
//             return response.body.status;
//             });
    
//         })
//     }
// }
module.exports.pincodeInfo = function pInfo(pincode){
    return new Promise(function(resolve, reject){
      var request = require("request");
  
        var options = { method: 'GET',
          url: 'http://postalpincode.in/api/pincode/' + pincode,
           };
  
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          console.log(body);
          console.log(typeof body);
          console.log(response);
          try{//{"Message":"No records found","Status":"Error","PostOffice":null}
            if(JSON.parse(body).Status == "Success"){
              console.log("PIN API WORKING...")
              resolve(JSON.parse(body).PostOffice[0])
            }
            else{
             resolve("Error") 
            }
          }
          catch(e){
            resolve("Error")
          }
          
          
        });
  
    })
  }