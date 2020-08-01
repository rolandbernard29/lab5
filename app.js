const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

//routes
app.get("/", async function (req, res) {
    
    let imageUrlArray = await getRandomImage("", 1);
    res.render("index", {"imageUrlArray": imageUrlArray});
   // let requestUrl = "https://api.unsplash.com/photos/random/?client_id=5O7gK6hJwQwlibDWyZLdAZF57XBDHQoCWIuwYk_TgPQ&featured=true&orientation=landscape";
    
   // request(requestUrl, function (error, response, body) {
     //   if (!error && response.statusCode == 200 ){
       //     let parsedData = JSON.parse(body);
       //    let imageUrl = parsedData["urls"]["regular"];
         //   res.render( "index", {"imageUrl": imageUrl});
      //  } else {
       //     console.log("error:", error);
        //    console.log("statusCode:", response && response.statusCode);
      //  }
  //  });
  
 });

app.get("/search", async function(req, res) {
    
    let keyword = "";
    if (req.query.keyword) {
        keyword = req.query.keyword;
    }
    
    let imageUrlArray = await getRandomImage(keyword, 9);
    res.render("results", {"imageUrlArray": imageUrlArray});
    //let requestUrl = `https://api.unsplash.com/photos/random/?client_id=5O7gK6hJwQwlibDWyZLdAZF57XBDHQoCWIuwYk_TgPQ&featured=true&orientation=landscape`
   
   // request(requestUrl, function (error, response, body) {
     //   if (!error && response.statusCode == 200 ){
       //     let parsedData = JSON.parse(body);
         //   let imageUrl = parsedData["urls"]["regular"];
         //   res.render( "results", {"imageUrl": imageUrl});
     //   }else{
       //    console.log('error:', error);
       //    console.log('statusCode:', response && response.statusCode);
     //  }
       
  //  });
    
});


function getRandomImage(keyword, count) {
    return new Promise (function (resolve, reject) {
    
     let requestUrl = `https://api.unsplash.com/photos/random/?count=${count}&client_id=5O7gK6hJwQwlibDWyZLdAZF57XBDHQoCWIuwYk_TgPQ&featured=true&orientation=landscape`
    
    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode == 200 ){
            let parsedData = JSON.parse(body);
           // let imageUrl = parsedData["urls"]["regular"];
          //  resolve(imageUrl);
          let imageUrlArray = [];  
          for (let i=0; i < count; i++ ){
              imageUrlArray.push(parseData[i]["urls"]["regular"]);
          }
          
          resolve(imageUrlArray
          
        }else{
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            reject(error);
          }
    });
    
 });
}
    





//starting server 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running....");
});