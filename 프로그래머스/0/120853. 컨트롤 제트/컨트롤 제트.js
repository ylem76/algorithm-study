function solution(s) {
    const arr = s.split('Z')
    for(let i=0; i<arr.length; i++) {
        arr[i] = arr[i].trim().split(' ')
    }
    for(let i=0; i<arr.length-1; i++) {
        arr[i] = arr[i].slice(0,-1)
    }
    
    const newStr = arr.join(',').trim().split(',')
    if(newStr.length === 0) {
        return 0
    }
    
    const myAnswer = newStr.map(str => Number(str)).reduce((a,b) => a+b)    
    
    return myAnswer;
}