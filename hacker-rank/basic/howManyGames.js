/*
게임 플랫폼 이름이 mist..
while문 이용해서 풀이
budget - price = 0이 되는 부분도 고려하기
*/

function howManyGames(p, d, m, s) {
	let price = p;
	let budget = s;
	let i = 0;

	while (budget - price >= 0) {
		budget = budget - price;
		price = price - d < m ? m : price - d;
		i++;
		console.log(budget, price, i);
	}

	return i;
}
