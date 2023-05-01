var lamp, aladinBackground, genie
var score = 0
var invisbleGround


function preload() {
    aladinBackgroundImg = loadImage("background.png")
    genieImg = loadImage("genie.png")
    lampImg = loadImage("lamp.png")

}

function setup() {
    createCanvas(400, 400)
    background("blue")

    text("Score: " + score, 500, 50);

    genie = createSprite(10, 390, 20, 20)
    genie.addImage("floating", genieImg)
    scale = 0.1
    genie.velocityX = 5

    lamp = createSprite(200, 200, 10, 10)
    lamp.addImage("lamp", lampImg)
    scale = 0.1
    lamp.velocityX = 5

    invisbleGround = createSprite(200, 350, 400, 10)
    invisibleGround.visible = false
    aladinBackground.velocityX = 5

    genie.setCollider("circle", 0, 0, 40);
    genie.debug = true
    score = 0



    aladinBackground = createSprite(200, 180, 400, 20);
    aladinBackground.addImage("ground", groundImage);
    aladinBackground.x = width / 2;


}

function draw() {

    if (aladinBackground.x < 0) {
        aladinBackground.x = width / 2
    }
    if (keyDown("space") && genie.y >= 100) {
        genie.velocityY = -13;
    }
    if (gameState === PLAY) {

        aladinBackground.velocityX = -4;

        score = score + Math.round(frameCount / 60);
    } else if (gameState === END) {
        aladinBackground.velocityX = 0;
    
        lamp.setVelocityX(0);
        trex.changeAnimation("collided", trex_collided)
        lamp.setLifetimeEach(-1)

        genie.velocityY = 0

    }

    if (aladinBackground.x < 0) {
        aladinBackground.x = aladinBackground.width / 2;
    }

    genie.velocityY = genie.velocityY + 0.8
    genie.collide(invisibleGround);




    drawSprites();
    createEdgeSprites();


}