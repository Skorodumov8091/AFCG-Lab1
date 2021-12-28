let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let buttonDraw = document.querySelector('div.draw-figure');
let buttonClear = document.querySelector('div.clear-canvas');
let buttonMoveLeft = document.querySelector('div.move-left');
let buttonMoveRigth = document.querySelector('div.move-right');
let buttonMoveTop = document.querySelector('div.move-top');
let buttonMoveBottom = document.querySelector('div.move-bottom');
let buttonTurnLeft = document.querySelector('div.turn-left');
let buttonTurnRigth = document.querySelector('div.turn-right');
let buttonScalePlus = document.querySelector('div.scale-plus');
let buttonScaleMinus = document.querySelector('div.scale-minus');
let buttonTab = document.querySelector('div.tab');
let buttonExample1 = document.querySelector('div.example-1');
let buttonExample2 = document.querySelector('div.example-2');
let buttonExample3 = document.querySelector('div.example-3');

class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Figure {
    arrPoints;

    constructor() {
        this.arrPoints = [];
    }

    addPoint(point) {
        this.arrPoints.push(point);
    }

    moveRigth(value) {
        for(let i = 0; i < this.arrPoints.length; i++){
            this.arrPoints[i].x += Number(value);
        }
    } 

    moveLeft(value) {
        for(let i = 0; i < this.arrPoints.length; i++){
            this.arrPoints[i].x -= Number(value);
        }
    } 

    moveTop(value) {
        for(let i = 0; i < this.arrPoints.length; i++){
            this.arrPoints[i].y -= Number(value);
        }
    }

    moveBottom(value) {
        for(let i = 0; i < this.arrPoints.length; i++){
            this.arrPoints[i].y += Number(value);
        }
    }

    turnRigth() {
        let x = 0, y = 0;
        let SrX, SrY;
        for (let i = 0; i < this.arrPoints.length; i++)
        {
            x += this.arrPoints[i].x;
            y += this.arrPoints[i].y;
        }
        SrX = x / this.arrPoints.length;
        SrY = y / this.arrPoints.length;
        for (let i = 0; i< this.arrPoints.length; i++)
        {
            x = this.arrPoints[i].x - SrX;
            y = this.arrPoints[i].y - SrY;
            
            this.arrPoints[i].x = SrX + x * Math.cos(Math.PI/12) - y * Math.sin(Math.PI/12);
            this.arrPoints[i].y = SrY + x * Math.sin(Math.PI/12) + y * Math.cos(Math.PI/12);
        }
    } 

    turnLeft() {
        let x = 0, y = 0;
        let SrX, SrY;
        for (let i = 0; i < this.arrPoints.length; i++)
        {
            x += this.arrPoints[i].x;
            y += this.arrPoints[i].y;
        }
        SrX = x / this.arrPoints.length;
        SrY = y / this.arrPoints.length;
        for (let i = 0; i< this.arrPoints.length; i++)
        {
            x = this.arrPoints[i].x - SrX;
            y = this.arrPoints[i].y - SrY;
            
            this.arrPoints[i].x = SrX + x * Math.cos(-Math.PI/12) - y * Math.sin(-Math.PI/12);
            this.arrPoints[i].y = SrY + x * Math.sin(-Math.PI/12) + y * Math.cos(-Math.PI/12);
        }
    } 

    scalePlus(value) {
        for (let i = 0; i< this.arrPoints.length; i++)
        {
            this.arrPoints[i].x *= Number(value);
            this.arrPoints[i].y *= Number(value);
        }
    }

    scaleMinus(value) {
        for (let i = 0; i< this.arrPoints.length; i++)
        {
            this.arrPoints[i].x /= Number(value);
            this.arrPoints[i].y /= Number(value);
        }
    }
}


let drawMode = false;
let flag = false;
let start = true;
let drawFigure = false;
let x, y;
let point0, point1, point2;
let line;
let figure = new Figure();
let arrFigure = [];

canvas.addEventListener("click", function(event) 
{
    if (drawMode) {
        x = event.offsetX;
	    y = event.offsetY;
        if(drawFigure){
            point1 = new Point(point2.x, point2.y);
            point2 = new Point(x, y);
            figure.addPoint(point2);
            drawLine(point1, point2, "#000000", 1);
		}
		if(start){
			if (!flag) {
                point1 = new Point(x, y);
                figure.addPoint(point1);
                point0 = point1;
                flag = true;
            } else {
                point2 = new Point(x, y);
                drawLine(point1, point2, "#000000", 1);
                figure.addPoint(point2);
                flag = false;
				start = false;
				drawFigure = true;
            }
		}
    } 
    else 
    {
        console.log("Not drawing mode");
    } 
});

buttonDraw.addEventListener("click", function(event)
{
    if(buttonDraw.style.backgroundColor == "rgb(78, 87, 84)") {
        buttonDraw.style.backgroundColor = "#A5A5A5";
        drawMode = false; 
        drawLine(point2, point0, "#000000", 1);
        arrFigure.push(figure);
        figure = new Figure();
        Draw();
        drawFigure = false;
        start = true;  
    }      
    else
    {
        buttonDraw.style.backgroundColor = "rgb(78, 87, 84)";
        drawMode = true; 
    }       
})

