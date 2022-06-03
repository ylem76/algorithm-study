/*
* 중복을 어떻게 거르지?
*/
function jimOrders(orders) {
    
    const calculate = orders.map(item => {return item[0] + item[1]});
    const sorted = calculate.slice().sort((a,b)=> a-b);
    console.log(calculate);
    console.log(sorted);
    const result = sorted.map(item => {        
        const idx = calculate.indexOf(item);
        return idx+1;
    });
    console.log(result)
    return result;

}