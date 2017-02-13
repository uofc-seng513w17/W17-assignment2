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
        mostFrequentWords: mostFrequentWords(txt)
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

        if (nChars(splitString[index].replace(/\s/g, "")) > 0) {
            count++;
        }
    }
    return count;
}

function averageWordLength(txt) {
    cleaned = cleanInput(txt);
    numWords = nWords(cleaned);
    numChars = nChars(cleaned.replace(/\s/g, "").trim());
    return cleaned.replace(/\s/g, "").trim();
    //506
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
    cleaned = cleaned.split(" ");
    cleaned = cleaned.sort(sortFunction);
    return cleaned.slice(0,10);
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

function mostFrequentWords(txt) {
    cleaned = cleanInput(txt);
    cleaned = cleaned.toLowerCase();
    cleaned = cleaned.replace(/ +(?= )/g,'');
    cleaned = cleaned.trim();
    cleaned = cleaned.split(" ");

    var wordCounts = { };
    for(var i = 0; i < cleaned.length; i++) {
        wordCounts[cleaned[i]] = (wordCounts[cleaned[i]] || 0) + 1;
    }

    var sortable = [];
    for (var word in wordCounts) {
        sortable.push([word, wordCounts[word]]);
    }

    sortable.sort(function(a,b){
        return b[1]-a[1];
    })

    var ret = [];
    for (var index = 0; index < sortable.length; index++) {
        ret.push(sortable[index][0] + "(" + sortable[index][1] + ")");
    }
    return ret.slice(0,10);
    //TODO: have to get this alphabetically sorted first....
}

function cleanInput(txt) {
    cleaned = txt.replace(/(\r\n|\n|\r)/gm," ");
    cleaned = cleaned.replace(/(\r\t|\t|\r)/gm," ");
    cleaned = cleaned.toLowerCase();
    cleaned = cleaned.replace(/ +(?= )/g,'');
    cleaned = cleaned.trim();
    return cleaned.replace(/[:|&;$%@"<?>()+,#.!^']/g, " ");
}

