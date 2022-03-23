/*
  시간초과할 줄 알았는데, 의외로  성-공
  문제 꼼꼼히 읽기
*/
function kaprekarNumbers(p, q) {
	const result = [];
	for (let i = p; i <= q; i++) {
		const square = i * i;
		const text = square.toString();
		const length =
			Math.floor(text.length / 2) % 10 === 0.5
				? 1
				: Math.floor(text.length / 2);

		const part_1 =
			text.substring(0, length) === "" ? "0" : text.substring(0, length);
		const part_2 = text.substring(length);

		const sum = parseInt(part_1) + parseInt(part_2);

		if (sum === i) {
			result.push(i);
		}

		// console.log(`${i} : ${part_1} + ${part_2} = ${parseInt(part_1)+parseInt(part_2)}`);
	}
	if (result.length === 0) {
		console.log("INVALID RANGE");
		return;
	}
	console.log(...result);
}
