//create entry




//insert date for each entry (https://stackoverflow.com/questions/32540044/html-display-current-date/32540196)
function grabDate() {
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}
