function mergeSort(arr) {
	// merge helper function
	const merge = (left, right) => {
		// 각각의 인덱스를 하나씩 올라가면서 한 배열로 합침
		const mergedArray = [];
		let i = 0;
		let j = 0;
		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				mergedArray.push(left[i]);
				i++;
			} else {
				mergedArray.push(right[j]);
				j++;
			}
		}

		// 남는 것은 따로따로 while루프로 넣어줌
		while (i < left.length) {
			mergedArray.push(left[i]);
			i++;
		}

		while (j < right.length) {
			mergedArray.push(right[j]);
			j++;
		}

		console.log(mergedArray);
		return mergedArray;
	};
	// 배열을 둘로 나눔 (left/right)
	// 둘로 나눈 배열을 재귀를 활용해서 원소가 1이 될때까지 나눔
	// 두가지 배열을 서로 정렬하면서 합침

	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);

	// 재귀 형태로 좌우 배열을 만들어냄
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

mergeSort([8, 7, 6, 5, 4, 3, 2, 1]);
