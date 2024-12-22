export function compare(strings: TemplateStringsArray, ...values: number[]): boolean {
    // Construct the full string by combining literals and interpolated values
    const tokens = strings
        .map((str, i) => `${str}${values[i] !== undefined ? values[i] : ''}`)
        .join('')
        .trim()
        .split(/\s+/);  // Split by whitespace to capture operands and operators

    const validOperators = ['<', '<=', '>', '>='];

    // Check if the tokens array is too short or has an even number of elements (invalid chain)
    if (tokens.length <= 3 || tokens.length % 2 === 0) {
        throw new Error('Invalid comparison chain');
    }

    // Validate and perform the comparisons
    for (let i = 1; i < tokens.length; i += 2) {
        const left = parseFloat(tokens[i - 1]);
        const operator = tokens[i];
        const right = parseFloat(tokens[i + 1]);

        // Validate operator
        if (!validOperators.includes(operator)) {
            return false;
        }

        // Perform the comparison for each pair of operands and operators
        if (operator === '<' && !(left < right)) return false;
        if (operator === '<=' && !(left <= right)) return false;
        if (operator === '>' && !(left > right)) return false;
        if (operator === '>=' && !(left >= right)) return false;
    }

    return true;
}