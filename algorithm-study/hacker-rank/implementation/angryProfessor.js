function angryProfessor(k, a) {

    const onTimeStudentNum = a.filter(item => item<=0).length;
    const isCanceled = onTimeStudentNum >= k ? 'NO' : 'YES';
    return isCanceled;

}