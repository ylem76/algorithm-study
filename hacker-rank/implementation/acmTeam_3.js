/*
배열로 이쁘게 만들어서 결과값을 뽑아내려고 했는데,
사실 그렇게 할 필요는 없었고
그냥 필요한 결과값에 맞춰 처음부터 변수를 놓고
거기에 알맞게 대입하는 게 정답이었음 ㅠㅜ
*/
function acmTeam(topic) {
  const teamLength = topic.length;   
  const topicLength = topic[0].length;
  
  let sessionCount = 0;
  let teamCount = 0;
  
  for (let i=0; i<teamLength; i++) {        
      for(let j=i+1; j<teamLength; j++) {
          let count = 0;
          for(let k =0; k<topicLength; k++) {
              if(topic[i][k] === '1' || topic[j][k] === '1') {
              count ++;
              }    
          }
          
          if(count > sessionCount) {
              sessionCount = count;
              teamCount = 1;
          } else if (count === sessionCount) {
              teamCount ++;
          }
      }
  }
  const result = [sessionCount, teamCount];
  return result   
}