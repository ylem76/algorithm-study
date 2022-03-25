/*
예전에 못 풀던 거 다시 풀어봄
예전에는 너무 어렵게 생각했던 것 같음

회전 횟수가 주어진 배열길이와 동일하면
원래 배열 그대로이므로, 몇 번 돌릴지 배열 길이를 이용해 계산
그 값을 갖고 배열을 둘로 쪼갰다가 다시 합침
*/

function circularArrayRotation(a, k, queries) {
	const rotate = k % a.length;
	// console.log(rotate, a.length - rotate)

	const rotatedArr = rotate > 0 ? a.slice(a.length - rotate).concat(a.slice(0, a.length - rotate)) : a.slice(0);
	// console.log(rotatedArr)


	const newArr = queries.map((item) => {
		return rotatedArr[item]
	});
	return newArr;


	// const newArr = a.map((item, idx, a) => {
	//     // let newIdx = idx + k-1 >= a.length ? (idx + k -1) % a.length : idx + k -1

	//     let newIdx = (idx + k-1)%a.length;

	//     if(newIdx >= a.length){
	//         newIdx = newIdx%a.length;
	//     }

	//     return a[newIdx]
	// });



	// const resultArr = queries.map(item => newArr[item]);
	// return resultArr
}