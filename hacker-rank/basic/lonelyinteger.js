/*
* lastIndexOf 함수만 알고 있으면 쉬운 문제
*/
function lonelyinteger(a) {
    for(let i=0; i<a.length; i++) {
        if(a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
            return a[i];
        }
    }
}