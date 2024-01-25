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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 100)
    footballer = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 e f f f b c . . . 
        e e 2 2 d f e c b 4 4 c . . . . 
        b 1 1 d e e c 4 1 1 4 c . . . . 
        . f f e e e e 4 4 4 4 c . . . . 
        . . f f d d e 4 4 4 b c . . . . 
        . . f f d d e c c c c d . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f e e e . . . . . . . . 
        . . f f f f e e e . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    footballer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
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
}
let football: Sprite = null
let footballer: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
player_1()
player_2()
player_3()
real_player()
