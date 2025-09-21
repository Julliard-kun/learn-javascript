// Concatenation
function concatenateUsingConcat(str1, str2) {
    document.getElementById("concatResult").textContent = str1.concat(str2);
}

// Length
function getStringLength(str) {
    console.log(str);
    document.getElementById("lengthResult").textContent = str.length;
}

// Substring
function getSubstring(str, start, end) {
    document.getElementById("substringResult").textContent = str.substring(start, end);
}

// ToUpperCase
function convertToUpperCase(str) {
    document.getElementById("upperResult").textContent = str.toUpperCase();
}

// ToLowerCase
function convertToLowerCase(str) {
    document.getElementById("lowerResult").textContent = str.toLowerCase();
}

// Trim
function trimString(str) {
    document.getElementById("trimResult").textContent = `"${str.trim()}"`;
}

// Replace
function replaceInString(str, find, replace) {
    document.getElementById("replaceResult").textContent = str.replace(find, replace);
}

// Split
function splitString(str, separator) {
    document.getElementById("splitResult").textContent = JSON.stringify(str.split(separator));
}

// IndexOf
function findIndexInString(str, searchStr) {
    document.getElementById("indexOfResult").textContent = str.indexOf(searchStr);
}

// Includes
function checkIncludes(str, searchStr) {
    document.getElementById("includesResult").textContent = str.includes(searchStr);
}