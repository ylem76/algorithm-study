/**
 * 살 수 있는 장난감 가짓수를 최대로 하려면
 * 낮은 가격의 장난감을 많이 사야 함
 * 낮은 가격으로 정렬 후 count 체크
 */
function maximumToys(prices, k) {
    const sortedPrices = prices.sort((a,b) => a-b);
    
    let budget = k;  
    let idx = 0;
    let count =0;
    while(budget - sortedPrices[idx] >0) {
        budget -= sortedPrices[idx];
        count ++;
        idx ++
    }
    
    return count;
}