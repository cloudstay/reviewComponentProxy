const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const request = require('request');

const app = express();

const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use('/rooms/', express.static('public'));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get(`/rooms/photos/api`, function(req, response) {
    request(`http://localhost:3006/rooms/photos/api/?id=${req.query.id}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.json(body);
        }
    })
})

app.get(`/rooms/listing/api`, function(req, response) {
    request(`http://localhost:3003/rooms/listing/api/?id=${req.query.id}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.get(`/rooms/reviews/api`, function(req, response) {
    request(`http://localhost:3004/rooms/reviews/api/?id=${req.query.id}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.get(`/rooms/reviews/reviews`, function(req, response) {
    request(`http://localhost:3004/rooms/reviews/reviews/?id=${req.query.id}&search=${req.query.search}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.get(`/rooms/api/`, function(req, response) {
    request(`http://localhost:3001/rooms/api/?id=${req.query.id}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.listen(port, function() {
    console.log(`Listening to port: ${port}`)
});

