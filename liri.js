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

    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("Name of the venue: " + response.data[0].venue.name);
            console.log("Venue of the location: " + response.data[0].venue.city + "," + response.data[0].venue.country);
            console.log("Date of the Event: " + response.data[0].datetime);
        }
    );
}





