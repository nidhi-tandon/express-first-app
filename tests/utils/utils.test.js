//
//  utils.test
//  express-app
//
//  Created by nidhitandon on 04/12/18 3:21 PM
//  Copyright © 2018 express-app. All rights reserved.
//
//  Keep up the good work :)
//

const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    let res = utils.add(1, 3);
    expect(res).toBe(4).toBeA('number');
});

it('should square two numbers', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });

});