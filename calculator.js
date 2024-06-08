const calc = (num1, num2) => {
    const add = () => {
        // if (num1 === 5 && num2 === 2) {
        //     return 7;
        // }
        return num1 + num2;
    }; 
    const subtract = () => {
        // if (num1 === 1 && num2 === 2) {
        //     return -1;
        // }
        return num1 - num2;
    }; 
    const divide = () => {
        return num1 / num2;
    }; 
    const multiply = () => {
        return num1 * num2;
    };
    return {add, subtract, divide, multiply};
}
export default calc;