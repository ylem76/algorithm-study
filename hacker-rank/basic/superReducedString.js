/*
???
뭐가 문제인지 모르겠음
 */
function superReducedString(s) {
	let str = s;    
	
	const removeDuplicate = (str)=> {
			console.log(str)
			if(str === '') {
							return true
					}
			for(let i=0; i<str.length; i++) {
					if(str[i] === str[i+1]) {
							console.log(str[i])
							return false
					} else {
							return true
					}
			}
	}
	
	const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	do {
			for(let i=0; i<arr.length; i++) {
					let pattern = arr[i]+arr[i];
							let regexAllCase = new RegExp(pattern, "gi");
							let newStr = str.replace(regexAllCase, '')
							str = newStr;        
			}
			
	} while(removeDuplicate(str) === false);
	if (str === '') {
			return 'Empty String'
	} else {
			return str
	}
}