function calculateNumber(type, a, b) {
    let roundedA = Math.round(a);
    let roundedB = Math.round(b);
    switch (type) {
        case "SUM":
            return roundedA + roundedB;
        case "SUBSTRACT":
            if (roundedB < roundedA)
                return Error;
            return roundedB - roundedA;
        case "DIVIDE":
            if (roundedB === 0) {
                return Error
            }
            return roundedA / roundedB;
        default:
            return "Invalid type";
    }
}
module.exports = calculateNumber;
