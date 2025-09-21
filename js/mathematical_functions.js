/**
 * Comprehensive Mathematical Functions for JavaScript Learning
 * This file contains various mathematical operations to help understand JavaScript math concepts
 */
// ====== Basic Arithmetic Operations ======

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of the two numbers
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference between the numbers
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of the two numbers
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of the division
 * @throws {Error} If trying to divide by zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

// ====== Advanced Mathematical Operations ======

/**
 * Raises a number to a power
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Result of the exponential operation
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} number - The number to find square root of
 * @returns {number} Square root of the number
 * @throws {Error} If trying to find square root of negative number
 */
function squareRoot(number) {
    if (number < 0) {
        throw new Error("Cannot calculate square root of negative number!");
    }
    return Math.sqrt(number);
}

/**
 * Returns the absolute value of a number
 * @param {number} number - The number to find absolute value of
 * @returns {number} Absolute value of the number
 */
function absolute(number) {
    return Math.abs(number);
}

// ====== Geometry Functions ======

/**
 * Calculates the area of a rectangle
 * @param {number} length - Length of the rectangle
 * @param {number} width - Width of the rectangle
 * @returns {number} Area of the rectangle
 */
function rectangleArea(length, width) {
    return length * width;
}

/**
 * Calculates the area of a circle
 * @param {number} radius - Radius of the circle
 * @returns {number} Area of the circle
 */
function circleArea(radius) {
    return Math.PI * radius * radius;
}

/**
 * Calculates the volume of a cube
 * @param {number} side - Length of cube's side
 * @returns {number} Volume of the cube
 */
function cubeVolume(side) {
    return Math.pow(side, 3);
}

// ====== Statistical Functions ======

/**
 * Calculates the mean (average) of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Mean of the numbers
 */
function mean(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

/**
 * Calculates the median of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Median of the numbers
 */
function median(numbers) {
    if (numbers.length === 0) return 0;
    
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}

/**
 * Finds the mode (most frequent value) in an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} Mode(s) of the numbers (can be multiple if there's a tie)
 */
function mode(numbers) {
    if (numbers.length === 0) return [];
    
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    
    const maxFrequency = Math.max(...Object.values(frequency));
    return Object.keys(frequency)
        .filter(num => frequency[num] === maxFrequency)
        .map(Number);
}

// ====== Trigonometric Functions ======

/**
 * Converts degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} Angle in radians
 */
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees
 * @param {number} radians - Angle in radians
 * @returns {number} Angle in degrees
 */
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

/**
 * Calculates sine of an angle in degrees
 * @param {number} degrees - Angle in degrees
 * @returns {number} Sine of the angle
 */
function sin(degrees) {
    return Math.sin(degreesToRadians(degrees));
}

/**
 * Calculates cosine of an angle in degrees
 * @param {number} degrees - Angle in degrees
 * @returns {number} Cosine of the angle
 */
function cos(degrees) {
    return Math.cos(degreesToRadians(degrees));
}

/**
 * Calculates tangent of an angle in degrees
 * @param {number} degrees - Angle in degrees
 * @returns {number} Tangent of the angle
 */
function tan(degrees) {
    return Math.tan(degreesToRadians(degrees));
}

// ====== Additional Math Functions ======

/**
 * Rounds a number to the nearest integer
 * @param {number} number - The number to round
 * @returns {number} The rounded number
 */
function round(number) {
    return Math.round(number);
}

/**
 * Rounds a number up to the nearest integer
 * @param {number} number - The number to round up
 * @returns {number} The rounded up number
 */
function ceil(number) {
    return Math.ceil(number);
}

/**
 * Rounds a number down to the nearest integer
 * @param {number} number - The number to round down
 * @returns {number} The rounded down number
 */
function floor(number) {
    return Math.floor(number);
}

/**
 * Generates a random number between min (inclusive) and max (exclusive)
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value (exclusive)
 * @returns {number} A random number between min and max
 */
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer between min (inclusive) and max (inclusive)
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value (inclusive)
 * @returns {number} A random integer between min and max
 */
function randomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates the natural logarithm (base e) of a number
 * @param {number} number - The number to calculate logarithm for
 * @returns {number} Natural logarithm of the number
 * @throws {Error} If trying to calculate logarithm of negative number or zero
 */
function log(number) {
    if (number <= 0) {
        throw new Error("Cannot calculate logarithm of zero or negative number!");
    }
    return Math.log(number);
}

/**
 * Calculates the logarithm of a number with a specified base
 * @param {number} number - The number to calculate logarithm for
 * @param {number} base - The base of the logarithm
 * @returns {number} Logarithm of the number with specified base
 * @throws {Error} If trying to calculate logarithm of negative number or zero
 */
function logBase(number, base) {
    if (number <= 0) {
        throw new Error("Cannot calculate logarithm of zero or negative number!");
    }
    if (base <= 0 || base === 1) {
        throw new Error("Invalid logarithm base!");
    }
    return Math.log(number) / Math.log(base);
}

/**
 * Truncates decimal places from a number
 * @param {number} number - The number to truncate
 * @param {number} decimals - Number of decimal places to keep
 * @returns {number} Truncated number
 */
function truncate(number, decimals = 0) {
    const factor = Math.pow(10, decimals);
    return Math.trunc(number * factor) / factor;
}

/**
 * Returns the sign of a number: 1 for positive, -1 for negative, 0 for zero
 * @param {number} number - The number to check
 * @returns {number} The sign of the number
 */
function sign(number) {
    return Math.sign(number);
}

/**
 * Clamps a number between a minimum and maximum value
 * @param {number} number - The number to clamp
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} The clamped number
 */
function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

/**
 * Returns the maximum of two or more numbers
 * @param {...number} numbers - Numbers to compare
 * @returns {number} The largest number
 */
function maximum(...numbers) {
    return Math.max(...numbers);
}

/**
 * Returns the minimum of two or more numbers
 * @param {...number} numbers - Numbers to compare
 * @returns {number} The smallest number
 */
function minimum(...numbers) {
    return Math.min(...numbers);
}

/**
 * Checks if a number is an integer
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is an integer
 */
function isInteger(number) {
    return Number.isInteger(number);
}

/**
 * Checks if a number is finite
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is finite
 */
function isFinite(number) {
    return Number.isFinite(number);
}

/**
 * Formats a number to a specified number of decimal places
 * @param {number} number - The number to format
 * @param {number} decimals - Number of decimal places
 * @returns {number} The formatted number
 */
function toFixed(number, decimals = 2) {
    return Number(number.toFixed(decimals));
}

/**
 * Calculates the hyperbolic sine of a number
 * @param {number} number - The number
 * @returns {number} The hyperbolic sine
 */
function sinh(number) {
    return Math.sinh(number);
}

/**
 * Calculates the hyperbolic cosine of a number
 * @param {number} number - The number
 * @returns {number} The hyperbolic cosine
 */
function cosh(number) {
    return Math.cosh(number);
}

/**
 * Calculates the hyperbolic tangent of a number
 * @param {number} number - The number
 * @returns {number} The hyperbolic tangent
 */
function tanh(number) {
    return Math.tanh(number);
}
