
require('dotenv').config()
var axios = require("axios");
var moment = require("moment");
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
    if (value != undefined || value != null) {
        var axios = require("axios");
        //node liri.js concert-this <artist/band name here>
        axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
            function (response) {
                var rawDate = response.data[0].datetime;
                //var eventDate = moment.(rawDate).format('MM/DD/YYYY');
                console.log("Name of the venue: " + response.data[0].venue.name);
                console.log("Venue of the location: " + response.data[0].venue.city + "," + response.data[0].venue.country);
                console.log("Date of the Event: " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
            });
    }
    if (value === undefined || value === '' || value === null) {
        console.log("Pls. type a name of the band to search for.");
    }
};


function movie() {
    var axios = require("axios");
    var value = process.argv[3];
    //node liri.js movie-this <movie title>

    if (value === undefined || value === '' || value === null) {
        axios.get("https://www.omdbapi.com/?t=Mr.Nobody&apikey=trilogy").then(
            function (response) {
                console.log("Movie Title: " + response.data.Title);
                console.log("Year the movie came out: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country where movie was produced: " + response.data.Country);
                console.log("Movie Language: " + response.data.Year);
                console.log("Movie Plot: " + response.data.Language);
                console.log("Movie Actors: " + response.data.Actors);
            })
    };

    if (value != undefined || value != null) {
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
            })
    };
}

function spotify() {
    var Spotify = require("node-spotify-api");
    var spotify = new Spotify({
        id: "b949a0817f734eac9384ffa9a54dc57b",
        secret: "f23ac8a88307475ba9441abf9380a76b"
    });

    spotify
        .search({ type: "track", query: value })
        .then(function (response) {
            console.log("Artist Name: " + response.tracks.items[1].artists);
            console.log("Song Title: " + response.tracks.items[1].name);
            console.log("Preview Link: " + response.tracks.items[1].preview_url);
            console.log("Album: " + response.tracks.items[1].album);
            //console.log(Object.keys(response.tracks.items[1].artists[0]));
        })
        .catch(function (err) {
            console.log("Error: " + err);
        });
}