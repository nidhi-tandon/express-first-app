//
//  utils
//  express-app
//
//  Created by nidhitandon on 04/12/18 3:14 PM
//  Copyright © 2018 express-app. All rights reserved.
//
//  Keep up the good work :)
//

module.exports.add = (a, b) => a + b;
module.exports.asyncAdd = ((a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 1000)
});
module.exports.square = (a) => a * a;