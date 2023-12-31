
function CalculateTriangleArea() {
    /* get triangle base value */
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);
    // get triangle Height Value;

    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);

    const area = 0.5 * base * height
    console.log(area);

    // show area
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;
}


function CalculateRectangleArea() {
    // get rectangle width value;
    const widthField = document.getElementById("rectangle-w");
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    // get rectangle length;

    const lengthField = document.getElementById("rectangle-l");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    // Show Area of rectangle

    const area= width * length;
    const areaSpan= document.getElementById("rectangle-area");
    areaSpan.innerText = area;


}

// reusable function  ---> reduce duplicate code
function CalculateParallelogramArea(){
    const base = getInputValue("parallelogram-b")
    // console.log(base);
    const height = getInputValue("parallelogram-h") 
    // console.log(height);
    const area= base * height
    setElementInnerText("parallelogram-area", area);
}

function CalculateEllipseArea(){
    const major= getInputValue("major-axis");
    const minor= getInputValue("minor-axis");

    const areaOfEllipse= 3.1416 * major * minor;

    setElementInnerText("Ellipse-area", areaOfEllipse);
}

// reuseable get  input value field in number;

function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId);
    const inputValueText= inputField.value;
    const value= parseFloat(inputValueText);
    return value;
}


// reuseable set span p div etc  text
function setElementInnerText( elementId, area){
    const element = document.getElementById(elementId);
    element.innerText= area;
}
