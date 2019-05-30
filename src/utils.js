const Converter = function (units) {
    this.units = units;
};

Converter.prototype.value = function (numerator, denominator) {
    if (denominator)
        this.val = numerator / denominator;
    else
        this.val = numerator;

    return this;
};

Converter.prototype.from = function (from) {
    if (this.destination)
        throw new Error('.from must be called before .to');
    this.origin = this.getUnit(from);
    return this;
};

Converter.prototype.to = function (to) {
    this.destination = this.getUnit(to);


    return this.val * this.origin.to_anchor * this.destination.to_anchor;
}

Converter.prototype.getUnit = function (allias) {
    let t;
    Object.keys(this.units).forEach(system => {
        Object.keys(this.units[system]).forEach(unit => {
            if (allias === unit)
                t = this.units[system][unit]
        })
    });

    return t;
}

const convert = function (units) {
    return new Converter(units);
};

module.exports = convert;