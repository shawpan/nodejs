var Scraper = require('./scraper/scraper'); //custom module


var aScraper = new Scraper();

console.log("inside main.js");

var scrapEvents = aScraper.getContent('http://www.google.com');

scrapEvents.on('start',function(msg){
	console.log('scraper start : ' + msg);
})

scrapEvents.on('error',function(error, response){
	console.log('scraper error : ' + error.message);
})

scrapEvents.on('done',function(content){
	console.log('scraping done : ' + content.substring(0,10));
})