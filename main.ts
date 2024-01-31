controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Arrow = sprites.createProjectileFromSprite(assets.image`Arrow right`, Steve, 100, 3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Steve.destroy(effects.bubbles, 200)
    pause(200)
    Steve = sprites.create(assets.image`DoomGuy`, SpriteKind.Player)
    controller.moveSprite(Steve, 50, 50)
    Steve.setStayInScreen(true)
    Zombie.follow(Steve, 10)
    Steve.setPosition(7, 104)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy(effects.fire, 100)
    Kills += 1
    if (Kills < MobsUntilBoss) {
        Zombie = sprites.create(assets.image`Zombie`, SpriteKind.Enemy)
        Zombie.setPosition(148, 6)
        Zombie.follow(Steve, 30)
    } else {
        Boss_Overworld = sprites.create(assets.image`Boss Overworld`, SpriteKind.Enemy)
        Boss_Overworld.setPosition(148, 6)
        Boss_Overworld.follow(Steve, 40)
    }
})
let Boss_Overworld: Sprite = null
let Arrow: Sprite = null
let Zombie: Sprite = null
let Steve: Sprite = null
let Kills = 0
let MobsUntilBoss = 0
music.play(music.createSong(hex`00780004081100`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`Overworld`)
MobsUntilBoss = 15
Kills = 0
Steve = sprites.create(assets.image`DoomGuy`, SpriteKind.Player)
Steve.setPosition(7, 104)
controller.moveSprite(Steve, 50, 50)
Steve.setStayInScreen(true)
Zombie = sprites.create(assets.image`Zombie`, SpriteKind.Enemy)
Zombie.setPosition(148, 6)
Zombie.follow(Steve, 30)
