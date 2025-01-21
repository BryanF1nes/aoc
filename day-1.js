const fs = require('node:fs');
const path = require('node:path');

// Part one
fs.readFile(path.join(__dirname, './input/input.txt'), 'utf8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}

	const lines = data.trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

	const leftSide = lines.map(pair => pair[0]);
	const rightSide = lines.map(pair => pair[1]);

	leftSide.sort((a, b) => a - b);
	rightSide.sort((a, b) => a - b);

	let totalDistance = 0;
	for (let i = 0; i < leftSide.length; ++i) {
		totalDistance += Math.abs(leftSide[i] - rightSide[i])
	}

	console.log(totalDistance)
})


fs.readFile(path.join(__dirname, './input/input.txt'), 'utf8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}

	const lines = data.trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

	const leftSide = lines.map(pair => pair[0]);
	const rightSide = lines.map(pair => pair[1]);

	let result = [];
	leftSide.forEach(digit => result.push({ [digit]: 0 }));

	for (let i = 0; i < leftSide.length; ++i) {
		for (let j = 0; j < rightSide.length; ++j) {
			if (rightSide[j] === leftSide[i]) {
				result[i][leftSide[i]] += 1;
			}
		}
	}

	let total = 0;
	result.forEach((obj) => {
		for (let key in obj) {
			total += Number(key) * obj[key];
		}
	})

	console.log(total);
});
