
/* Canvas 3 */
var cvs3 = document.getElementById("CanvasThree");
var ctx3 = cvs3.getContext("2d");

cvs3.width = 400;
cvs3.height = 50;  

ctx3.fillStyle = "lightgrey";
ctx3.fillRect(0, 0, 400, 50);

var message1 = "Here's a pangram:"
var message2 = "Glib jocks quiz nymph to vex dwarf. !%$§&";

ctx3.fillStyle = "black";
ctx3.font = "18px Arial";
ctx3.fillText(message1, 15, 20);
ctx3.fillText(message2, 15, 42);

/* Get a Base64 encoding of a PNG image containing the contents of canvas 3 */
var dataURL = cvs3.toDataURL("image/png");
console.log(dataURL);


/*  "Implementing Java's String.hashCode in JavaScript"
    https://lowrey.me/implementing-javas-string-hashcode-in-javascript/ */
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
        hash = hash & hash
    }
    return hash;
}

/* Convert dataURL to a 32-bit integer */
var hashed = hashString(dataURL);
document.getElementById("hashed").innerHTML = hashed;



