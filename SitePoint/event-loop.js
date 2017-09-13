// console.log('one event loop cycle');

// setTimeout(function() {
// 	console.log('different cycle');
// }, 100);

// console.log('same cycle');

var fs = require('fs');

try {
	fs.readFile('README.txt', 'utf8', function(error, data) {
		if (error) {
			throw error;
			return;
		}

		console.log(data);
	});
} catch (error) {
	console.log('caught the error synchronously');
}