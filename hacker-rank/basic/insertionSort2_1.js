
/*
???
*/
function insertionSort2(n, arr) {
	for (let j = 1; j < arr.length; j++) {
			const targetNum = arr[j];
			console.log(...arr);
			console.log(targetNum);

			if(targetNum < arr[j-1]) {
					for (let i = j; i >= 0; i--) {
							console.log(i)
							if (arr[i - 1] < targetNum) {
									arr[i] = targetNum
									console.log(...arr)
									break;
							} else if (arr[i - 1] > targetNum) {
									arr[i] = arr[i - 1];
									console.log(...arr);
							} 
					}
			}
	}

}