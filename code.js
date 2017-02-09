//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        original: txt,
        cleaned: cleanInput(txt),
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: aNonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: palindromes(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

function nChars(txt) {
    return txt.length;
}

function nWords(txt) {
    clean = cleanInput(txt);
    return clean.trim().split(/\s+/).length;
}

function nLines(txt) {
    if (nChars(txt) == 0) {
        return 0;
    }
    return (txt.split("\n").length);
}

function aNonEmptyLines(txt) {
    if (nChars(txt) == 0) {
        return 0;
    }
    splitString = txt.split("\n");
    var index, count = 0;
    for (index = 0; index < splitString.length; index++) {
        if (nChars(splitString[index]) > 0) {
            count++;
        }
    }
    return count;
}

function averageWordLength(txt) {
    cleaned = cleanInput(txt);
    numWords = nWords(cleaned);
    numChars = nChars(cleaned.replace(" ", "").trim());
    return numChars/numWords;
}

function maxLineLength(txt) {

    var index, max = 0;
    splitString = txt.split("\n");
    for(index = 0;index < splitString.length; index++) {
        num = nChars(splitString[index].replace(/(\r\n|\n|\r)/gm," "));
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function palindromes(txt) {
    var palindromes = [];
    cleaned = cleanInput(txt);
    cleaned = cleaned.replace(/ +(?= )/g,'');
    cleaned = cleaned.split(" ");
    for(index = 0; index < cleaned.length; index++){
        palindrome = true;
        for(charsat = 0; charsat < (cleaned[index].length/2); charsat++) {
            if (cleaned[index].length <= 2){
                palindrome = false;
                break;
            }
            if (cleaned[index].charAt(charsat) != cleaned[index].charAt(cleaned[index].length-charsat-1)) {
                palindrome = false;
                break;
            }
        }
        if (palindrome == true){
            if (cleaned[index].length > 2) {
                palindromes.push(cleaned[index]);
            }
        } else {
            palindrome = true;
        }
    }
    return palindromes;
}

function longestWords(txt) {
    cleaned = cleanInput(txt);
    cleaned = cleaned.toLowerCase();
    cleaned = cleaned.replace(/ +(?= )/g,'');
    cleaned = cleaned.trim();
    cleaned = cleaned.split(" ");
    return cleaned.sort(sortFunction);
}

function sortFunction(a, b) {
    if (a.length == b.length) {
        if(a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    } else if (a.length > b.length) {
        return -1;
    } else {
        return 1;
    }
}

function cleanInput(txt) {
    cleaned = txt.replace(/(\r\n|\n|\r)/gm," ");
    cleaned = cleaned.replace(/(\r\t|\t|\r)/gm," ");
    return cleaned.replace(/[|&;$%@"<>()+,#.!^']/g, " ");
}

