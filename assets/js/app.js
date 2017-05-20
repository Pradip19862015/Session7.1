// Below code about Using Function() argument calculating Area of Circle & displaying in console.

// Defining Function with radius a parameter.
function calculateArea(radius)
{
    this.radius = radius; 
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    }; 
}
// Calling the Fn with an arguments.
var result = new calculateArea(7);
// Displaying Final result in console.log.
console.log("%c Area of Circle is " + result.area().toFixed(2) + " ", 'background: #1f1f1f; color: #ffffff;');