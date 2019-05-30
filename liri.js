var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        dowhat();
        break;
}


//Different functions below
function concert() {

    //node liri.js concert-this <artist/band name here>
    var axios = require("axios");

    //This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
        //for (var i = 0; i < response.length; i++) {
        function (response) {
            // Then we print out the 
            //Name of the venue

            //Venue location

            //Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log("Name of the venue: " + response.data[0].venue.name);
            console.log("Venue of the location: " + response.data[0].venue.city + "," + response.data[0].venue.country);
            console.log("Date of the Event: " + response.data[0].datetime);
        }
    );
}





