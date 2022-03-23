/*
indexOf와 lastIndexOf를 이용해서
동일 아이템의 인덱스 값의 차를 구하고 배열에 넣음
가장 작은 수를 뽑아 최소 거리를 구함
*/

function minimumDistances(a) {
	const array = [];
	a.forEach((item) => {
		const itemIdx = a.indexOf(item);
		const itemLIdx = a.lastIndexOf(item);
		if (itemIdx !== itemLIdx) {
			const distance = Math.abs(itemIdx - itemLIdx);
			if (array.indexOf(distance) === -1) {
				array.push(distance);
			}
		}
	});
	if (array.length === 0) {
		return -1;
	}
	return Math.min(...array);
}
