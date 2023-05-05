
/*  The JavaScript canvas object has two properties and two methods:
        width: width of the canvas, in pixels
        height: height of the canvas, in pixels
        getContext(): provides access to the canvas context
        toDataURL(): translates the content of the given canvas into code for an image file */

/*  The drawing context associated with the canvas is
    the thing onto which the drawing is rendered
        Each canvas has one context which is initialized when getContext() is called
        Contexts: "2d", "webgl", etc.  */

/* Canvas 1 */
var cvs1 = document.getElementById("CanvasOne");                // access the canvas object
var ctx1 = cvs1.getContext("2d");                               // access the canvas context

cvs1.width = 400;                                               // set width of the canvas object
cvs1.height = 120;                                              // set height of the canvas object

/* We draw on the canvas */
ctx1.fillStyle = "salmon";                                      // set the color to "lightblue"
ctx1.fillRect(0, 0, 400, 120);                                  // draw a filled rectangle at (0, 0) with width 450 and height 120

var grad1 = ctx1.createLinearGradient(0, 0, 200, 0);            // create a linear gradient
grad1.addColorStop(0, "white");
grad1.addColorStop(0.8, "gold");
grad1.addColorStop(1, "lightgreen");

ctx1.fillStyle = grad1;                                      
ctx1.fillRect(0, 50, 400, 20);

ctx1.beginPath();                                               // begin a path 
ctx1.arc(300, 60, 30, 0, 2 * Math.PI);                          // draw a circle
ctx1.closePath();                                               // close the path

ctx1.fillStyle = "red";
ctx1.fill();                                                    // fill the drawing (path)
ctx1.stroke();                                                  // draw the path



/* Canvas 2 */
var cvs2 = document.getElementById("CanvasTwo");
var ctx2 = cvs2.getContext("2d");

/* We create a bar graph */
var bardata = [12, 20, 55, 32, 12, 25, 40];

ctx2.fillStyle = "lightblue";
ctx2.fillRect(0, 0, 400, 400);

ctx2.fillStyle = "teal";
for (var i = 0; i < bardata.length; i++) {
    ctx2.fillRect(50 + i*45, 350-(bardata[i] * 4), 30, (bardata[i] * 4));
}

ctx2.beginPath();
ctx2.moveTo(35, 50);
ctx2.lineTo(35, 350);
ctx2.lineTo(370, 350);

ctx2.fillStyle = "black";
ctx2.lineWidth = 2;
ctx2.stroke();

for(var i = 0; i < 7; i++) {
    ctx2.fillText((7-i) * 10, 15, 65 + i*42);
    ctx2.fillText("Bar " + i, 52 + i * 45, 364);
}



/* Canvas 3*/
var cvs3 = document.getElementById("CanvasThree");
var ctx3 = cvs3.getContext("2d");

cvs3.width = 400;
cvs3.height = 50;  

/* We display some text */
ctx3.fillStyle = "lightgrey";
ctx3.fillRect(0, 0, 400, 50);

var message1 = "Here's a pangram:"
var message2 = "Glib jocks quiz nymph to vex dwarf. !%$§&";

ctx3.fillStyle = "black";
ctx3.font = "18px Arial";
ctx3.fillText(message1, 15, 20);
ctx3.fillText(message2, 15, 42);



/* Canvas 4*/
var cvs4 = document.getElementById("CanvasFour");
var ctx4 = cvs4.getContext("2d");

cvs4.width = 40;
cvs4.height = 40;

ctx4.fillStyle = "plum";
ctx4.fillRect(0, 0, 25, 40);

ctx4.fillStyle = "indigo";
ctx4.fillRect(30, 0, 10, 40);


/* We convert the canvas into a PNG data URL */
var dataURL = cvs4.toDataURL("image/png");
document.getElementById("dataURL").innerHTML = dataURL;