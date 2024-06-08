export default function analyzeArray (array) {
    if (array.length === 0) return;
    let sum = 0;
    let min = array[0];
    let max = array[0];
    let length = 0;
    let ave;
    array.map((item) => {
        length ++;
        sum += item;
        if (item < min) min = item;
        if (item > max) max = item;
    });
    ave = sum / length;
    return {
        average: ave, 
        min: min,
        max: max, 
        length: length
    }
}