function drawLine(point1, point2, color, width) {
    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
	ctx.stroke();
    ctx.closePath();
}  

buttonClear.addEventListener("click", function()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawMode = false;
    flag = false;
    start = true;
    drawFigure = false;
    arrFigure = [];   
});

buttonMoveLeft.addEventListener("click", function()
{ 
    let valueMove = document.querySelector('#move-value').value;
    arrFigure[0].moveLeft(valueMove);
    Draw();  
});

buttonMoveRigth.addEventListener("click", function()
{
    let valueMove = document.querySelector('#move-value').value;
    arrFigure[0].moveRigth(valueMove);
    Draw();  
});

buttonMoveTop.addEventListener("click", function()
{
    let valueMove = document.querySelector('#move-value').value;
    arrFigure[0].moveTop(valueMove);
    Draw();  
});

buttonMoveBottom.addEventListener("click", function()
{
    let valueMove = document.querySelector('#move-value').value;
    arrFigure[0].moveBottom(valueMove);
    Draw();  
});

buttonTurnLeft.addEventListener("click", function()
{ 
    arrFigure[0].turnLeft();
    Draw();  
});

buttonTurnRigth.addEventListener("click", function()
{
    arrFigure[0].turnRigth();
    Draw();  
});

buttonScaleMinus.addEventListener("click", function()
{
    let valueScale = document.querySelector('#scale-value').value;
    arrFigure[0].scaleMinus(valueScale);
    Draw();  
});

buttonScalePlus.addEventListener("click", function()
{
    let valueScale = document.querySelector('#scale-value').value;
    arrFigure[0].scalePlus(valueScale);
    Draw();  
});

buttonTab.addEventListener("click", function()
{
    if (arrFigure.length >= 2) {
        let temp = arrFigure[0];
        for(let i = 0; i < (arrFigure.length - 1); i++) {
            arrFigure[i] = arrFigure[i + 1];
        }
        arrFigure[arrFigure.length - 1] = temp;
        Draw(); 
    } 
});

buttonExample1.addEventListener("click", function() {
    arrFigure = [];
    let arrPointsFigure1 = new Figure();
    arrPointsFigure1.addPoint(new Point(232, 366)); 
    arrPointsFigure1.addPoint(new Point(166, 230)); 
    arrPointsFigure1.addPoint(new Point(344, 236)); 
    let arrPointsFigure2 = new Figure();
    arrPointsFigure2.addPoint(new Point(159, 337));
    arrPointsFigure2.addPoint(new Point(265, 199)); 
    arrPointsFigure2.addPoint(new Point(317, 321));
    arrFigure = [ arrPointsFigure1, arrPointsFigure2,
    ];
    Draw();
});

buttonExample2.addEventListener("click", function() {
    arrFigure = [];
    let arrPointsFigure1 = new Figure();
    arrPointsFigure1.addPoint(new Point(205, 290)); 
    arrPointsFigure1.addPoint(new Point(155, 172)); 
    arrPointsFigure1.addPoint(new Point(258, 190)); 
    arrPointsFigure1.addPoint(new Point(340, 253)); 
    arrPointsFigure1.addPoint(new Point(445, 252)); 
    arrPointsFigure1.addPoint(new Point(384, 369)); 
    arrPointsFigure1.addPoint(new Point(273, 378));
    let arrPointsFigure2 = new Figure();
    arrPointsFigure2.addPoint(new Point(177, 334)); 
    arrPointsFigure2.addPoint(new Point(309, 182));
    arrPointsFigure2.addPoint(new Point(374, 318));
    arrFigure = [ arrPointsFigure1, arrPointsFigure2,
    ];
    Draw();
});

buttonExample3.addEventListener("click", function() {
    arrFigure = [];
    let arrPointsFigure1 = new Figure();
    arrPointsFigure1.addPoint(new Point(200, 200)); 
    arrPointsFigure1.addPoint(new Point(250, 120)); 
    arrPointsFigure1.addPoint(new Point(300, 200)); 
    arrPointsFigure1.addPoint(new Point(380, 200)); 
    arrPointsFigure1.addPoint(new Point(320, 270)); 
    arrPointsFigure1.addPoint(new Point(360, 350)); 
    arrPointsFigure1.addPoint(new Point(250, 300)); 
    arrPointsFigure1.addPoint(new Point(140, 350)); 
    arrPointsFigure1.addPoint(new Point(180, 270)); 
    arrPointsFigure1.addPoint(new Point(120, 200));
    let arrPointsFigure2 = new Figure();
    arrPointsFigure2.addPoint(new Point(137, 274)); 
    arrPointsFigure2.addPoint(new Point(192, 146));
    arrPointsFigure2.addPoint(new Point(314, 170));
    arrPointsFigure2.addPoint(new Point(367, 292));
    arrFigure = [ arrPointsFigure1, arrPointsFigure2,
    ];
    Draw();
});

