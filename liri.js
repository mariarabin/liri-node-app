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

var axios = require("axios");
//Different functions below
function concert() {
    var axios = require("axios");
    //node liri.js concert-this <artist/band name here>

    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("Name of the venue: " + response.data[0].venue.name);
            console.log("Venue of the location: " + response.data[0].venue.city + "," + response.data[0].venue.country);
            console.log("Date of the Event: " + response.data[0].datetime);
        })
};

function movie() {
    var axios = require("axios");
    //node liri.js movie-this <movie title>
    axios.get("https://www.omdbapi.com/?t=" + value + "&apikey=trilogy").then(
        function (response) {
            console.log("Movie Title: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country where movie was produced: " + response.data.Country);
            console.log("Movie Language: " + response.data.Year);
            console.log("Movie Plot: " + response.data.Language);
            console.log("Movie Actors: " + response.data.Actors);
        });
};





