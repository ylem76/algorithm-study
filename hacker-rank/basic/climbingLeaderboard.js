/*
답은 맞을 것 같은데, 시간초과
둘 다 정렬이 되어 있는 상태니까
인덱스 번호를 저장해서 for문을 줄이면 되지 않을까 했는데,
그게 아닌가봄

for문이 아니라 배열 중복 제거할 때 쓴 filter가 문제였다
배열 중복 없앨 때 set이용하는 게 더 빠름
*/

function climbingLeaderboard(ranked, player) {
	const set = new Set(ranked);
  const uniqRank = [...set];
	// const uniqRank = ranked.filter((item, idx, ranked) => {
	// 	return ranked.indexOf(item) === idx
	// });

	let startIdx = uniqRank.length - 1;

	const playerRank = player.map((item) => {
		let answer = null;
		for (let i = startIdx; i >= 0; i--) {
			if (item < uniqRank[i]) {
				answer = i + 2;
				startIdx = i;
				break;
			} else if (item === uniqRank[i]) {
				answer = i + 1;
				startIdx = i - 1;
				break;
			}
		}
		answer = answer === null ? 1 : answer;
		return answer;
	});
	return playerRank;
}