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

// Export all functions for use in other files
module.exports = {
    // Basic Operations
    add,
    subtract,
    multiply,
    divide,
    
    // Advanced Operations
    power,
    squareRoot,
    absolute,
    
    // Geometry
    rectangleArea,
    circleArea,
    cubeVolume,
    
    // Statistics
    mean,
    median,
    mode,
    
    // Trigonometry
    degreesToRadians,
    radiansToDegrees,
    sin,
    cos,
    tan
};

