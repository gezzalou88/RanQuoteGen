$(document).ready(function() {
	//$( "#tweetMe" ).hide();  
  $("#getQuote").on("click", function(){  
		var quoteArr = [];
  		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data){
			$.each(data, function(i, field){
			    quoteArr.push(field);
			});
			$("#quoteText").html(quoteArr[0]);
        		$("#authorName").html(quoteArr[1]);
        		//$( "#tweetMe" ).show();  
var gourl = 'http://twitter.com/home/?status=' + quoteArr[0] + ' ' + quoteArr[1];
$("#tweetLink").attr("href", gourl);
    		});
    	});
   });