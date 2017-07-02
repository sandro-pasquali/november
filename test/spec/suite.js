'use strict';

let november = require('../../november.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return november.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return november.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


