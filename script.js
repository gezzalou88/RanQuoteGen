$(document).ready(function() {
	$('#getQuote').on('click', function(e) {
	    e.preventDefault();
	    $.ajax( {
	      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
	      success: function(data) {
	        var post = data.shift(); // The data is an array of posts. Grab the first one.
	        $('#quoteText').html(post.content);
	        $('#authorName').html(post.title);
	        
	        var htmlQuote = post.content;
	        var htmlAuthor = post.title;
		var divQuote = document.createElement("div");
		var divAuthor = document.createElement("div");
		divQuote.innerHTML = htmlQuote;
		divAuthor.innerHTML = htmlAuthor;
		var textQuote = divQuote.textContent || divQuote.innerText || "";
		var textAuthor = divAuthor.textContent || divAuthor.innerText || "";
	        
	        var gourl = "https://twitter.com/home/?status=" + textQuote + " " + textAuthor;
		$("#tweetLink").attr("href", gourl);
	      },
	      cache: false
	    });
	  });
});
	
	
	
  
   
   