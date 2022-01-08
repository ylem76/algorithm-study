/*
h배열과 같은 인덱스 값을 가지는 알파벳 배열을 하나 만들어서
word문자열의 인덱스값을 구함
h 배열에서 해당 인덱스값을 리턴한 후 계산
*/
function designerPdfViewer(h, word) {
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];    
    const wordArr = word.split('');    
    const wordHeightArr = wordArr.map((item)=> {
        return h[alphabet.indexOf(item)];
    })
    
    const answer = Math.max(...wordHeightArr)*word.length
    return answer;
}