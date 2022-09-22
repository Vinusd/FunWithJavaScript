const arr = [1, 2, 3, 4, 5, [6, [9, [8]]], 7, 8, 9];

function customFlat(arr, depth = 0) {
	let res = [];
	arr.forEach((ar) => {
		if (Array.isArray(ar) && depth > 0) {
			res.push(...customFlat(ar, depth - 1));
		} else {
			res.push(ar);
		}
	});
	return res;
}

console.log(customFlat(arr, 3));
