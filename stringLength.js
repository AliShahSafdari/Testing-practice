const stringLength = (str) => {
    const strLenght = str.length;   
    if (strLenght<1 || strLenght>10) {
        return "The string length is not between 1 and 10";
    }
    return strLenght;
}
module.exports = stringLength; 