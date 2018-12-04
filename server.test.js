//
//  server.test
//  express-app
//
//  Created by nidhitandon on 04/12/18 5:27 PM
//  Copyright © 2018 express-app. All rights reserved.
//
//  Keep up the good work :)
//


let request = require('supertest');
let app = require('./server').app;
let expect = require('expect');

// it('should return desired output', (done) => {
//     request(app)
//       .get('/')
//       .expect(200)
//       .expect('')
//       .end(done);
// });

it('should return user object', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
          expect(res.body).toInclude({
              name: 'Andrew',
              age: 25
          })
      })
      .end(done);
});
