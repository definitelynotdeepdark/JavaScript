day = document.getElementById("day");
lyric = document.getElementById("lyric");



document.getElementById("submit").onclick = function(){
    day = document.getElementById("day").value;
    day = day.toLowerCase();
    switch(day){
        case "monday":
            lyric.textContent = "Monday left me broken";
            break;
         case "tuesday":
            lyric.textContent = "Tuesday, I was through with hoping";
            break;
        case "wednesday":
            lyric.textContent = "Wednesday, my empty arms were open";
            break;
        case "thursday":
            lyric.textContent = "Thursday, waiting for love, waiting for love";
            break;
        case "friday":
            lyric.textContent = "Thank the stars, it's Friday";
            break;
        case "saturday":
            lyric.textContent = "I'm burning like a fire gone wild on Saturday";
            break;
        case "sunday":
            lyric.textContent = "Guess I won't be coming to church on Sunday";
            break;
        default:
            lyric.textContent ="That's not a day!";
            break;
    }
    
}