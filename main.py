def spawn_enemies(num: number):
    global ememy
    for index in range(num):
        ememy = sprites.create(myEnemy._pick_random(), SpriteKind.enemy)
        ememy.set_position(140, 105)
    ememy.x += 100
def real_player():
    global football
    football = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e 4 d d d d f . . . 
                    . . . . 4 d d e 4 4 4 e f . . . 
                    . . . . e d d e 2 2 2 2 f . . . 
                    . . . . f e e f 4 4 5 5 f f . . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . f f . . . f f f . . .
        """),
        SpriteKind.player)
    tiles.place_on_random_tile(football, assets.tile("""
        myTile3
    """))
    scene.camera_follow_sprite(football)
    controller.move_sprite(football)
def welcome():
    scene.set_background_image(img("""
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
    """))
    game.show_long_text("welcome to escape the danger  ", DialogLayout.BOTTOM)
football: Sprite = None
ememy: Sprite = None
myEnemy: List[Image] = []
welcome()
tiles.set_current_tilemap(tilemap("""
    level
"""))
real_player()
myEnemy = [img("""
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
    """),
    img("""
        . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b e e 4 4 4 4 4 f b b f . 
            . . f 4 4 4 e d d d b f e f . . 
            . . f e 4 4 e d d d d c 4 e . . 
            . . . f e e d d b d b b f e . . 
            . . . f f 1 d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . .
    """),
    img("""
        ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
    """)]
spawn_enemies(3)

def on_on_update():
    pass
game.on_update(on_on_update)

def on_on_update2():
    if controller.right.is_pressed():
        football.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . 4 d d e 4 4 4 e f . . . 
                        . . . . e d d e 2 2 2 2 f . . . 
                        . . . . f e e f 4 4 5 5 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
        """))
        animation.run_image_animation(football,
            [img("""
                    . . . . . . f f f f f f . . . . 
                                . . . . f f e e e e f 2 f . . . 
                                . . . f f e e e e f 2 2 2 f . . 
                                . . . f e e e f f e e e e f . . 
                                . . . f f f f e e 2 2 2 2 e f . 
                                . . . f e 2 2 2 f f f f e 2 f . 
                                . . f f f f f f f e e e f f f . 
                                . . f f e 4 4 e b f 4 4 e e f . 
                                . . f e e 4 d 4 1 f d d e f . . 
                                . . . f e e e 4 d d d d f . . . 
                                . . . . f f e e 4 4 4 e f . . . 
                                . . . . . 4 d d e 2 2 2 f . . . 
                                . . . . . e d d e 2 2 2 f . . . 
                                . . . . . f e e f 4 5 5 f . . . 
                                . . . . . . f f f f f f . . . . 
                                . . . . . . . f f f . . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f f f . . . . 
                                . . . . f f e e e e f 2 f . . . 
                                . . . f f e e e e f 2 2 2 f . . 
                                . . . f e e e f f e e e e f . . 
                                . . . f f f f e e 2 2 2 2 e f . 
                                . . . f e 2 2 2 f f f f e 2 f . 
                                . . f f f f f f f e e e f f f . 
                                . . f f e 4 4 e b f 4 4 e e f . 
                                . . f e e 4 d 4 1 f d d e f . . 
                                . . . f e e e e e d d d f . . . 
                                . . . . . f 4 d d e 4 e f . . . 
                                . . . . . f e d d e 2 2 f . . . 
                                . . . . f f f e e f 5 5 f f . . 
                                . . . . f f f f f f f f f f . . 
                                . . . . . f f . . . f f f . . .
                """),
                img("""
                    . . . . . . f f f f f f . . . . 
                                . . . . f f e e e e f 2 f . . . 
                                . . . f f e e e e f 2 2 2 f . . 
                                . . . f e e e f f e e e e f . . 
                                . . . f f f f e e 2 2 2 2 e f . 
                                . . . f e 2 2 2 f f f f e 2 f . 
                                . . f f f f f f f e e e f f f . 
                                . . f f e 4 4 e b f 4 4 e e f . 
                                . . f e e 4 d 4 1 f d d e f . . 
                                . . . f e e e 4 d d d d f . . . 
                                . . . . f f e e 4 4 4 e f . . . 
                                . . . . . 4 d d e 2 2 2 f . . . 
                                . . . . . e d d e 2 2 2 f . . . 
                                . . . . . f e e f 4 5 5 f . . . 
                                . . . . . . f f f f f f . . . . 
                                . . . . . . . f f f . . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f f f . . . . 
                                . . . . f f e e e e f 2 f . . . 
                                . . . f f e e e e f 2 2 2 f . . 
                                . . . f e e e f f e e e e f . . 
                                . . . f f f f e e 2 2 2 2 e f . 
                                . . . f e 2 2 2 f f f f e 2 f . 
                                . . f f f f f f f e e e f f f . 
                                . . f f e 4 4 e b f 4 4 e e f . 
                                . . f e e 4 d 4 1 f d d e f . . 
                                . . . f e e e 4 d d d d f . . . 
                                . . . . 4 d d e 4 4 4 e f . . . 
                                . . . . e d d e 2 2 2 2 f . . . 
                                . . . . f e e f 4 4 5 5 f f . . 
                                . . . . f f f f f f f f f f . . 
                                . . . . . f f . . . f f f . . .
                """)],
            100,
            True)
    if controller.up.is_pressed():
        football.set_image(img("""
            . . . . . . f f f f . . . . . . 
                        . . . . f f e e e e f f . . . . 
                        . . . f e e e f f e e e f . . . 
                        . . f f f f f 2 2 f f f f f . . 
                        . . f f e 2 e 2 2 e 2 e f f . . 
                        . . f e 2 f 2 f f 2 f 2 e f . . 
                        . . f f f 2 2 e e 2 2 f f f . . 
                        . f f e f 2 f e e f 2 f e f f . 
                        . f e e f f e e e e f e e e f . 
                        . . f e e e e e e e e e e f . . 
                        . . . f e e e e e e e e f . . . 
                        . . e 4 f f f f f f f f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . .
        """))
        animation.run_image_animation(football,
            [img("""
                    . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . f f f f f 2 2 f f f f f . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f 2 f 2 e f . . 
                                . . f f f 2 2 e e 2 2 f f f . . 
                                . f f e f 2 f e e f 2 f e f f . 
                                . f e e f f e e e e f e e e f . 
                                . . f e e e e e e e e e e f . . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . . f f f f 2 2 f f f f . . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f f 2 f e f . . 
                                . . f f f 2 f e e 2 2 f f f . . 
                                . . f e 2 f f e e 2 f e e f . . 
                                . f f e f f e e e f e e e f f . 
                                . f f e e e e e e e e e e f f . 
                                . . . f e e e e e e e e f . . . 
                                . . . e f f f f f f f f 4 e . . 
                                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                                . . . e f f f f f f e e 4 . . . 
                                . . . . f f f . . . . . . . . .
                """),
                img("""
                    . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . f f f f f 2 2 f f f f f . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f 2 f 2 e f . . 
                                . . f f f 2 2 e e 2 2 f f f . . 
                                . f f e f 2 f e e f 2 f e f f . 
                                . f e e f f e e e e f e e e f . 
                                . . f e e e e e e e e e e f . . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . . f f f f 2 2 f f f f . . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e f 2 f f f 2 f 2 e f . . 
                                . . f f f 2 2 e e f 2 f f f . . 
                                . . f e e f 2 e e f f 2 e f . . 
                                . f f e e e f e e e f f e f f . 
                                . f f e e e e e e e e e e f f . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f e . . . 
                                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                                . . . 4 e e f f f f f f e . . . 
                                . . . . . . . . . f f f . . . .
                """)],
            100,
            True)
    if controller.left.is_pressed():
        football.set_image(img("""
            . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e e f f . . . . 
                        . . . f 2 2 2 e d d 4 . . . . . 
                        . . . f 2 2 2 e d d e . . . . . 
                        . . . f 5 5 4 f e e f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . .
        """))
        animation.run_image_animation(football,
            [img("""
                    . . . . f f f f f f . . . . . . 
                                . . . f 2 f e e e e f f . . . . 
                                . . f 2 2 2 f e e e e f f . . . 
                                . . f e e e e f f e e e f . . . 
                                . f e 2 2 2 2 e e f f f f . . . 
                                . f 2 e f f f f 2 2 2 e f . . . 
                                . f f f e e e f f f f f f f . . 
                                . f e e 4 4 f b e 4 4 e f f . . 
                                . . f e d d f 1 4 d 4 e e f . . 
                                . . . f d d d d 4 e e e f . . . 
                                . . . f e 4 4 4 e e f f . . . . 
                                . . . f 2 2 2 e d d 4 . . . . . 
                                . . . f 2 2 2 e d d e . . . . . 
                                . . . f 5 5 4 f e e f . . . . . 
                                . . . . f f f f f f . . . . . . 
                                . . . . . . f f f . . . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . f f f f f f . . . . . . 
                                . . . f 2 f e e e e f f . . . . 
                                . . f 2 2 2 f e e e e f f . . . 
                                . . f e e e e f f e e e f . . . 
                                . f e 2 2 2 2 e e f f f f . . . 
                                . f 2 e f f f f 2 2 2 e f . . . 
                                . f f f e e e f f f f f f f . . 
                                . f e e 4 4 f b e 4 4 e f f . . 
                                . . f e d d f 1 4 d 4 e e f . . 
                                . . . f d d d e e e e e f . . . 
                                . . . f e 4 e d d 4 f . . . . . 
                                . . . f 2 2 e d d e f . . . . . 
                                . . f f 5 5 f e e f f f . . . . 
                                . . f f f f f f f f f f . . . . 
                                . . . f f f . . . f f . . . . .
                """),
                img("""
                    . . . . f f f f f f . . . . . . 
                                . . . f 2 f e e e e f f . . . . 
                                . . f 2 2 2 f e e e e f f . . . 
                                . . f e e e e f f e e e f . . . 
                                . f e 2 2 2 2 e e f f f f . . . 
                                . f 2 e f f f f 2 2 2 e f . . . 
                                . f f f e e e f f f f f f f . . 
                                . f e e 4 4 f b e 4 4 e f f . . 
                                . . f e d d f 1 4 d 4 e e f . . 
                                . . . f d d d d 4 e e e f . . . 
                                . . . f e 4 4 4 e e f f . . . . 
                                . . . f 2 2 2 e d d 4 . . . . . 
                                . . . f 2 2 2 e d d e . . . . . 
                                . . . f 5 5 4 f e e f . . . . . 
                                . . . . f f f f f f . . . . . . 
                                . . . . . . f f f . . . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . f f f f f f . . . . . . 
                                . . . f 2 f e e e e f f . . . . 
                                . . f 2 2 2 f e e e e f f . . . 
                                . . f e e e e f f e e e f . . . 
                                . f e 2 2 2 2 e e f f f f . . . 
                                . f 2 e f f f f 2 2 2 e f . . . 
                                . f f f e e e f f f f f f f . . 
                                . f e e 4 4 f b e 4 4 e f f . . 
                                . . f e d d f 1 4 d 4 e e f . . 
                                . . . f d d d d 4 e e e f . . . 
                                . . . f e 4 4 4 e d d 4 . . . . 
                                . . . f 2 2 2 2 e d d e . . . . 
                                . . f f 5 5 4 4 f e e f . . . . 
                                . . f f f f f f f f f f . . . . 
                                . . . f f f . . . f f . . . . .
                """)],
            100,
            True)
    if controller.down.is_pressed():
        football.set_image(img("""
            . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . .
        """))
        animation.run_image_animation(football,
            [img("""
                    . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f f e 2 2 2 2 2 2 e e f . . 
                                . . f e 2 f f f f f f 2 e f . . 
                                . . f f f f e e e e f f f f . . 
                                . f f e f b f 4 4 f b f e f f . 
                                . f e e 4 1 f d d f 1 4 e e f . 
                                . . f e e d d d d d d e e f . . 
                                . . . f e e 4 4 4 4 e e f . . . 
                                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f f e 2 2 2 2 2 2 e e f . . 
                                . f f e 2 f f f f f f 2 e f f . 
                                . f f f f f e e e e f f f f f . 
                                . . f e f b f 4 4 f b f e f . . 
                                . . f e 4 1 f d d f 1 4 e f . . 
                                . . . f e 4 d d d d 4 e f e . . 
                                . . f e f 2 2 2 2 e d d 4 e . . 
                                . . e 4 f 2 2 2 2 e d d e . . . 
                                . . . . f 4 4 5 5 f e e . . . . 
                                . . . . f f f f f f f . . . . . 
                                . . . . f f f . . . . . . . . .
                """),
                img("""
                    . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f f e 2 2 2 2 2 2 e e f . . 
                                . . f e 2 f f f f f f 2 e f . . 
                                . . f f f f e e e e f f f f . . 
                                . f f e f b f 4 4 f b f e f f . 
                                . f e e 4 1 f d d f 1 4 e e f . 
                                . . f e e d d d d d d e e f . . 
                                . . . f e e 4 4 4 4 e e f . . . 
                                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . .
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f e e 2 2 2 2 2 2 e f f . . 
                                . f f e 2 f f f f f f 2 e f f . 
                                . f f f f f e e e e f f f f f . 
                                . . f e f b f 4 4 f b f e f . . 
                                . . f e 4 1 f d d f 1 4 e f . . 
                                . . e f e 4 d d d d 4 e f . . . 
                                . . e 4 d d e 2 2 2 2 f e f . . 
                                . . . e d d e 2 2 2 2 f 4 e . . 
                                . . . . e e f 5 5 4 4 f . . . . 
                                . . . . . f f f f f f f . . . . 
                                . . . . . . . . . f f f . . . .
                """)],
            100,
            True)
game.on_update(on_on_update2)
