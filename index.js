function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
     console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    let answer = "";
    if(string === string.toLowerCase()){
        answer = "I can't hear you!"
        return answer
    } else if (string === string.toUpperCase()){
        answer = "YES INDEED!"
        return answer
    } else if (string === "Let's have dinner together!"){
        answer =  "I would love to!"
        return answer
    }
}