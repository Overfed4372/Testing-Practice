const upperCase = (string) => {
    // if (string === "hell") return "Hell";
    // if (string === "jaraed") return "Jaraed";
    // if (string === "amir") return "Amir";
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
describe ('#capitalize()', function () {
    it('Should take a string and return that with the first character in uppercase', function() {
        const testCases = [
            {in:"hell", out:"Hell"},
            {in:"jaraed", out:"Jaraed"},
            {in:"amir", out:"Amir"}
        ]; 
        testCases.forEach((test) => {
            const actual = upperCase(test.in);
            expect(actual).toBe(test.out);
        })
    }); 
})

const reverseString = (string) => {
    return [...string].reverse().join("");
}
describe ('#reverseString()' , function () {
    it ("Should take a string and return a reversed version of it", function() {
        const testCases = [
            {in: "Ahmad", out:"damhA"},
            {in: "Mahmoud", out:"duomhaM"},
            {in: "Jaleh", out:"helaJ"},
            {in: "Mammad", out:"dammaM"},
        ];
        testCases.forEach((test) => {
            const actual = reverseString(test.in);
            expect(actual).toBe(test.out);
        })
    });
})

import calc from "./calculator";
describe('#calculator()', () => {
    it ("Must do calculations on two given numbers", () => {
        const testCases = [
            {1:1, 2:2, op: "Subtract", ans: -1},
            {1:4, 2:7, op: "Subtract", ans: -3},
            {1:3, 2:4, op: "Divide", ans: 3/4},
            {1:5, 2:2, op: "Add", ans: 7},
            {1:50, 2:23, op: "Add", ans: 73},
            {1:1, 2:42, op: "Add", ans: 43},
            {1:56, 2:3, op: "Multiply", ans: 168},
            {1:11, 2:12, op: "Multiply", ans: 132},
        ];
        testCases.forEach((test) => {
            const calculate = calc (test[1], test[2]);
            let answer;
            switch (test.op) {
                case "Subtract" :
                    answer = calculate.subtract();
                    break;
                case "Add" : 
                    answer = calculate.add();
                    break;
                case "Divide" : 
                    answer = calculate.divide();
                    break;
                case "Multiply" : 
                    answer = calculate.multiply();
                    break;
            };
            expect(answer).toBe(test.ans);
        })
    });
})

import caesarCipher from "./caesar-cipher";
describe("#caesarCipher()" , () => {
    it ("Must encrypt a string with a key and shift characters", () => {
        expect(caesarCipher('xyz', 3)).toBe("abc");
        expect(caesarCipher('abc', 4)).toBe("efg");
        expect(caesarCipher('HeLLo', 3)).toBe("KhOOr");
        expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
    })
})

import analyzeArray from "./analyze-array";
describe("#analyzeArray()", () => {
    it("Must return average, min, max and length of the numbers of an array", () => {
        const value = [1,8,3,4,2,6];
        expect(analyzeArray(value)).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
})