const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static('public'));

const axios = require('axios');
const port = 3000;
const apiKEY = '64b2e3df41e34d808198aba1f1b926de';
const baseUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';

const baseUrlBussiness = 'https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';
const baseUrlTech = 'https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';
const baseUrlEntertainment = 'https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';
const baseUrlSports = 'https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';
const baseUrlHealth = 'https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';
const baseUrlScience = 'https://newsapi.org/v2/top-headlines?category=Science&country=in&apiKey=64b2e3df41e34d808198aba1f1b926de';

// search request
// endpoints -
// Everything - /v2/everything
// Top headlines - /v2/top-headlines
// Sources - /v2/top-headlines/source

app.get("/", (req, res) => {

    axios.get(baseUrl)
        .then(response => {
            let responseData = response.data.articles;
            // console.log(typeof(responseData));
            res.render('home.ejs', { responseData });
            // res.json(response.data.articles); // Access the response data
            // console.log(responseData);

        })
        .catch(error => {
            console.error(error);
        });


})
app.get("/business", (req, res) => {
    axios.get(baseUrlBussiness)
        .then(response => {
            let responseData = response.data.articles;
            res.render('bussiness.ejs', { responseData });
        })
        .catch(error => {
            console.error(error);
        });
})

app.get("/technology", (req, res) => {
    axios.get(baseUrlTech)
        .then(response => {
            let responseData = response.data.articles;
            res.render('technology.ejs', { responseData });
        })
        .catch(error => {
            console.error(error);
        });
})

app.get("/entertainment", (req, res) => {
    axios.get(baseUrlEntertainment)
        .then(response => {
            let responseData = response.data.articles;
            res.render('entertainment.ejs', { responseData });
        })
        .catch(error => {
            console.error(error);
        });
})
app.get("/sports", (req, res) => {
    axios.get(baseUrlSports)
        .then(response => {
            let responseData = response.data.articles;
            res.render('sports.ejs', { responseData });
        })
        .catch(error => {
            console.error(error);
        });
})

app.get("/health", (req, res) => {
    axios.get(baseUrlHealth)
        .then(response => {
            let responseData = response.data.articles;
            res.render('health.ejs', { responseData });
        })
        .catch(error => {
            console.error(error);
        });
})

app.get("/science", (req, res) => {
    axios.get(baseUrlScience)
        .then(response => {
            let responseData = response.data.articles;
            res.render('science.ejs', { responseData });
        })
        .catch(error => {
            console.error(error);
        });
})

app.get("/search", (req, res) => {
    // console.log(req.query.query);
    let keywords = req.query.query;

    let searchURL = `https://newsapi.org/v2/everything?q=${keywords}&apiKey=64b2e3df41e34d808198aba1f1b926de`;

    axios.get(searchURL)
        .then(response => {
            let responseData = response.data.articles;
            let responseCount = response.data.totalResults;
            // console.log(responseCount)
            res.render('search.ejs', { responseData, responseCount });
        })
        .catch(error => {
            console.error(error);
        });

})

app.listen(port, () => {
    console.log("server started at port", port);
})


// API Site Link
// https://newsapi.org/ 