const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const compression = require('compression');

const app = express();

const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use('/rooms/:id', express.static('public'));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(compression());

app.get(`/api/rooms/:id/photos`, function(req, response) {
    request.get(`http://13.52.36.40:80/api/rooms/${req.params.id}/photos`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.json(body);
        }
    })
})

app.get(`/api/rooms/:id/listing`, function(req, response) {
    request(`http://54.177.94.11:81/api/rooms/${req.params.id}/listing`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.get(`/api/rooms/:id/reviews`, function(req, response) {
    request(`http://52.9.9.242:83/api/rooms/${req.params.id}/reviews`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.get(`/api/rooms/:id/searchReviews/`, function(req, response) {
    request(`http://52.9.9.242:83/api/rooms/${req.params.id}/searchReviews/?search=${req.query.search}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(200);
            response.send(body);
        }
    })
})

app.get(`/api/bookings/:id`, function(req, response) {
    request(`http://ec2-3-81-67-143.compute-1.amazonaws.com/api/bookings/${req.params.id}`, function(err, res, body) {
        if(err) {
            response.status(404);
            response.send();
        } else {
            response.status(404);
            response.send(body);
        }
    })
})

app.get(`/api/rooms/:id/info`, function(req, response) {
    request(`http://13.56.199.195:82/api/rooms/${req.params.id}/info`, function(err, res, body) {
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



// const express = require('express');
// const morgan = require('morgan')
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const request = require('request');
// const compression = require('compression');

// const app = express();

// const port = process.env.PORT || 4000;

// app.use(morgan('dev'));
// app.use('/rooms/:id', express.static('public'));

// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true,
// }))

// app.use(compression());

// app.get(`/api/rooms/:id/photos`, function(req, response) {
//     request(`http://picture:3006/api/rooms/${req.params.id}/photos`, function(err, res, body) {
//         if(err) {
//             response.status(404);
//             response.send();
//         } else {
//             response.status(200);
//             response.json(body);
//         }
//     })
// })

// app.get(`/api/rooms/:id/listing`, function(req, response) {
//     request(`http://apartment:3003/api/rooms/${req.params.id}/listing`, function(err, res, body) {
//         if(err) {
//             response.status(404);
//             response.send();
//         } else {
//             response.status(200);
//             response.send(body);
//         }
//     })
// })

// app.get(`/api/rooms/:id/reviews`, function(req, response) {
//     request(`http://review:3004/api/rooms/${req.params.id}/reviews`, function(err, res, body) {
//         if(err) {
//             response.status(404);
//             response.send();
//         } else {
//             response.status(200);
//             response.send(body);
//         }
//     })
// })

// app.get(`/api/rooms/:id/searchReviews`, function(req, response) {
//     request(`http://review:3004/api/rooms/${req.query.id}/searchReviews/?search=${req.query.search}`, function(err, res, body) {
//         if(err) {
//             response.status(404);
//             response.send();
//         } else {
//             response.status(200);
//             response.send(body);
//         }
//     })
// })

// app.get(`/api/bookings/:id`, function(req, response) {
//     request(`http://ec2-3-81-67-143.compute-1.amazonaws.com/api/bookings/${req.params.id}`, function(err, res, body) {
//         if(err) {
//             response.status(404);
//             response.send();
//         } else {
//             response.status(404);
//             console.log(body)
//             response.send(body);
//         }
//     })
// })

// app.get(`/api/rooms/:id/info`, function(req, response) {
//     request(`http://misc:3001/api/rooms/${req.params.id}/info`, function(err, res, body) {
//         if(err) {
//             response.status(404);
//             response.send();
//         } else {
//             response.status(200);
//             response.send(body);
//         }
//     })
// })

// app.listen(port, function() {
//     console.log(`Listening to port: ${port}`)
// });

