/**
 * 기본적인 애너그램 체크는 어제 공부했고,
 * 오늘은 문자열 길이가 다르고 삭제만 하기 때문에 s1과 s2두 군데 모두에서 삭제가 일어나야 함
 * 포인트는 루프를 도는 배열과 삭제가 일어나는 배열 두가지를 다르게 가져가야 함
 * 루프를 도는 배열에서 삭제가 일어나면 루프를 도는 인덱스 값은 그대로이기 때문에
 * 결과적으로 모든 원소에 대해 루프가 돌지 않게 됨
 */
function makingAnagrams(s1, s2) {
    
	const arr1 = Array.from(s1);
	const arr2 = Array.from(s2);
	const arr1Copy = Array.from(s1);

	arr1.forEach((item)=> {
			if(arr2.indexOf(item)>-1) {
					arr2.splice(arr2.indexOf(item), 1);
					arr1Copy.splice(arr1Copy.indexOf(item),1);
			}
	});
	
	return arr1Copy.length + arr2.length;

}
