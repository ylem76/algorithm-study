/*
valley 의미를 이해하지 못해서 헤맸다 ㅠㅠ
sea level에서 sea level로 되돌아오는 시퀀스가 valley 였음

무조건 sea에서 시작하고 끝난다고 했으니
내려 가면 무조건 valley 카운트는 1이 됨

문자열을 숫자로 바꾸고 비교하여 정답 도출함

*/

function countingValleys(steps, path) {
    
	// 0,1,0,-1,-2,-1,-2,-1,-0
	
	let altitude = 0;
	const pathArr = [0];
	path.split('').forEach((item, idx) => {
			
			item==='U'? altitude ++ : altitude--
			pathArr.push(altitude)
			
	});
	
	console.log(pathArr)
	
	let valleyCount = 0;
	pathArr.forEach((item, idx) => {
			if(item === 0 && item > pathArr[idx+1]) {
					console.log(idx, 'count')
					valleyCount++;
			}
	});
	
	return valleyCount
	
	
	/*
	let valleyCount = 0;
	let level = 0;
	const pathArray = path.split('')
	const pathLevel = pathArray.map((item, idx) => {
			let text = '';
			if(item === 'U') {
					text = '/'
					if(pathArray[idx-1] === 'U') {
							level ++
					}
					
					if(level < 0) {
							valleyCount = valleyCount + 1;
					}
			} else {
					if(pathArray[idx-1] === 'D' || idx === 0) {
							level --
					}
					text = `\\`
			}
			
			const result = {
					level:level,
					text:text,
					index: idx
			}
			return result
	});
	
	// console.log(pathLevel)

	
	for(let i=50; i>-50; i-- ){
			let text = '';
			if(i === 0) {
							text = '_';
					} else {
							text = ' ';
					}
			pathLevel.map(item => {            
					if(item.level === i){
							text = text + item.text
					} else {
							text = text + ' ';
					}
			});
			if(i === 0){
							text = text + '_';
					}
			// console.log(text);
	}
	
	return valleyCount
	 */
}