//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

function nChars(txt) {
    return txt.length;
}

function nLines(txt) {
    if (nChars(txt) == 0) {
        return 0;
    }
    return (txt.split("\n").length - 1);
}

function cleanInput(txt) {
    return txt.replace(/[|&;$%@"<>()+,#.]/g, "");
}

function nWords(txt) {
    clean = cleanInput(txt);
    return clean
}