function Draw() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawMode = false;
    flag = false;
    start = true;
    drawFigure = false;
    for (let i = 0; i < arrFigure.length; i++) {
        for(let j = 0; j < arrFigure[i].arrPoints.length; j++) {
            drawLine(arrFigure[i].arrPoints[j], arrFigure[i].arrPoints[(j + 1) % arrFigure[i].arrPoints.length], "#000000", 1);
        }
    }
    if (arrFigure.length >= 2) {
        let wind = triangulate(arrFigure[0]);
        for (let i = 0; i < wind.length; i++) {
            for(let j = 1; j < arrFigure.length; j++) {
                console.log(arrFigure[j]);
                for(let k = 0; k < arrFigure[j].arrPoints.length; k++) 
                {
                    CyrusBeck(wind[i], arrFigure[j].arrPoints[k], arrFigure[j].arrPoints[(k + 1) % arrFigure[j].arrPoints.length]);
                }
            }
        }
    }
};

function CyrusBeck(figure, point1, point2) {
    let ex, ey, ux, uy;
    let pointCut1, pointCut2;
    let D = new Point((point2.x - point1.x), (point2.y - point1.y));  
    let arrNormals = [];
    for (let i = 0; i < figure.arrPoints.length; i++) {
        x = figure.arrPoints[i].y - figure.arrPoints[(i + 1) % figure.arrPoints.length].y;
        y = figure.arrPoints[(i + 1) % figure.arrPoints.length].x - figure.arrPoints[i].x;
        arrNormals.push(new Point(x, y));
    } 
    let t = 0;
    let tB = 0;
    let tT = 1;
    let Dn, W, Wn;
    let skip = false;
    for (let i = 0; i < figure.arrPoints.length; i++) {
        Dn = D.x * arrNormals[i].x + D.y * arrNormals[i].y;
        if (Dn != 0) {
            W = new Point((point1.x - figure.arrPoints[i].x), (point1.y - figure.arrPoints[i].y));
            Wn = W.x * arrNormals[i].x + W.y * arrNormals[i].y;
            t = Wn / - Dn;
            if (Dn > 0) {
                if (t < 1) {
                    tB = Math.max(tB, t);    
                } else {
                    skip = true;
                    break;
                }
            } else {
                if (t > 0) {
                    tT = Math.min(tT, t);    
                } else {
                    skip = true;
                    break;
                }
            }
        } else {
            if (Wn > 0) {
                skip = true;
                break;
            }
        }
    }
    if (tB > tT || skip) {
        return;
    }
    ex = (point2.x - point1.x) * tB + point1.x;
    ey = (point2.y - point1.y) * tB + point1.y;
    pointCut1 = new Point(ex, ey);
    ux = (point2.x - point1.x) * tT + point1.x;
    uy = (point2.y - point1.y) * tT + point1.y;
    pointCut2 = new Point(ux, uy);
    drawLine(pointCut1, pointCut2, "#00ff00", 3);
}


function triangulate (figure) {
    let triangles = [];
    let points = figure.arrPoints.slice(0);
    let length_pr = points.length;
    while (points.length > 3) {
        for (let i = 0; i < points.length; i++) {
            let i1;
            if (i == 0) {
                i1 = points.length - 1;
            } else {
                i1 = i - 1;
            }
            let i2 = i;
            let i3 = (i + 1) % points.length;
            let p = [
                points[i1], points[i2], points[i3],
            ];
            let angle = Math.atan2(p[2].y - p[1].y, p[2].x - p[1].x) - Math.atan2(p[0].y - p[1].y, p[0].x - p[1].x);
            if (Math.abs(angle) >= Math.PI) { 
                continue;
            }
            let figureNew = new Figure();
            figureNew.addPoint(p[0]);
            figureNew.addPoint(p[1]);
            figureNew.addPoint(p[2]); 
            for (let j = 0; j < points.length; j++) {
                if (j == i1 || j == i2 || j == i3) {
                    continue;
                }
                if (isPointInside(figureNew, points[j])) {
                    continue;
                } 
            }
            triangles = triangles.concat(figureNew);
            points.splice(i, 1);
            break;
        }
        if (points.length == length_pr) {
            break;
        } else {
            length_pr = points.length;
        }
    }

    let res_figure = new Figure();
    res_figure.addPoint(points[0]);
    res_figure.addPoint(points[1]);
    res_figure.addPoint(points[2]);
    triangles.push(res_figure);

    return triangles;
}

function isPointInside(figure, point) {
    let x = point.x;
    let y = point.y;
    let inside = false;
    for (let i = 0, j = figure.arrPoints.length - 1; i < figure.arrPoints.length; j = i++) {
        let x1 = figure.arrPoints[i].x;
        let y1 = figure.arrPoints[i].y;
        let x2 = figure.arrPoints[j].x;
        let y2 = figure.arrPoints[j].y;
        let condition = y1 > y != y2 > y && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1;
        if (condition) {
            inside = !inside; 
        } 
    }
    return inside;
}