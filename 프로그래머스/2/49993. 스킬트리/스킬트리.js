function solution(skill, skill_trees) {
    let answer = 0;
    
    skill_trees.forEach(skill_tree=> {
        const filterd = skill_tree.split('').filter((skillStr) => skill.split('').includes(skillStr));
        const filterdStr = filterd.join('');
        
        let isPossible = true;
        for(let i=0; i<filterd.length; i++) {
            if(filterd[i] !== skill[i]) {
                isPossible = false;
                break;
            }
        }
        
        if(isPossible) {
            answer ++;
        }
        
    });
    
    console.log(answer);
    
    return answer
    
    
}