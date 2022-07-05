
/**
 * half도 들어와야 하니까 m<31로
 */
function timeInWords(h, m) {
    const hour = ['one', 'two', 'three', 'four','five','six', 'seven', 'eight','nine','ten', 'eleven','twelve']
    const words = ["o' clock","one minute","two minutes","three minutes","four minutes","five minutes","six minutes","seven minutes","eight minutes","nine minutes","ten minutes","eleven minutes","twelve minutes","thirteen minutes","fourteen minutes","quarter","sixteen minutes","seventeen minutes","eighteen minutes","nineteen minutes","twenty minutes","twenty one minutes","twenty two minutes","twenty three minutes","twenty four minutes","twenty five minutes","twenty six minutes","twenty seven minutes","twenty eight minutes","twenty nine minutes","half"
    ];
    
    let result = '';
    if(m === 0) {
        result = `${hour[h-1]} ${words[m]}`;
    } else if(m<31) {
        result = `${words[m]} past ${hour[h-1]}`;
    } else {
        result = `${words[(60-m)]} to ${hour[h]}`;
    }
    console.log(result)
    return result;
}