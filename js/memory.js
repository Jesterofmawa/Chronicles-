function memoryBrain(message) {

    if (message.startsWith("My name is ")) {

        return handleName(message);

    }

    return null;

}

let shortTerm = {};

let longTerm = {};

function rememberShortTerm(key, value) {

    shortTerm[key] = value;

}

function rememberLongTerm(key, value) {

    longTerm[key] = value;

}

function recall(key) {
    
    if (shortTerm[key] !== undefined) {
        
        return shortTerm[key];
        
    }
    
    if (longTerm[key] !== undefined) {
        
        return longTerm[key];
        
    }
    
    return "I don't remember that yet.";
    
}

function remember(key, value, type) {
    
    if (type === "name") {
        
        rememberLongTerm(key, value);
        
    }
    else {
        
        rememberShortTerm(key, value);
        
    }
    
}