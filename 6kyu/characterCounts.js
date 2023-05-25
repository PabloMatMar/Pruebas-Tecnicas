String.prototype.characterCount = function (arg) {
    if (arg == undefined || arg.length == 0) return undefined;
    let solution = [];
    let letters = "";
    typeof (arg) == 'string' ? letters = arg.split('') : letters = arg;
    let count = {}
    this.toString().split('').map(e => count[e] == undefined ? count[e] = 1 : count[e]++)
    solution = letters.map(e => count[e] == undefined ? 0 : count[e])
    const min = solution.filter(e => e != 0);
    if (min.length == 0) return 0
    else if (min.length == 1) return min[0]
    return solution
};