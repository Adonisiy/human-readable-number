module.exports = function toReadable(number) {
    if (number <= 0 || number > 999)
        return 'zero';

    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const secondTen=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    
    let res = '';

    const numHundreds = ~~(number / 100);
    const numTens = ~~((number % 100) / 10);
    const numUnits = number % 10;

    if (numHundreds > 0)
        res += ' ' + units[numHundreds] + ' hundred';
    if ((numTens == 0) && (numUnits != 0))
        res += ' ' + units[numUnits];
    if (numTens == 1)
        res += ' ' + secondTen[numUnits];
    if (numTens > 1) {
        res += ' ' + tens[numTens];
        if (numUnits > 0)
        res += ' ' + units[numUnits]
    }

    return res.slice(1);
};
