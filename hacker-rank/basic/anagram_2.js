/**
 * 좌우 나누고 왼쪽을 기준으로 왼쪽에는 있는데,
 * 우측에는 없는 요소만 카운트하면 되는 것이었음...
 * 로직이 복잡한 것 같아서 찾아보니까 아래와 같이
 * 해당 글자를 하나씩 소거해서 풀었더라
 * 
 * foreach(char c in b)
    {
        if (a.IndexOf(c) > -1)
            a = a.Remove(a.IndexOf(c), 1);
    }
 */
function anagram(s) {
	if(s.length % 2 !== 0) {
			return -1
	}
	const stringArr = Array.from(s);
	const strLen = s.length/2;
	const left = stringArr.slice(0,strLen).sort().join('');
	const right = stringArr.slice(-strLen).sort().join('');
	
	const uniqueLeftArr = Array.from(new Set(left));    
	
	let count=0;    
	for(let i=0; i < uniqueLeftArr.length; i++) {
			const regExp = new RegExp(uniqueLeftArr[i], 'g');
			const compareQa = (left.match(regExp)?left.match(regExp).length:0)- (right.match(regExp)?right.match(regExp).length:0);
			
			if(compareQa > 0) {
					count += compareQa
			}
			
	}
	return count;
}