var URL = "";


var baseURL = "https://api.seatgeek.com/2/events?performers.slug="; // This is looking at the main URL for the seatgeek api
var performer = "";  // I think that this is the event to be searched for

$( ".teams" ).click(function() {
  //test if click event its properly working
  //alert("test2" );
  //Double click on the sport image,initially,to display modal view
  //why? cause the first click populate the element with the attributes
  //second click initiates the process.
   // $(this).attr('class', 'modal-trigger');
   
   // $(this).attr({
   // 	'class', 'value1',
   //   'data-target', "modal1"
   // });

   $(this).addClass("modal-trigger");
   $(this).attr("data-target","modal1");

   
   //see changes made to the sport button that was press
   console.log($(this).attr('id'));
   performer = $(this).attr('id');
   console.log(performer)
});
 




$("#submit").on("click", function() {


  URL = baseURL + performer;
  console.log(URL);

  $.ajax({url: URL, method: 'GET'}).done(function(response) {
    var results = response.events;
    console.log(results);
    for(var i = 0; i < results.length; i++) {
      console.log(results[i].title);
            console.log(results[i].datetime_local);
            console.log(results[i].venue.city);
            console.log(results[i].venue.name);
            console.log(results[i].venue.postal_code);
            console.log(results[i].venue.extended_address);
            console.log(results[i].venue.display_location);
            console.log(results[i].venue.slug);
            console.log(results[i].venue.state);
            console.log(results[i].venue.score);
            console.log(results[i].venue.timezone);
            console.log(results[i].short_title);
            console.log(results[i].datetime_utc);
            console.log(results[i].datetime_utc);
            console.log(results[i].stats.average_price);
            console.log(results[i].stats.lowest_price_good_deals);
            console.log(results[i].stats.highest_price);
            console.log(results[i].stats.lowest_price);
            console.log(results[i].performers[1].image);
            console.log(results[i].performers[1].divisions[0].display_name);
            console.log(results[i].performers[1].divisions[0].division_level);
            console.log(results[i].performers[1].divisions[1].display_name);
            console.log(results[i].performers[1].divisions[1].division_level);

    }

  });

});
