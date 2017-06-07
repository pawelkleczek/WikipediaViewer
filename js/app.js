/* https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&list=search&srsearch= */

$( "form" ).submit(function( event ) {
	event.preventDefault();
  $(".1").html("<br>");

  var input = $("#duu").val();

  var http = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + input + "&callback=?";


 $.getJSON(http, function(json) {

   for (var i = 0; i < 10; i++)
     if (json.query.search[i] !== undefined)
       $(".1").append("<p>Title: <a href='https://en.wikipedia.org/wiki/" + json.query.search[i].title + "' target='_blank'>" + json.query.search[i].title + "</a></p>" + "(...) " + json.query.search[i].snippet + "<br><br>");


 });

 event.preventDefault();

});
