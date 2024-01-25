function player_1 () {
    mySprite = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.Projectile)
    animation.runImageAnimation(
    mySprite,
    assets.animation`footballPlayerRight`,
    500,
    true
    )
    mySprite.setPosition(5, 130)
}
function real_control (bool: boolean) {
	
}
function player_2 () {
    mySprite = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.Projectile)
    animation.runImageAnimation(
    mySprite,
    assets.animation`footballPlayerRight`,
    500,
    true
    )
    mySprite.setPosition(5, 100)
}
function player_3 () {
    mySprite = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.Projectile)
    animation.runImageAnimation(
    mySprite,
    assets.animation`footballPlayerRight`,
    500,
    true
    )
    mySprite.setPosition(5, 70)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
function real_player () {
    football = sprites.create(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 d 4 4 4 6 . . 
        . 6 d 4 4 4 4 d 6 . 
        . c 1 b 4 4 4 d c . 
        . . c b 1 1 4 c . . 
        . . . c c c c . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(football, assets.tile`myTile3`)
    scene.cameraFollowSprite(football)
    controller.moveSprite(football)
}
let football: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
real_player()
player_1()
player_2()
player_3()
