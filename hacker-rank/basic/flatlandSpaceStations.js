/*
c 배열 정렬
각 배열 사이의 중간 거리값 내서 배열 추가
처음과 끝 값은 따로 분기처리해서 계산
맨 처음과 맨 뒤 체크를 안해서 헤맸다

깔끔하게 정리하고 싶은데 일단 보류
*/

function flatlandSpaceStations(n, c) {
	c.sort(function(a, b)  {
			return a - b;
	});    
	
	const centerCity = c.map((item, idx) => {
			if(idx === c.length-1) {
					return Math.floor(Math.abs((n-1) - item));
			}
			return Math.floor(Math.abs(item-c[idx+1])/2) 
	});
	centerCity.unshift(c[0]);
	return Math.max(...centerCity)

}