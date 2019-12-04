var Era;
(function (Era) {
    Era["AC"] = "AC";
    Era["DC"] = "DC";
})(Era || (Era = {}));
function determineHistoricalAge(year, eraLabel = Era.DC) {
    if (eraLabel === Era.AC && year > 4000) {
        return "Pré-História";
    }
    if (eraLabel === Era.AC && year <= 4000 || eraLabel === Era.DC && year < 476) {
        return "Idade Antiga";
    }
    if (eraLabel === Era.DC && (year >= 476 && year < 1453)) {
        return "Idade Média";
    }
    if (eraLabel === Era.DC && (year >= 1453 && year <= 1789)) {
        return "Idade Moderna";
    }
    return "Idade Contemporânea";
}
console.log(determineHistoricalAge(1000, Era.AC));
console.log(determineHistoricalAge(1000));
//# sourceMappingURL=ex3.js.map