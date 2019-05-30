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

//node liri.js concert-this <artist/band name here>
// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");

// We then run the request with axios module on a URL with a JSON
//This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
    function (response) {
        // Then we print out the 
        //Name of the venue

        //Venue location

        //Date of the Event (use moment to format this as "MM/DD/YYYY")
        console.log("The movie's rating is: " + response.data[0].venue.name);
    }
);





