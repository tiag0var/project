sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.hearts, 500)
    info.changeScoreBy(1)
})
function pearly () {
    for (let index = 0; index < 10; index++) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . c c b b 3 b 3 3 b b c c . . 
            . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
            c d d b 3 3 b 3 3 b 3 3 b d d c 
            f c c c d d c d d c d d c c c f 
            f b 3 c c c b c c b c c c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . c c b b 3 b 3 3 b b c c . . 
            . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
            c d d b 3 3 b 3 3 b 3 3 b d d c 
            f c c c d d c d d c d d c c c f 
            f b 3 c c c b c c b c c c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c 8 9 9 8 c b b f . . 
            . . c c c f 9 3 1 9 f c c c . . 
            . c 3 f f f 9 3 3 9 f f f 3 c . 
            c 3 f f f f 8 9 9 8 f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c c c c c c b b f . . 
            . . c c c f f f f f f c c c . . 
            . c 3 f f f f f f f f f f 3 c . 
            c 3 f f f f f f f f f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnRandomTile(mySprite2, sprites.swamp.swampTile9)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.hearts, 500)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
    game.splash(info.score())
})
function monster (num: number) {
    for (let index = 0; index < num; index++) {
        mySprite = sprites.create(list._pickRandom(), SpriteKind.Enemy)
        mySprite.setPosition(140, 105)
        mySprite.follow(football, 30)
    }
    for (let index = 0; index < 4; index++) {
        mySprite.x = 100
    }
}
function real_player () {
    football = sprites.create(img`
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
    tiles.placeOnRandomTile(football, assets.tile`myTile3`)
    scene.cameraFollowSprite(football)
    controller.moveSprite(football, 70, 70)
}
let football: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let list: Image[] = []
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d3333333333333333333333333
    33333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d33333333333333333333333
    3333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d3333333333333333333333
    3333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d3333333333333333
    333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333
    33333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d3333
    33d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d33
    3111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d3
    11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d
    1111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a111111111911111111
    111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111
    3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a
    a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5
    3a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a35
    55a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a555
    5a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a55
    5a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a53
    a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3
    1111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa11111111111
    111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111
    11111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a11
    111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a3111191111a5555533555555a11
    11a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a3111111111a3555555995555a11
    11a5555555553a111111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa11
    11aa5555555553a11111111aa55555555553a31111aa5555555553a11111111aa55555555553a11111aa5555555553a31111111aa55555555553a11111aa5555555553a11111111aa55555555553a111
    111aa5555555555a111111aa355555555553aa11113aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11
    111aa55555555555a1111aa55555555555553aa1113aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1
    11aa55555555555aaa11a35555555555555555a313aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a1
    11a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553311a555555555553a39aa35555555555555555533
    31a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a55555555555555555399
    3333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a35555555555555553399
    9333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa35555555553999
    93333aaaa55999955993aaaaaaa555553333399993333aaaa55999955993aaaaaaa555553333399993333aaaa55999955993aaaaaaa555553333399993333aaaa55999955993aaaaaaa5555533333999
    999993aaaa5999999999999aaaa55555a9999999999993aaaa5999999999999aaaa55555a9999999999993aaaa5999999999999aaaa55555a9999999999993aaaa5999999999999aaaa55555a9999999
    999933aaaaa3999999999993a3a55553a3999999999933aaaaa3999999999993a3a55553a3999999999933aaaaa3999999999993a3a55553a3999999999933aaaaa3999999999993a3a55553a3999999
    999333aaaaa3399999999993a335555a33399999999333aaaaa3399999999993a335555a33399999999333aaaaa3399999999993a335555a33399999999333aaaaa3399999999993a335555a33399999
    99333aaaaaa3399999999333a3335533aa33999999333aaaaaa3399999999333a3335533aa33999999333aaaaaa3399999999333a3335533aa33999999333aaaaaa3399999999333a3335533aa339999
    9933aaaaaaa399999999933aaa33333aaa3399999933aaaaaaa399999999933aaa33333aaa3399999933aaaaaaa399999999933aaa33333aaa3399999933aaaaaaa399999999933aaa33333aaa339999
    9993aaaaaaa39993399993aaaaaa33aaaa3999339993aaaaaaa39993399993aaaaaa33aaaa3999339993aaaaaaa39993399993aaaaaa33aaaa3999339993aaaaaaa39993399993aaaaaa33aaaa399933
    3993aaaaaaa39933339993aaaaaaaaaaaa3993333993aaaaaaa39933339993aaaaaaaaaaaa3993333993aaaaaaa39933339993aaaaaaaaaaaa3993333993aaaaaaa39933339993aaaaaaaaaaaa399333
    3333aaaaaaa33333333993aaaaaaaaaaaa3333aa3333aaaaaaa33333333993aaaaaaaaaaaa3333aa3333aaaaaaa33333333993aaaaaaaaaaaa3333aa3333aaaaaaa33333333993aaaaaaaaaaaa3333aa
    3333aaaaaaa333aaa33333aaaaaaaaaaaa333aaa3333aaaaaaa333aaa33333aaaaaaaaaaaa333aaa3333aaaaaaa333aaa33333aaaaaaaaaaaa333aaa3333aaaaaaa333aaa33333aaaaaaaaaaaa333aaa
    aaaaaaaaaaaaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
game.showLongText("welcome to gather the pearls", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level`)
real_player()
info.setScore(0)
info.setLife(3)
pearly()
list = [
img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `,
img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `,
img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111df.......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd1dfbddddbf......
    ......fbddfcdbbbcf......
    .......f11111bbcf.......
    .......f1b1fffff........
    .......fbfc111bf........
    ........ff1b1bff........
    .........fbfbfff.f......
    ..........ffffffff......
    ............fffff.......
    ........................
    ........................
    ........................
    ........................
    `,
img`
    ....................ccfff...........
    ..........fffffffffcbbbbf...........
    .........fbbbbbbbbbfffbf............
    .........fbb111bffbbbbff............
    .........fb11111ffbbbbbcff..........
    .........f1cccc11bbcbcbcccf.........
    ..........fc1c1c1bbbcbcbcccf...ccccc
    ............c3331bbbcbcbccccfccddbbc
    ...........c333c1bbbbbbbcccccbddbcc.
    ...........c331c11bbbbbcccccccbbcc..
    ..........cc13c111bbbbccccccffbccf..
    ..........c111111cbbbcccccbbc.fccf..
    ...........cc1111cbbbfdddddc..fbbcf.
    .............cccffbdbbfdddc....fbbf.
    ..................fbdbbfcc......fbbf
    ...................fffff.........fff
    `
]
monster(4)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        football,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 e . . . . 
            . . . . . 2 2 2 2 d 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 e f f c c . 
            . . . . e e 2 2 e f f f f b c . 
            . . . e e e f e e f f f f d c . 
            . . e e 2 2 d f c b 4 4 c b c . 
            . . e e 2 2 b c 4 1 1 4 c . . . 
            . . b 1 1 b e c 4 4 4 4 c . . . 
            . . f f f f d d 4 4 4 b c . . . 
            f f f f f f d d c c c c . . . . 
            f f f . f f f f c c c . . . . . 
            f f . . . . e e e . . . . . . . 
            . . . . . . e e e e . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 e . . . . 
            . . . . . 2 2 2 2 d 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 e f f c c . 
            . . . . e e 2 2 e f f f f b c . 
            . . e e e f e e f f f f f d c . 
            . e e 2 2 d f c b 4 4 c 1 b c . 
            . e e 2 2 b c 4 1 1 4 c c . . . 
            . b 1 1 b e c 4 4 4 4 c . . . . 
            . . f f f d d 4 4 4 b c d . . . 
            e e f f f d d c c c c d d . . . 
            e e e f f f f c c c . . . . . . 
            e e . . . . f f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 2 2 e . . . 
            . . . . . . 2 2 2 2 d 2 2 e . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . . . e 2 2 2 2 2 e f f c c 
            . . . . . e e 2 2 e f f f f b c 
            . . . e e e f e 2 2 e f f f d c 
            . . e e 2 2 d f e 2 c b 4 4 c c 
            . . e e 2 2 d f e c 4 1 1 4 c . 
            . . b 1 1 d e e e c 4 4 4 4 c . 
            . . . f f f f f d d 4 4 4 b c . 
            . . . . f f f f d d c c c c . . 
            . . . . . f f f f f c c c . . . 
            . . . . e e e f f . . . . . . . 
            . . . . e e e e f f . . . . . . 
            `],
        100,
        true
        )
        football.setImage(img`
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
            `)
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        football,
        [img`
            . . . . . . e 2 2 2 2 2 . . . . 
            . . . . . e 2 2 d 2 2 2 2 . . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . c c f f e 2 2 2 2 2 e . . 
            . . . c b f f f f e 2 2 e e . . 
            . . . c d f f f b 2 e f e e e . 
            . . . c b f f f e 2 f d 2 2 e e 
            . . . . c 4 4 b c e f d 2 2 e e 
            . . . . c 4 1 1 4 c e e d 1 1 b 
            . . . . c 4 4 4 4 e e e e f f . 
            . . . . c b 4 4 4 e d d f f . . 
            . . . . d c c c c e d d f f . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . e e e f f f . . 
            . . . . . . . e e e f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . e 2 2 2 2 2 . . . . . . 
            . . . e 2 2 d 2 2 2 2 . . . . . 
            . . . e 2 2 2 2 2 2 2 e . . . . 
            . . . e 2 2 2 2 2 2 2 e . . . . 
            . c c f f e 2 2 2 2 2 e . . . . 
            . c b f f f f e 2 2 e e . . . . 
            . c d f f f f e e f e e e . . . 
            . c b c 4 4 b c f d 2 2 e e . . 
            . . . c 4 1 1 4 c b 2 2 e e . . 
            . . . c 4 4 4 4 c e b 1 1 b . . 
            . . . c b 4 4 4 d d f f f f . . 
            . . . . c c c c d d f f f f f f 
            . . . . . c c c f f f f . f f f 
            . . . . . . . e e e . . . . f f 
            . . . . . . e e e e . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . e 2 2 2 2 2 . . . . . . 
            . . . e 2 2 d 2 2 2 2 . . . . . 
            . . . e 2 2 2 2 2 2 2 e . . . . 
            . . . e 2 2 2 2 2 2 2 e . . . . 
            . c c f f e 2 2 2 2 2 e . . . . 
            . c b f f f f e 2 2 e e . . . . 
            . c d f f f f f e e f e e e . . 
            . c b 1 c 4 4 b c f d 2 2 e e . 
            . . . c c 4 1 1 4 c b 2 2 e e . 
            . . . . c 4 4 4 4 c e b 1 1 b . 
            . . . d c b 4 4 4 d d f f f . . 
            . . . d d c c c c d d f f f e e 
            . . . . . . c c c f f f f e e e 
            . . . . . . . f f f . . . . e e 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . e 2 2 2 2 2 . . . . . . . 
            . . e 2 2 d 2 2 2 2 . . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            c c f f e 2 2 2 2 2 e . . . . . 
            c b f f f f e 2 2 e e . . . . . 
            c d f f f e 2 2 e f e e e . . . 
            c c 4 4 b c 2 e f d 2 2 e e . . 
            . c 4 1 1 4 c e f d 2 2 e e . . 
            . c 4 4 4 4 c e e e d 1 1 b . . 
            . c b 4 4 4 d d f f f f f . . . 
            . . c c c c d d f f f f . . . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . f f e e e . . . . 
            . . . . . . f f e e e e . . . . 
            `],
        100,
        true
        )
        football.setImage(img`
            . . . . . . e 2 2 2 2 2 . . . . 
            . . . . . e 2 2 d 2 2 2 2 . . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . c c f f e 2 2 2 2 2 e . . 
            . . . c b f f f f e 2 2 e e . . 
            . . . c d f f f b 2 e f e e e . 
            . . . c b f f f e 2 f d 2 2 e e 
            . . . . c 4 4 b c e f d 2 2 e e 
            . . . . c 4 1 1 4 c e e d 1 1 b 
            . . . . c 4 4 4 4 e e e e f f . 
            . . . . c b 4 4 4 e d d f f . . 
            . . . . d c c c c e d d f f . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . e e e f f f . . 
            . . . . . . . e e e f f f f . . 
            `)
    }
})
