$(document).ready(function () {
	
	$('#randomSearch').click(function () {
		var url_random = "https://en.wikipedia.org/wiki/Special:Random";
		window.open(url_random);
	});
	
  $('#search').click(function () {
		
		var searchItem= $('#searchItem').val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchItem + "&format=json&callback=?";
		
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function (data) {
				
        $('#result').html('');
     		for(var i=0;i<data[1].length;i++){
        	$('#result').prepend("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
				}
      },
      error: function(errorMessage){
        alert("Error");
      }    
    });
		
  });
});