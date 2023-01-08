controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Arrow = sprites.createProjectileFromSprite(assets.image`Arrow right`, Steve, 100, 3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Steve.destroy(effects.bubbles, 200)
    pause(200)
    Steve = sprites.create(assets.image`Steve`, SpriteKind.Player)
    Steve.setPosition(7, 104)
    controller.moveSprite(Steve, 50, 50)
    Steve.setStayInScreen(true)
    Zombie.follow(Steve, 10)
})
let Arrow: Sprite = null
let Zombie: Sprite = null
let Steve: Sprite = null
scene.setBackgroundImage(assets.image`Overworld`)
Steve = sprites.create(assets.image`Steve`, SpriteKind.Player)
Zombie = sprites.create(assets.image`Zombie`, SpriteKind.Enemy)
Steve.setPosition(7, 104)
Zombie.setPosition(148, 6)
controller.moveSprite(Steve, 50, 50)
Steve.setStayInScreen(true)
Zombie.follow(Steve, 10)
