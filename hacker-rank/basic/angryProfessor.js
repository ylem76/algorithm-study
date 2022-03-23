function angryProfessor(k, a) {
    /*
    filter 함수를 이용해 제 시간에 온 학생의 배열을 구함
    배열의 length를 이용해 k를 비교해 yes or no 리턴
    */

    const onTimeStudentNum = a.filter(item => item<=0).length;
    const isCanceled = onTimeStudentNum >= k ? 'NO' : 'YES';
    return isCanceled;

}