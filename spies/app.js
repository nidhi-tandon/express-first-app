//
//  app
//  express-app
//
//  Created by nidhitandon on 04/12/18 6:18 PM
//  Copyright © 2018 express-app. All rights reserved.
//
//  Keep up the good work :)
//

let db= require('./db');

module.exports.handleSignUp = (email, password) => {
    db.saveUser({
        email,
        password
    })
};