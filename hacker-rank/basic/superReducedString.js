/*
???
뭐가 문제인지 모르겠음

+ 찾았다
2연속 중복문자가 있는지 체크할 때 for루프 밖에다 return true를 넣었어야함
알파벳 배열을 직접 다 작성해서 arr 배열에 넣어놨는데,
set 이용해서 해당 문자열에서 중복문자 제거 후 사용해도 될 것 같긴 함
 */
function superReducedString(s) {
	let str = s;

	const checkDuplicate = (str) => {
		console.log('checkString : ' + str)
		if (str === '') {
			return true
		}
		for (let i = 0; i < str.length; i++) {
			if (str[i] === str[i + 1]) {
				console.log('checkDuplicate')
				return false
			} else {
				continue;
			}
		}
		return true
	}

	const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	do {
		for (let i = 0; i < arr.length; i++) {
			let pattern = arr[i] + arr[i];
			console.log('pattern : ' + pattern);
			let regexAllCase = new RegExp(pattern, "gi");
			let newStr = str.replace(regexAllCase, '');
			console.log('new : ' + newStr);
			if (newStr === '') {
				return 'Empty String'
			}
			str = newStr;
		}

	} while (checkDuplicate(str) === false);
	if (str === '') {
		return 'Empty String'
	} else {
		return str
	}
}