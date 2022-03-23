/*
이중for문을 이용해서 팀들을 합친 배열을 만들고
각 원소들을 더해서 아는 토픽과 모르는 토픽 구분, 값을 구한다
값은 나오는데 시간초과라서 다시 생각해봐야할 것 같다
*/

function acmTeam(topic) {
    const topicsKnown = [];
    const topicLength = topic.length;
    for (let i=0; i<topicLength; i++) {
        const newTeamA = topic[i].split('').map(item => +item);
        
        for(let j=i+1; j<topicLength; j++) {
            const newTeamB = topic[j].split('').map(item => +item);
            const teamTopic = newTeamA.map((item, idx) => {
                return item + newTeamB[idx] === 0 ? 0 : 1
            });
            const topicNum = teamTopic.reduce((a,b) => a+b);
            topicsKnown.push(topicNum);
        }   
    }
    const topicMax = Math.max(...topicsKnown);
    const topicMaxNum = topicsKnown.filter(item => {
        if(item === topicMax) {
            return true
        }
    });
    const result = [topicMax, topicMaxNum.length];
    return result
}