const Utils = {
    calculateNumber(type, a, b) {
        if (typeof type !== 'string' || !['SUM', 'SUBTRACT', 'DIVIDE'].includes(type)) {
          throw new Error('Invalid operation type. Valid types are SUM, SUBTRACT, and DIVIDE');
        }
        let roundedA = Math.round(a);
        let roundedB = Math.round(b);
        switch (type) {
            case "SUM":
                return roundedA + roundedB;
            case "SUBTRACT":
                return roundedA - roundedB;
            case "DIVIDE":
                if (roundedB === 0) {
                    return "Error";
                }
                return roundedA / roundedB;
            default:
                break;
        }
    }
}
module.exports = Utils;
