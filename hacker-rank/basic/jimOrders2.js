/**
 * 이렇게 푸는 게 아닌 거 같은데...
 */
function jimOrders(orders) {
    const calculate = orders.map(item => {return item[0] + item[1]});
    const sorted = calculate.slice().sort((a,b)=> a-b);
    const newCalculate = calculate.map(item => {return [item, true]});
    console.log(newCalculate);
    console.log(sorted);
    const result = [];
    for(let i=0; i<sorted.length; i++) {
        for(let j=0; j< calculate.length; j++) {
            console.log(sorted[i], newCalculate[j][0])
            if(sorted[i] === newCalculate[j][0] && newCalculate[j][1] === true){
                newCalculate[j][1] = false;
                result.push(j+1);
            }
        }
        
    }
    console.log(result)
    return result;
}