/*
  처음에 leftWrapper를 잘못 정의해서 헤맸다
*/

function chocolateFeast(n, c, m) {
	// console.log(n, c, m);
	const firstBars = Math.floor(n / c);

	if (firstBars < m) {
		return firstBars;
	}

	let extraBars = Math.floor(firstBars / m);
	let leftWrapper = extraBars + (firstBars % m);
	let addBars = 0;

	// console.log("extraBars : " + extraBars);
	// console.log("leftWrapper : " + leftWrapper);

	while (leftWrapper >= m) {
		addBars = Math.floor(leftWrapper / m);
		extraBars = extraBars + addBars;
		// console.log(leftWrapper, addBars * m, addBars);
		leftWrapper = leftWrapper - addBars * m + addBars;
	}

	return firstBars + extraBars;
}