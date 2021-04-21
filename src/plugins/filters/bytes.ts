export const byte = function(value: number | null | undefined): string {
    if (! value) {
        return '';
    }

    const negative = value < 0;
    const units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (negative) {
        value = -value;
    }

    if (value < 1) {
        return (negative ? '-' : '') + String(value) + ' B';
    }

    const exponent = Math.min(Math.floor(Math.log(value) / Math.log(1000)), units.length - 1);
    value = Number((value / Math.pow(1000, exponent)).toFixed(2)) * 1;
    const unit = units[exponent];

    return (negative ? '-' : '') + String(value) + ' ' + unit;
};

export const bytesPerSecond = function(number: number | null | undefined): string {
    const byte_string = byte(number);

    if (! byte_string) {
        return '';
    }

    return byte_string + '/s';
};