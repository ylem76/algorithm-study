/*
배열로 다 바꿔서 연산하는게 문제가 아닐까 해서
숫자로 연산 후 그 값을 배열에 넣는 식으로 해보았으나...
숫자가 너무 커서 제대로 연산이 안된다 ㅠㅠ
*/

function acmTeam(topic) {
    const topicTeamLength = topic.length;    
    const newTopicArr = [];
    const intTopic = topic.map(item=>BigInt(item));
    for (let i=0; i<topicTeamLength; i++) {        
        for(let j=i+1; j<topicTeamLength; j++) {
            const newTopicItem = String(intTopic[i] + intTopic[j]);
            const topicKnown = newTopicItem.replace(/0/g, '').length;
            newTopicArr.push(topicKnown);
        }
    }
    const topicMax = Math.max(...newTopicArr);
    const topicMaxNum = newTopicArr.filter(item => {
        if(item === topicMax) {
            return true
        }
    });
    const result = [topicMax, topicMaxNum.length];
    return result
    
}