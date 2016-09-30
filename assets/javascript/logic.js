$( document ).ready(function() {


  // Seat Geek Global variables
  var URL = "";
  var baseURL = "https://api.seatgeek.com/2/events?performers.slug="; 
  var performer = "";  
  // OpenWeather Global variables
  var location = [];
  var weather = [];


  // On click event to trigger dynamic
  $( ".teams" ).click(function() { 

    // This replaces the display of buttons with the accordion
    $("#buttonHolder").hide();
    $("#dynamicDisplay").show();
    $(this).addClass("modal-trigger");
    $(this).attr("data-target","modal1");

     
    // See changes made the performer
    console.log($(this).attr('id'));
    performer = $(this).attr('id');
    console.log(performer);

    // This is the url that will be calling seat geek api
    URL = baseURL + performer; 
    console.log(URL);

      // START OF SEAT GEEK API
      // ajax call for seat geek information
      $.ajax({url: URL, method: 'GET'})

      // Start of . done
      .done(function(response) {


      // This is going to display the results of the api call
      var results = response.events;
      console.log(results);

      // For loop that creates a display of ten events
      for(var i = 0; i < results.length; i++) {
        

        // List item created
        var li = $("<li>");

        // div with divHeader class is created for accordion
        var divHeader = $("<div style = 'color:black;'>");
        divHeader.attr("class", "collapsible-header");

        // divHeader is populated with information from api call including
        // date, event name, and location
        divHeader.text(results[i].datetime_local + " " + results[i].title + " " + results[i].venue.name + " " + results[i].venue.display_location);

        // div with divBody class is created for accordion
        var divBody = $("<div>");
        divBody.attr("class", "collapsible-body");

        // p with no text is created
        var p = $("<p>Say Something</p>");

        // divHeader is attached to li
        li.append(divHeader);

        // divBody is attached to li
        li.append(divBody);

        // p is attached to divBody
        divBody.append(p);

        // li is attached to the html id tag dynamicDisplay
        $("#dynamicPanel").append(li);

          // Console log everything to make sure it's all working!
          // console.log(results[i].title);
          // console.log(results[i].datetime_local);
          // console.log(results[i].venue.city);
          // console.log(results[i].venue.name);
          // console.log(results[i].venue.postal_code);
          // console.log(results[i].venue.extended_address);
          // console.log(results[i].venue.display_location);
          // console.log(results[i].venue.slug);
          // console.log(results[i].venue.state);
          // console.log(results[i].venue.score);
          // console.log(results[i].venue.timezone);
          // console.log(results[i].short_title);
          // console.log(results[i].datetime_utc);
          // console.log(results[i].datetime_utc);
          // console.log(results[i].stats.average_price);
          // console.log(results[i].stats.lowest_price_good_deals);
          // console.log(results[i].stats.highest_price);
          // console.log(results[i].stats.lowest_price);
          // console.log(results[i].performers[1].image);
          // console.log(results[i].performers[1].divisions[0].display_name);
          // console.log(results[i].performers[1].divisions[0].division_level);
          // console.log(results[i].performers[1].divisions[1].display_name);
          // console.log(results[i].performers[1].divisions[1].division_level);


      // END OF SEAT GEEK API
// ----------------------------------------------------------------------------------------------------
      // START OF OPEN WEATHER API
      
      // push into the location array
      location[i] = results[i].venue.postal_code;

      // console log it
      console.log(location);

      // This is our API Key
      var WeatherAPIkey = "08b0500863b3dfb3863a05215f613d59";

        // Here we are building the URL we need to query the database
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + location[i] + "&units=imperial&appid=" + WeatherAPIkey;

        // Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({url: queryURL, method: 'GET'})

        // We store all of the retrieved data inside of an object called "response"
        .done(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        var city = response.name;
        var windSpeed = response.wind.speed;
        var humidity = response.main.humidity;
        var temperature = response.main.temp;

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);

        }); // End of .done function for Open Weather Api


      }; // End of for loop for Seat Geek Api
    

    }); // End of .done function for Seat Geek Api
  
  
  }); // This is the end of the on click function


}); // This is the end of the document ready function




