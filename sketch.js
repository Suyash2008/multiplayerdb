var ball;
var ball2
var database;
var Position;
var Position2;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "blue";
    var ballRef = database.ref('ball/position');
    ballRef.on("value",readPosition);
    var ball2Ref = database.ref('ball2/position');
    ball2Ref.on("value",readPosition2);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    if(keyDown("a")){
        changePosition2(-1,0);
    }
    else if(keyDown("d")){
        changePosition2(1,0);
    }
    else if(keyDown("w")){
        changePosition2(0,-1);
    }
    else if(keyDown("s")){
        changePosition2(0,+1);
    }
    
    if(keyDown("q")){
        text("player1 Online",100,20)}
        if(keyDown("e")){
            text("player2 Online",100,40)}
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').update({x:Position.x +x,y:Position.y +y})
}

function readPosition(data){
    Position = data.val();
    ball.x = Position.x;
    ball.y = Position.y;
}
function changePosition2(x,y){
    database.ref('ball2/position').update({x:Position2.x +x,y:Position2.y +y})
}
function readPosition2(data){
    Position2 = data.val();
    ball2.x = Position2.x;
    ball2.y = Position2.y;
}


    
    