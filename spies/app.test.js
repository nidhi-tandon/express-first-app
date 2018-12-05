//
//  app.test
//  express-app
//
//  Created by nidhitandon on 04/12/18 6:21 PM
//  Copyright © 2018 express-app. All rights reserved.
//
//  Keep up the good work :)
//

const expect = require('expect');
const rewire = require('rewire');
describe('App', () => {
    it('should call a spy correctly', () => {
        let spy= expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    })
});