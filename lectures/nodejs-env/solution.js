function studentAges(ages) {
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    let average = sum / ages.length;
    return average;
}

console.log(studentAges([20, 22, 36]));
