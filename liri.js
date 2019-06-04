
require('dotenv').config()
var fs = require("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var action = process.argv[2];
var value = process.argv[3];



switch (action) {
    case "concert-this":
        concert();
        appendF();
        break;

    case "spotify-this-song":
        spotify();
        appendF();
        break;

    case "movie-this":
        movie();
        appendF();
        break;

    case "do-what-it-says":
        dowhat();
        appendF();
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
                console.log("If you haven't watched Mr. Nobody then you should: http://www.imdb.com/title/tt0485947/");
                console.log("It's on Netflix!");
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

    if (value != undefined || value != null) {
        var spotify = new Spotify({
            id: "b949a0817f734eac9384ffa9a54dc57b",
            secret: "f23ac8a88307475ba9441abf9380a76b"
        });

        spotify
            .search({ type: "track", query: value })
            .then(function (response) {
                console.log("Artist Name: " + response.tracks.items[0].album.artists[0].name);
                console.log("Song Title: " + response.tracks.items[1].name);
                console.log("Preview Link: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[1].album.name);

            })
            .catch(function (err) {
                console.log("Error: " + err);
            });
    }
    else {
        var spotify = new Spotify({
            id: "b949a0817f734eac9384ffa9a54dc57b",
            secret: "f23ac8a88307475ba9441abf9380a76b"
        });

        spotify
            .search({ type: "track", query: '"The Sign"' })
            .then(function (response) {
                //console.log(Object.keys(response.tracks.items);
                console.log("Artist Name: " + response.tracks.items[0].album.artists[0].name);
                console.log("Song Title: " + response.tracks.items[1].name);
                console.log("Preview Link: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[1].album.name);
            })
            .catch(function (err) {
                console.log("Error: " + err);
            });
    }

}


function dowhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        data = data.split(",");
        var action = data[0]
        var value = data[1]

        console.log(data);
        switch (action) {
            case "concert-this":
                concert(value);
                break;

            case "spotify-this-song":
                spotify(value);
                break;

            case "movie-this":
                movie(value);
                break;

            default:
                break;
        }
    });
};


function appendF() {
    fs.appendFile("log.txt", action + " > " + value + ", ", function (error) {
        if (error) throw error;
    });
}

