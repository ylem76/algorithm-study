function insertionSort(arr) {
	// 현재 숫자를 뽑고
	// 앞서 정렬된 리스트에서 알맞은 자리에 삽입

	for (let i = 1; i < arr.length; i++) {
		// 정렬할 숫자를 뽑음
		const currentNum = arr[i];

		// 안쪽 루프. 정렬된 인덱스부터 뒤에서 앞으로 가면서 비교
		let j = i - 1;
		while (j >= 0 && arr[j] > currentNum) {
			// 비교할 숫자는 currentNum보다 크고 인덱스는 0번까지 비교
			// 현재 숫자가 더 크다면 현재 숫자를 뒤로 이동시킴
			arr[j + 1] = arr[j];
			j--;
		}

		// 현재 숫자가 currentNum보다 작거나 같으면 루프에서 빠져나옴
		// 현재 숫자 다음 인덱스에 currentNum삽입
		arr[j + 1] = currentNum;
		console.log(arr);
	}
	return arr;
}

insertionSort([4, 3, 2, 5]);
