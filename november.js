'use strict';

let november = require('wikijs').default().page('november');

module.exports = {
	data : () => november.then(page => page.content()),
	images : () => november.then(page => page.images())
};