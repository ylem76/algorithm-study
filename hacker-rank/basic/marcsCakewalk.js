/**
 * 2의 제곱만큼 늘어나므로 최소 거리를 구하려면
 * 배열을 내림차순으로 정렬 후 계산
 */
function marcsCakewalk(calorie) {
    const sortedCal = calorie.sort((a,b)=> b-a);
    console.log(sortedCal)
    
    let miles = 0;
    for(let i=0; i<sortedCal.length; i++) {
        miles += sortedCal[i] * Math.pow(2, i)
    }
    
    return miles
}