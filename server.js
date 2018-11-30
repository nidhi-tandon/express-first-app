//
//  server
//  myApp
//
//  Created by nidhitandon on 23/11/18 5:58 PM
//  Copyright © 2018 myApp. All rights reserved.
//
//  Keep up the good work :)
//

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();
const port = 3000;
const hostName = '/';

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    let now = new Date().toDateString();
    let log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log );
    next();
});
// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// });
app.set('view-engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
app.get(hostName, (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to Home Page!',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: ' A bad request.'
    })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});

