export default function caesarCipher (str, shift) {
    const result = str.split("")
        .map((val) => {
            let letterKey;
            //upper case letters
            if (val.charCodeAt() >= 65 && val.charCodeAt() <= 90) {
                letterKey = val.charCodeAt() + shift;
                if (letterKey < 65) {
                    letterKey = 90 - (65 - letterKey - 1);
                }else if (letterKey > 90) {
                    letterKey = 65 + (letterKey - 90 - 1);
                }
            //lower case letters
            } else if (val.charCodeAt() >= 97 && val.charCodeAt() <= 122) {
                letterKey = val.charCodeAt() + shift ;
                if (letterKey < 97) {
                    letterKey = 122 - (97 - letterKey - 1);
                }else if (letterKey > 122) {
                    letterKey = 97 + (letterKey - 122 - 1);
                }
            }
            if (letterKey) return String.fromCharCode(letterKey);
            else return val;
        })
        .join("");
    return result;
}