/*
Number 범위 넘어가는 큰 수 다루는 게 낯설어서 풀다 만 문제였다
주어진 숫자가 최대 100이라 그냥 간단하게 for문 돌려서 풀어봄
*/
function extraLongFactorials(n) {
    
	let result = BigInt(1);
	for(let i =n; i>0; i--) {
			result = result * BigInt(i);
	}
	console.log(result.toString())
}