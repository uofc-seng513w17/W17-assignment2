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
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
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

function cleanInput(txt) {
    cleaned = txt.replace(/(\r\n|\n|\r)/gm," ");
    cleaned = cleaned.replace(/(\r\t|\t|\r)/gm," ");
    return cleaned.replace(/[|&;$%@"<>()+,#.!^']/g, " ");
}
