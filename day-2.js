const fs = require('node:fs');
const path = require('node:path');

// numbers cant decrease or increase more than 1 or 2
// numbers cant decrease and then increase || vice versa
// numbers cant match (eg - 4 | 4 | 2

fs.readFile(path.join(__dirname, './input/input-2.txt'), 'utf8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}

	const lines = data.trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

	console.log(lines);
})
