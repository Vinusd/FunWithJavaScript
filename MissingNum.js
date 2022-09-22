let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 12, 13, 14, 15];
let sum = (arr.slice(-1)[0] * (arr.slice(-1)[0] + 1)) / 2;
let actulsum = 0;
for (let i = 0; i < arr.length; i++) {
	actulsum = actulsum + arr[i];
}
console.log("Missing num", sum - actulsum);
