function mergeAlternately(word1: string, word2: string): string {
    /**
     * 생각한대로 풀어본 것 : 간단한데, 느렸음
     */

    /**
    const wordLength: number = Math.max(word1.length, word2.length)
    let result:string = '';
    for(let i=0; i<wordLength; i++) {
        if(word1[i]) {
            result += word1[i];
        }
        if(word2[i]) {
            result += word2[i];
        }
    }
    return result;

     */

    /**
     * 해설 참고 : 포인터 2개
     */
    const m: number = word1.length;
    const n: number = word2.length;

    let result : string = '';

    let i:number = 0;
    let j: number = 0;

    while(i < m || j < n) {
        if(i < m) {
            result += word1[i];
            i++;
        }
        if(j < n) {
            result += word2[j];
            j ++;
        }
    }

    return result;

    
    //const m: number = word1.length;
    //const n: number = word2.length;

    //let result : string = '';

    //for(let i=0; i<Math.max(m, n); i++) {
    //    if(i < m) {
    //        result += word1[i];
    //    }
    //    if(i < n) {
    //        result += word2[i];
    //    }
    //}

    //return result;
};