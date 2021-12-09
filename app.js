  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const fetch = require("node-fetch");
  const cheerio = require('cheerio');


  readline.question(`Which url would you like me to fetch html?`, url => {
    fetch(url)
      .then(result => result.text())
      .then(html => {
        // console.log(html);
        const $ = cheerio.load(html);
        const tagList = $("*");
        const tagArray = Array.prototype.slice.call(tagList);
        const nodeArray = [];
        for(var i = 0; i < tagArray.length; i++) {
          const tag = tagArray[i].tagName;
          nodeArray.push(tag);
        }

        const tagcount = {};
        nodeArray.forEach((x) =>{
          tagcount[x] = (tagcount[x] || 0) + 1;
        });


        console.log(nodeArray);
        // console.log($.html("p"));
        // console.log({ title: title, description: description, url: url, site_name: site_name, image: image,
        //   icon: icon, keywords: keywords });
      }).catch(error => {
        console.log(error);
      });

    readline.close()
  });


  // .then(function(html) {
  //   // This is the HTML from our response as a text string
  //   console.log(html);
  // }).catch(function(err) {
  //   // There was an error
  //   console.warn('Something went wrong.', err);
  // });





  //
  // .then(function (response) {
  //   // The API call was successful!
  //   return response.json();
  // }).then(function (data) {
  //   // This is the JSON from our response
  //   console.log(data);
  // }).catch(function (err) {
  //   // There was an error
  //   console.warn('Something went wrong.', err);
  // });
