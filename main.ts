controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    player2.setImage(img`
        ........................
        ........................
        ...cccc.................
        ...c9cccc...............
        ...c9999cccc............
        ...cc9999999ccccccc.....
        ....ccc999999999999cc...
        ...cccccc999999999999c..
        ...c9999cc9999c9999999c.
        ...c99999999999cc999999c
        ....ccc9999999999c99c99c
        ....c99c999999999999999c
        ....c9999999999cccccccc.
        ....cc999999999cbb1bc9c.
        ....cc999999999cbbbbc9c.
        .c..c9999999999ccbbbc9c.
        c9c.c99999c99cc9cbbbc9c.
        c99c999999c999ccccbbc9c.
        c999999999cc9999ccccc9c.
        cc999999699ccc99c9999c..
        .cc99996666699ccc6ccc...
        ...cc666c66666cc666c....
        .....cccc669996ccccc....
        ........cccccccc........
        `)
    pause(100)
    if (info.player1.hasLife()) {
        dart2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 500, 0)
    }
    pause(0)
    player2.setImage(img`
        ........................
        ......ccccc.............
        .....cc999cc............
        .....c99999cc...........
        .....cc99999ccccccc.....
        ......c99999c999999cc...
        ..ccccccc999999999999c..
        ..c9999c99999999999999c.
        ..c999999999999ff199999c
        ..cc999999999999ff99f99c
        ...ccccc999999999999999c
        ...cccc999999999cc1cccc.
        ...c9999999999999cbbc9c.
        ...ccc999999999999ccc9c.
        ....c99999c99cc9999999c.
        ....c99999cc99cccccccc..
        ...cc999999c9999ccc9c...
        cccc69999999c699cccc....
        c9999999999999cc66c.....
        .c999999699999666cc.....
        ..cc9996669999c6c9c.....
        ....cc66c69999cc999cc...
        ......ccc999996cccccc...
        ........cccccccc........
        `)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player2.setImage(img`
        ........................
        ......ccccc.............
        .....cc999cc............
        .....c99999cc...........
        .....cc99999ccccccc.....
        ......c99999c999999cc...
        ..ccccccc999999999999c..
        ..c9999c99999999999999c.
        ..c999999999999ff199999c
        ..cc999999999999ff99f99c
        ...ccccc999999999999999c
        ...cccc999999999cc1cccc.
        ...c9999999999999cbbc9c.
        ...ccc999999999999ccc9c.
        ....c99999c99cc9999999c.
        ....c99999cc99cccccccc..
        ...cc999999c9999ccc9c...
        cccc69999999c699cccc....
        c9999999999999cc66c.....
        .c999999699999666cc.....
        ..cc9996669999c6c9c.....
        ....cc66c69999cc999cc...
        ......ccc999996cccccc...
        ........cccccccc........
        `)
})
info.onScore(100, function () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff555555ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff555555ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff555555fffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55555ffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55555ffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555555ffffffffffffffffffffff555555ffffffffffff55555fffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555555ffffffffffffffffffffff55555fffffffffffff55555fffffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555555ffffffffffffffffffffff55555fffffffffffff55555fffffffffffffffffffffff555555555555555555555555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555555ffffffffffffffffffffff55555fffffffffffff55555fffffffffffffffffffffff555555555555555555555555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555fffffffffffffffffffffff55555fffffffffffff55555fffffffffffffffffffffff555555555555555ff55555555ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555fffffffff555555ffffffff55555fffffffffffff55555fffffffffffffffffffffff555555555555ffffff55555555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555fffffffff555555fffffff555555fffffffffffff55555fffffffffffffffffffffff5555555555fffffffff5555555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffff5555555fffffff555555fffffffffffff55555fffffffffffffffffffffff5555555555fffffffff5555555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffff5555555fffffff555555fffffffffffff55555fffffffffffffffffffffff555555555fffffffffff555555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffff55555555ffffff555555fffffffffffff55555fffffffffffffffffffffff55555555fffffffffffff555555ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555fffffff555555555fffff555555ffffffffffffff55555ffffffffffffffffffffff55555555ffffffffffffff555555ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffff5555555555fffff555555ffffffffffffff55555ffffffffffffffffffffff55555555ffffffffffffff555555ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffff55555555555fff5555555ffffffffffffff55555ffffffffffffffffffffff55555555ffffffffffffff555555ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555fffff555555555555fff5555555ffffffffffffff55555ffffffffffffffffffffff55555555fffffffffffffff55555ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffff55555555555555ff555555fffffffffffffff55555ffffffffffffffffffffff5555555ffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffff55555555555555f5555555fffffffffffffff55555ffffffffffffffffffffff5555555ffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555fff55555555f5555555555555ffffffffffffffff55555ffffffffffffffffffffff5555555ffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555555555555555ff5555555555555ffffffffffffffff555555fffffffffffffffffffff5555555ffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555555555555ffff555555555555ffffffffffffffff555555fffffffffffffffffffff555555ffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555555555555ffff55555555555fffffffffffffffff555555fffffffffffffffffffff555555ffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff5555555555555ffffff5555555555fffffffffffffffff555555fffffffffffffffffffff555555ffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55555555555fffffffff555555ffffffffffffffffffff55555fffffffffffffffffffff555555ffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffff555555ffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffff555555fffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffff555555fffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffff555555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffff55555fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff55555555ffffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff555555555ffffffffffffffffffff5555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff555555555555ffffffffffffff55555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff5555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.gameOver(true)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        ........................
        ......ccccc.............
        .....cc333cc............
        .....c33333cc...........
        .....cc33333ccccccc.....
        ......c33333c333333cc...
        ..ccccccc333333333333c..
        ..c3333c33333333333333c.
        ..c333333333333ff133333c
        ..cc333333333333ff33f33c
        ...ccccc333333333333333c
        ...cccc333333333cc1cccc.
        ...c3333333333333cbbc3c.
        ...ccc333333333333ccc3c.
        ....c33333c33cc3333333c.
        ....c33333cc33cccccccc..
        ...cc333333c3333ccc3c...
        ccccb3333333cb33cccc....
        c3333333333333ccbbc.....
        .c333333b33333bbbcc.....
        ..cc333bbb3333cbc3c.....
        ....ccbbcb3333cc333cc...
        ......ccc33333dcccccc...
        ........cccccccc........
        `)
})
info.player1.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player2.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.over(false)
    } else {
        player1.destroy()
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    player1.setImage(img`
        ........................
        ........................
        ...cccc.................
        ...c3cccc...............
        ...c3333cccc............
        ...cc3333333ccccccc.....
        ....ccc333333333333cc...
        ...cccccc333333333333c..
        ...c3333cc3333c3333333c.
        ...c33333333333cc333333c
        ....ccc3333333333c33c33c
        ....c33c333333333333333c
        ....c3333333333cccccccc.
        ....cc333333333cbb1bc3c.
        ....cc333333333cbbbbc3c.
        .c..c3333333333ccbbbc3c.
        c3c.c33333c33cc3cbbbc3c.
        c33c333333c333ccccbbc3c.
        c333333333cc3333ccccc3c.
        cc333333b33ccc33c3333c..
        .cc3333bbbdd33cccbccc...
        ...ccbbbcbddddccdddc....
        .....ccccdd333dccccc....
        ........cccccccc........
        `)
    pause(100)
    if (info.player1.hasLife()) {
        dart1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player1, 500, 0)
    }
    pause(0)
    player1.setImage(img`
        ........................
        ......ccccc.............
        .....cc333cc............
        .....c33333cc...........
        .....cc33333ccccccc.....
        ......c33333c333333cc...
        ..ccccccc333333333333c..
        ..c3333c33333333333333c.
        ..c333333333333ff133333c
        ..cc333333333333ff33f33c
        ...ccccc333333333333333c
        ...cccc333333333cc1cccc.
        ...c3333333333333cbbc3c.
        ...ccc333333333333ccc3c.
        ....c33333c33cc3333333c.
        ....c33333cc33cccccccc..
        ...cc333333c3333ccc3c...
        ccccb3333333cb33cccc....
        c3333333333333ccbbc.....
        .c333333b33333bbbcc.....
        ..cc333bbb3333cbc3c.....
        ....ccbbcb3333cc333cc...
        ......ccc33333dcccccc...
        ........cccccccc........
        `)
})
info.player2.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.over(false)
    } else {
        player2.destroy()
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player1.setImage(img`
        ........................
        ......ccccc.............
        .....cc333cc............
        .....c33333cc...........
        .....cc33333ccccccc.....
        ......c33333c333333cc...
        ..ccccccc333333333333c..
        ..c3333c33333333333333c.
        ..c333333333333ff133333c
        ..cc333333333333ff33f33c
        ...ccccc333333333333333c
        ...cccc333333333cc1cccc.
        ...c3333333333333cbbc3c.
        ...ccc333333333333ccc3c.
        ....c33333c33cc3333333c.
        ....c33333cc33cccccccc..
        ...cc333333c3333ccc3c...
        ccccb3333333cb33cccc....
        c3333333333333ccbbc.....
        .c333333b33333bbbcc.....
        ..cc333bbb3333cbc3c.....
        ....ccbbcb3333cc333cc...
        ......ccc33333dcccccc...
        ........cccccccc........
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == dart1) {
        info.player1.changeScoreBy(1)
    } else if (sprite == dart2) {
        info.player2.changeScoreBy(1)
    }
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == player1) {
        info.player1.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else if (sprite == player2) {
        info.player2.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    }
    otherSprite.destroy(effects.fire, 200)
})
let bogey: Sprite = null
let dart1: Sprite = null
let dart2: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
scene.setBackgroundImage(img`
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222ccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccc333cccccccccccccc3cccccccbccbb3333333333333333bcbccccccccccccc222222cccccccccccccccccffffffcccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc333333cccccccccc33333333ccc333333333333333333333ccccccccccccccc222222ccccccccccccccccffffffffccccccfffccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc3333333ccccccccbb33333bcb3333333333333333333333333cccccccccc22222222cccccccccccccccccffffffffccccccfffccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccbb33333cccccccccbbbbccc3333333333333333333333333333cccccccc2222222cccccccccccccccccccfffccfffccccccfffccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccbb33333cccccccccbbcc3333333333333333333333333333333cccccc2222222cccccccccccccccccccccccccfffccccccfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccbb33333ccccccccccc33333333333333333db333333333b333bccccc2222ccccccccccccccccccccccccccccfffcccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccbb333333cccccccc333333333333333333cc333333333c3333ccccc222cccc2222cccccccccccccccccccccfffcccccffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccbbb333333cccccc33333333cccb333333333333333333333333ccccccccccc22222ccccccccccccccccccccffffcccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccc3333ccbbb33333c33333333333c1ccc3333333333333cccccb33333cccccccccc222222ccccccccccccccccccccffffcccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc3333333ccbbb333333333333333cbbcd3333333333bccccccccb3333cccccccc2222222ccccccccccccccccccccffffffccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc333333333cccbb33333333333333333333333331bccccccccc11b333cccccc22222222cccccccccccccccccccfffffffffcccfffccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccccc
    ccb33333333333cbb3333333333333333333333b11cccccccccc1cb333ccccc22222222ccccccccccccccccccccfffffffffcccfffccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccc
    ccbbbbbb33333333ccc3333333333333333333cc11ccccccccccbcc33ccccc2222222ccccccccccccccccccccccfffffffffcccfffccccccccccccccccccccccccccff2222ffffccccccccccccccccccccccccccccccccc
    cccccccbbbb3333333ccc3333333bc3333331bccb1ccccccccccccc33ccccc22222cccccccccccccccccccccccccffffffcccccfffcccccccccccccccccccccccccff22222ffffccccccccccccccccccccccccccccccccc
    ccccccccccbbb3333333c33333333cc333311bccccccccccccccccc3cccccc2222cccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccfff22222ffffccccccccccccccccccccccccccccccccc
    ccccccccccccbbbb33333333333333cccccb1ccccccccccccccccc33cccccccccccccccccc222cccccccccccccccccccccccccccccccccccccccccccccccccccffff2222fffffcccccccccccccccccccccccccccccccccc
    ccccccc33333cccbbb333333333333ccccccccccccccccccccccc33cccccccccccccccc222222ccccccccccccccccccccccccccccccccccccccccccccccccccffff22222ffffccccccccccccccccccccccccccccccccccc
    cccc333333333333cbb333333333333cccccb333cc333bcccccc33ccccccccccccccc22222222cccccccccccccccccccccccccccccccccccccccccccccccccfff222222ffffcccccccccccccccccccccccccccccccccccc
    ccccb333333333333333333333333333ccc333333cb3333cccd33cccccccccccc22222222222cccccccccccccccccccccccccccccccccccccccccccccccccfff222222fffcccccccccccccccccccccccccccccccccccccc
    cccbb3333b3333333333333333333333ccc3333333c33333c333ccccccccccccc222222222ccccccccccccccccccccccccccccccccccccccccccccccccccfff222222fffccccccccccccccccccccccccccccccccccccccc
    ccccbbb33bbbbbccc3333333333333333cc33333333c3333c3bccccccccccccc22222222ccccccccccccccccccccccccccccccccccccccccccccccccccffff22222ffffcccccccccccccccccccccccccccccccccccccccc
    ccccccbbbbbcccd33333333333333333d3cc3333333c3333ccbccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccccffff22222ffffccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccc3333c33333333333333dc3ccc31b33cc333c3dccccccccccccc222cccccccccccccccccccccccccccccccccccccccccccccccccccccffff22222ffffcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccc33333c33333333333333cc33cc1b333333cc33ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff2222222fffccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccc3fff3c333333333333333ccc311bcc333cc133ccccccb33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222fffcccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccdffff33c333333333333333dcc33b3ccccc3333cccccbb33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff22222ffffccccccccccccccccccccccccccccccccccccccccccccc
    ccfffcccccccdffff33c333fffffffff3333dcc33331331333bccccddb33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff222fffffcccccccccccccccccccccccccccccccccccccccccccccc
    ccfffcccccccdf22f33ccccffffffffff3333dc33331331333ccccdddb3bb33ccccccccccccccccccccccccccccccccccccccccccccccccccccccfff222fccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccf2fcccccccdf22fcccc33ff222222ff3333dccfff33333dcccccdddbbbd33cccccccccccccccccccccccccccccccccccccffffffcccccccccccfff2222ccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccf2fccccccbff222fd3bb3ff2fffff2ff333ddd222fffbbbcccc3bbbddb333ccfffccccccccccccccccccccccccccccffff222222ffcccccccccfff2222fcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccf2fccccccdf22f2ff33bbff2f3ff22ff333ddf22222ffddcccc333bddbbbbccfffccccccccccccccccccccccccfffffff222222222ffccccccccfff2222ccccccccccccccccfffffccccccccccccccccccccccccccccc
    ccf2fccccccdf2ff22f333bdf2fff22fff333ddf2fff2ffdd3bbdb333b333ddccf2fcccccccccccccccccccccccfff22222222222222fffcccccccfff2222fccccccccccccccffffffccccccccccccccccccccccccccccc
    ccf2fccccccdf2fff2ffccbdf222222ff33333ff2fdf2ffdd3bbd3bbbb333bbbcf2fccccccccccccccccccccccff2222222222ff2222fffccccccccfff2222fccccccccccccfffffffccccccccccccccccccccccccccccc
    ccf2fcccccdf22f3f22fddddf2ffff22f33333f22fd22ffcc33fff33fff3bb33f2ffcccccccccccccccccccccff2222222222ffff222fffcccccccccff22222ccccccccccfffffffffccccccccccccccccccccccccccccc
    ccf2ffffcddf2fffff2ffdddf2fffff2ff3333f2fff2fffd333f2f332ff3b333f2ffcccccccccccccccccccccff22222ffffccccf2222ffcccccccccfff2222fccccccccfff222ffffccccccccccccccccccccccccccccc
    ccf2222ffdbf2f2222f2fbddf2f33ff22f3333f2ff22ff33333f2fd32ff33bbbf2fccccccccccccccccccccccf2222ffccccccccc2222ffccccccccccfff2222fccccccfff2222ffffccccccccccccccccccccccccccccc
    ccffff2ffbbf2ffffff2fbd3f2f333ffff3333f2222fff33333f2fdd2ff33bbcf2fcccccccccccccccccccffff2222fcccccccccc2222ffcccccccccccff22222fcccffff22222ffccccccccccccccccccccccccccccccc
    cccccffffddfff3333fff333f2f33333333333f2ff2222f3333f2fdd2ffdccc.f2fcccccccccccccccccccffff222ffcccccccccf2222ffcccccccccccfff2222fccff2222222fffccccccccccccccccccccccccccccccc
    cccccccd333fff333dfff333fff33333333333f2fffff2ff333f2fff22fccccff2fcccccccccccccccccccffff222ffccccccccff2222ffccccccccccccfff2222ff22222222fffcccccccccccccccccccccccccccccccc
    cccccccd3d3fff333dd3333ccd333333333333fff33fff2fffcf222222fccccf22fcccccccccccccccccccffff222ffccccccccf2222fffcccccccccccccff2222222222222fffccccccccccccccccccccccccccccccccc
    cccccccfff33333333dd333cd3d333333333c3fff333ffffff3ffffffffccccffffcccccccccccccccccccffff222fffccccccf22222ffcccccccccccccccff2222222222ffffcccccccccccccccccccccccccccccccccc
    ccccccff2f333333333333cc333333333333c333333333ffff3333df2fcccccfffcccccbb3ccccccccccccffff222fffcccccf22222ffccccccccccccccccfff2222222fffffccccccccccccccccccccccccccccccccccc
    cccfffff2ff3333333fff3cd333333333333cc33333333cc333333ff2fcccccccccccccb33cccccccccccccfff222fffccccc22222ffccccccccccccccccccfff222ffffffffccccccccccccccccccccccccccccccccccc
    cccf222222fffff33ff2fccd3333333333333ccc3333ccc333333df2ffccccccccccccbb3bcccccccccccccfff2222fffccc22222fffcccccccccccccccccccff222fffffffcccccccccccccccccccccccccccccccccccc
    cccffff2ff22fff3ff2ffcdd333333333333333cccccc33333333ff2ffccccf2fcccccb33bccccccccccccccff2222fffcc22222fffccccccccccccccccccccff2222fffffccccccccccccccccccccccccccccccccccccc
    cccccff2fffffff3f2ffdddd3333333333fff33333333333333fff2ffcccccf2fcccccb33bcccccccccccccccff2222ffc22222fffccccccccccccccccccccccf22222fffcccccccccccccccccccccccccccccccccccccc
    cccccf2ffccc333f22ffddd3333333333ff2f333333333dd3fffff2fccccccfffcccccb333cccccccccccccccff2222ff22222ffffcccccccccccccccccccccccf2222fffcccccccccccccccccccccccccccccccccccccc
    cccccf2fccdcccff2ff3333ffffff3333ff2f333333333dd3fff22ffcccccccccccccbb333bcccccccccccccccff2222f2222ffffccccccccccccccccccccccccff2222ffccccccccccccccccccffffffcccccccccccccc
    ccccff2fccddddf2ff3333ff2222ff333ff2333dd33333333f22ffbccccccccccccccbb333bcccccccccccccccff222222222fffcccccccccccccccccccccccccff2222fffccccccccccccccccfffffffcccccccccccccc
    ccccf22fccbddff2ff3333f22ff2ff333ff2d333333333ddcccddbbcfffccccccccccb33333ccccccccccccccccff2222ffffffccccccccccccccccccccccccccfff2222fffcccccccccccccfffff222fcccccccccccccc
    ccccffffccbdff2222fff3f2222fff333f2fddd3333ddd33cdddbf2222fccccccccccb33333bcccccccccccccccfff222fffffcccccccccccccccccccccccccccccf2222fffccccccccccccffff22222fcccccccccccccc
    ccccccccccbbf222f22ff3ff22fff333ff2fccd3333fffccdd33f2fffffcbccccccccb33333bccccccccccccccccff222ffffffffffffccccccccccccccccccccccff2222fffccccccccccffff222222fcccccccccccccc
    ccccccccccbbf22fff2ff33ff222f333f2ff3ccccffffffdd333f22fbb33bbfffffbb3333333cccccccccccccccccf2222ff2222222ffffccccccccccccccccccccff22222fffccccccccffff222222cccccccccccccccc
    ccccccccccbdfff33f2ff33ffffff333f2f3ddddffff2fff3333ff222ff3ffff2fff33333333cccccccccccccccccf2222ff222222222ffffcccccccccccccccccccff2222fffcccccccfff222222fccccccccccccccccc
    ccccccccccd333333f2ff333fffff33322f333dffff222fff333ffff2ff3f222222f3333ffffccccccccccccccccccf2222f22222222222ffffccccccccccccccccccff2222fffcccccf222222222cccccccccccccccccc
    cccccccccc3333333ffff3333333333322fffffffff2ff2fff333fff2fff2fffff223fffffffccccccccccccccccccf22222fffff2222222fffffcccccccccccccccccf2222ffffccc222222222cccccccccccccccccccc
    ccccccccc333333333333333333333d3f22222ffff222222ff33333f2fff222ff2223fff2222cccccccccccccccccccf2222fffccf22222222fffffccccccccccccccccf2222fffc222222222fccccccccccccccccccccc
    ccccccccc33333333333333333333333fffffff3f22ffff22f3f2222ffff2f2222333ff2fff22ccccccccccccccccccff2222ffccccff2222222fffffccccccccccccccc2222fff2222222fffcccccccccccccccccccccc
    cccccccc333333333333dd3333333333333333333fffff3fff3f2ffffff2f3333333ff2fff2fccccccccccccccccccccf2222fffcccccf222222222ffffcccccccccccccc22222222222fffffcccccccccccccccccccccc
    cccccccc333333fff333dd33333333333333333333333333333ffffff3f2fffff33ff2f222ffccccccccccccccccccccff2222ffcccccccf2222222fffffccccccccccccc222222222ffffffccccccccccccccccccccccc
    cccccccc33333ffff33333333333333333333333333333333333333333f2222ff3322fff2ffccccccccccccccccccccccf22222ffccccccccf22222222ffffcccccccccccc2222222ffffffcccccccccccccccccccccccc
    ccccccc33333fff2233fff33fff3333333333fff333333333333333333fffffff332ffff22fccccccccccccccccccccccff2222ffccccccccccf222222fffffcccccccccccfff2222fffffccccccccccccccccccccccccc
    ccccccc33333f222f33fff3ff2f3333fffffff2fbb33333333333fff3333cc3333322ffff2ffccccccccccccccccccccccff2222ffccccccccccc22222fffffccccccccccccfffffffffffccccccccccccccccccccccccc
    ccccccc3333ff22fff3f2f3f22f3ffff222fff2fdbb33fff33333fff3333f2f3333f2fcff2ffccccccccccccccccccccccff22222ffccccccccccccffffffffccccccccccccffffffffffcccccccccccccccccccccccccc
    cccccccd333f2222ff3ff2ff2fffff222f22ff2fcccffffffff33f2f3333f223333fffccf22fcccccccccccccccccccccccff2222ffcccccccccccccfffffffccccccccccccfffffffffccccccccccccccccccccccccccc
    cccccccd33f222f2ff3ff2f2ffdfff2ffff2ff2fccffffffffff3f2f3333ff2ccccccccccfffccccccccccccccccccccccccf22222ffccccccccccccccfffffccccccccccccffffffffcccccccccccccccccccccccccccc
    cccccccdd3f22fff2f33ff2ff3dff22cccf2f22fccffff222fff3ff23333ff2fcccccccccfffcccccccccccccccccccccccccf2222ffcccccccccccccccccccccccccccccccffffffcccccccccccccccccccccccccccccc
    cccccccddf22f2222ff3f22fddcff2fccf2ff2ffccfff22cf22ffff23333ff2fccccccccccccccccccccccccccccccccccccccf222ffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccd33322fffff2ffff22fdccfff2cf22ff2ffccff22ccff2f2f22fffcff22ccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccd33f22f33d322ff2ff2fccfff2222fff2ffccff22cff2ff22222ffccff2cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccddccdf22f33ddf2f2fff2fcccfff22fffc2222222f2ff22fcff2ffffccff2ffffffcccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccddccddf2fcddddd22ffff2fccccffffffccfffffff2222ffcccf2fcccccff2f22fffcccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccddcddddccdddcccf2ffcf2fccccfffcccccfffffffff22ffcccf2fcccccff2222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccdccccdddccccfffccfffccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff2222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222ffffccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff222222ffccccccccccccfffffccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccccc2222222222ffffcccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222ffccccccccccccfffffcccccccccccccccccccccccccccccccccccccffffffffffccccccccccccffff222222222222ffffccccccccc
    cccccccccccccccccccccccfffffccccccccccccccccccccccccccccccf2222222ffffccccccccccccfffffccccccccccccccccccccccccccccccccccccffff22222ffccccccccccccfff222222fff22222ffffcccccccc
    cccccccccccccccfffffccffffffccccccccccccccccccccccccccccccf22222ffffffccccccccccccf222fcccccccccccccccccccccccccccccccccccff222222222ffcccccccccccff22222ffffff2222ffffcccccccc
    ccccccccccccccffffffccffffffccccccccccccccccccfffffcccccccf22222ffffffccccccccccccf222fcccccccccccccccccccccccccccccccccccff222222222fffccccccccccf22222cccccccc222222fcccccccc
    cccccccccccccfffffffccffffffccccccccccccccccccfffffcccccccff22222fccccccccccccccccf222fcccccccccccccccccccccccccccccccccccff22222f222fffcccccccccc22222ccccccccc2222222fccccccc
    cccccccccccccfffffffccffffffcccccccccccccccccffffffccccccccff2222ffcccccccccccccccf222fccccccccccccccccfffffffccccccccccccf2222fcf222fffcccccccccc2222fcccccccccc222222fccccccc
    cccccccccccccf222fffccff222fcccccccccccccccccffffffcccccccccff2222ffccccccccccccccf222fccccccccccccccffffffffffccccccccccff2222ccc2222ffcccccccccc222ffcccccccccccff2222fcccccc
    cccccccccccccf2222ffccf2222ffccccccccccccccccffffffcccccccccff2222fffcccccccccccccf222fcccccccccccccffff222fffffcccccccccff222fccc2222ffcccccccccc222ffcccccccccccff2222fcccccc
    cccccccccccccf2222ffcff22222fccccccccccccccccf222ffccccccccccff222ffffccccccccccccf222fcccccccccccccfff222222ffffcccccccff2222fccc2222ffcccccccccc222ffccccccccccccff222fcccccc
    cccccccccccccf2222ffcff22222fcccccccccccccccff222ffcccccccccccf2222fffffffffccccccf222fcccccccccccccfff22222222ffcccccccff2222fcc2222fffcccccccccc222ffccccccccccccff222fcccccc
    cccccccccccccf2222ffcff22222fcccccccccccccccff222fffccccccccccc22222ffffffffccccccf222fcccccccccccccff2222222222ffccccccff222fcc22222fffcccccccccc222ffcccccccccccccf222fcccccc
    ccccccccccccff2222ffcff22222ffccccccccccccccf2222fffcccccccccccc2222222222ffccccccf222fccccccccccccff22222c22222ffccccccff222fcc2222fffccccccccccc2222fcccccccccccccf222fcccccc
    ccccccccccccff2222ffffff2222ffccccccccccccccf2222fffccccccccccccc222222222ffccccccf222fccccccccccccff2222cccf222ffccccccf2222fc2222ffffccccccccccc2222fcccccccccccccf222fcccccc
    ccccccccccccff2222ffffff222ffffcccccccccccccf2222fffcccccccccccccc22222222ffccccccf222fcccccccccccff2222fcc22222ffccccccf2222f22222fffccccccccccccf222fcccccccccccccf222fcccccc
    ccccccccccccff2222ffffff2222fffcccccccccccccf2222fffccccccccccccccccccf222ffccccccf222fcccccccccccf22222fc222222ffccccccf222ff2222fffccccccccccccc2222fcccccccccccccf222fcccccc
    ccccccccccccff2222ffffff2222fffcccccccccccccf2222ffffcccccccccccccccccf222ffccccccf222fcccccccccccf2222fcc22222fffccccccf222f2222ffffccccccccccccc2222fcccccccccccccf222fcccccc
    cccccccccccff2222fffffff2222ffffccccccccccccf22222fffcccccccccccccccccf2222fccccccf222fccccccccccf2222ffc2222ffffccccccc222222222fffcccccccccccccc222ffccccccccccccc2222fcccccc
    cccccccccccff2222fffffff2222ffffcccccccccccc222222fffcccccccccccccccccf2222fccccccf222fccccccccccf2222fcc2222ffffccccccf22222222fffccccccccccccccc222ffccccccccccccf2222fcccccc
    cccccccccccff2222ffffff222222ffffccccccccccc222222fffccccccccccccccccff2222cccccccf2222ccccccccccf222ffc2222fffffccccccf2222222ffffccccccccccccccc222ffccccccccccccf222ffcccccc
    ccccccccccfff2222ffffff222222ffffccccccccccf222222fffccccccccccccccccff222fcccfffff2222fffffccccff222ff22222ffffcccccccf2222222fffcccccccccccccccc222ffcccccccccccff222ffcccccc
    ccccccccccfff2222ffffff222222fffffcccccccccf2222222ffccccccccccccccccff222fcccfff22222222ffffcccff222fc2222ffffccccccccf222222fffccccccccccccccccc222ffcccccccccccf2222ffcccccc
    cccccccccffff2222ffffff2222222ffffcccccccccf2222222ffccccccccccccccccf2222fcccfff222222222fffcccff222fc2222ffffccccccccf2222222ffccccccccccccccccc222ffccccccccccff2222fccccccc
    cccccccccfff22222fffff22222222ffffcccccccccf222f222ffccccccccccccccccf2222ccccfff222222222fffcccff222fffffffffcccccccccf2222222ffccccccccccccccccc222ffccccccccccff222ffccccccc
    cccccccccfff222222ffff2222f222ffffcccccccccf222f2222fcccccccccccccccf2222fccccffffff222222fffcccff222cfffffffccccccccccf22222222fccccccccccccccccc222ffcccccccccff2222fcccccccc
    ccccccccffff222222ffff222ff2222ffffccccccccf222f2222ffcccccccccccccc22222fccccccccff222ffffffcccff222cffffffcccccccccccf22222222ffcccccccccccccccc222ffcccccccccff2222fcccccccc
    ccccccccffff222222ffff222ff2222ffffcccccccff222ff222ffcccccccccccccc2222ffccccccccff2222ccccccccff222cffffffcccccccccccf2222f2222ffccccccccccccccc222ffccccccccfff222fccccccccc
    ccccccccffff222222ffff222fff2222fffcccccccff222ff222ffccccccccccccc2222fffccccccccff2222ccccccccff222cfffffccccccccccccf2222222222fcccccccccccccc2222ffcccccccfff2222fccccccccc
    cccccccffff2222222ffff222fff22222ffcccccccff222ff222ffccccccccccccc2222ffcccccccccfff222ccccccccff222ccccccccccccccccccf22222f2222fcccccccccccccc2222ffcccccccfff2222cccccccccc
    cccccccffff2222222ffff222cfff2222fffccccccff222fc2222fcccccccccccc2222fffcccccccccfff222ccccccccff222ccccccccccccccccccf22222ff22222ccccccccccccc222fffcccccccff2222fcccccccccc
    cccccccffff222f222ffff222cffff222fffccccccff222cc2222fcccccccccccc2222fffcccccccccfff222ccccccccff222ccccccccccccccccccf22222cf22222cccccccccccc2222fffccccccfff2222ccccccccccc
    ccccccfffff222f222fff2222ccfff2222ffccccccff222ccf222ffccccccccccc222ffffcccccccccfff222cccccccfff2222cccccccccccccccccf22222cff22222ccccccccccc2222ffcccccccff2222cccccccccccc
    ccccccffff2222f222fff2222cccff2222ffccccccff222ccf222ffccccccccccc222ffffcccccccccfff222cccccccfff2222cccccccccccccccccff2222cfff2222ccccccccccc222fffccccccff22222cccccccccccc
    ccccccffff2222f222ff2222ccccfff222fffccccff2222ccf222ffccccccccccf222fffccccccccccfff222cccccccffff222cccccccccccccccccff222cccfff2222cccccccccc222fffccccccf22222fcccccccccccc
    ccccccfff2222ff2222f2222cccccff222fffccccff222222f2222fcccccccccc2222fffccccccccccfff222cccccccffff2222ccccccccccccccccff222cccfff22222ccccccccc222fffccccccf2222fccccccccccccc
    cccccffff2222ff2222f222fcccccff2222ffccccff222222f22222fccccccccf2222ffcccccccccccfff222cccccccffff22222cccccccccccccccff222ccccfff22222cccccccc222fffcccccf2222ffccccccccccccc
    cccccfff2222ffff222f222fccccccf2222ffccccff222222222222ffcccffff2222fffcccccccccccfff222cccccccfffff222222cccccccccccccff222ccccffff22222ccccccc222fffccccff2222fcccccccccccccc
    cccccff22222ffff222f222fccccccff222ffccccff222f22222222ffcccffff2222ffcccccccccccccff222cccccccffffff222222ffffccccccccff222cccccffff2222ccccccc222ffccccff2222ffcccccccccccccc
    cccccff2222fffff2222222fccccccff2222ffcccff222f22222222ffcccffff222fffcccccccccccccff222cccccccfffffff222222222ccccccccff222cccccfffff222ccccccc222ffcccff22222ffcccccccccccccc
    cccccf2222ffffcc2222222fccccccff2222ffcccff222cccccf222ffcccfff2222ffccccccccccccccff222ccccccccffffffff2222222ccccccccff222ccccccfffffffccccccc222ffcff222222ffccccccccccccccc
    cccccf2222ffffccf222222fccccccff2222ffcccff222cccccc222ffcccfff2222ffccccccccccccccff222ccccccccfffffffff222222cccccccccc222cccccccffffffccccccc2222222222222ffcccccccccccccccc
    ccccf2222fffffccf22222ffcccccccfffffffcccff222cccccc222ffcccff2222ffcccccccccccccccff222ccccccccfffffffffffffffcccccccccc222ccccccccfffffccccccc222222222222ffccccccccccccccccc
    ccccf2222fffffccc22222ffcccccccfffffffcccff222ccccccfffffcccc22222ffcccccccccccccccff222cccccccccffffffffffffffcccccccccc222cccccccccccccccccccc2222222222fffcccccccccccccccccc
    cccff222fffffcccc22222ffccccccccffffffcccfffffccccccccccccccc2222ffccccccccccccccccfffffccccccccccfffffffffffffcccccccccc222ccccccccccccccccccccff2222ffffffccccccccccccccccccc
    cccff222fffffccccf222fffccccccccffffffcccfffffccccccccccccccc2222ccccccccccccccccccfffffccccccccccccffffffffffccccccccccc222ccccccccccccccccccccffffffffffccccccccccccccccccccc
    cccffffffffffcccccffffffcccccccccfffffccccccccccccccccccccccc222cccccccccccccccccccfffffccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccffffffffffcccccffffffcccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccffffffffffcccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccfffffffccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccffffffcccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccfffffcccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
pause(200)
game.splash("Ask your friends to join", "Then press A")
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661ddd6666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111116666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111166666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111111111111111111666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111111116666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111111111111111111111111111111111111d6666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111111111111111ddd666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111d1111111111111111dddddd66666dddd
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666111111dddd11111111111111111111111111111111111111111111dd1111111ddddddddddddd1
    6666666666666666666666666666666666666666666666666666666666666666666666666666666dd111111ddd111111111111111111111111111d11111111dd111dd11111111111111111111dddd111
    666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111d111d1111ddddddddd111111111ddddd111ddddddddd11111
    66666666666666666666666666666666666666666666666666666666666666666666911111111111111d1111111111dddddd11111dddd1ddddddddddddddddddddd1111dd111111111ddddddd1111111
    666666611111d66666666666666666666666666666666666666666666d1111111111d111d11111111111111111111111dddd1111dddddddddddddddddddddddddd111111111111dddddddddd11111111
    66666111111111166666666666666666666666666666666dd1111dddd11111111111ddddd11111111111111111111111111111ddddddddddddddddddddddddddd111111dddddddddddddddd11111111b
    666111111111111111666666666666666666666dd111111d11111ddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddd11ddddddddddddddddd11111bbbbbb
    1ddd1dd11111ddd1111111666666666dd11111111111111dddddddddddd11111111ddddddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddd11111bbbbbbbb
    ddddddddd11dddddd11111111111dd1111111111dddddddddddddd1111111111111111ddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddbbb1bbbbbbbbbbb
    dddddddddddddddddddddd1111111d1dddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb
    111111ddddddddddddddddddddddddddddddddddddddb111111111111111111111111111111111dddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb
    1111111111dddddddddddddddddddddddddddddddb111111111111111111111111111111111b1111ddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11b
    1111111111111dddddddddddddddddddddddddb1111111111111111111111bbb11111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb1111111
    1111111bbb111111ddddddddddddddddddddbb1111111111111111bbbbbb111bb111111111111111111111bbbddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb1111111111111
    bbbb111bbbbbb11111ddddddddddddddbbb11111111b111bbb11bbbbbbbbb1bbbbbbbbb1111bb1111b111111111bbddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb111111111111111
    bbbbbbbbbbbbbbbb1111bddddddbbbbbbbb1111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111b1111111bbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11111111111111111
    bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbc1111111111111111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111111c11
    bbbbbbbb1b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc11111111111111111111111111
    bbbbb11111111111b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc11111111111c11111111111111111111
    bbb11111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc11111111111c11111c111111cc11c11111c
    bb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111ccccccccccc1111c111c11111111c1111cccc11cc11111c
    bb11111111111111111111111111bb1bbbbbbbbbbbbbbbcc1111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111ccccccccccccc11111111c111c1111cccc11cc111111c
    b11111c1111111111111111111111c1111111bbbc111111111111111111111cc111111cbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111cc1ccccccccc11111cccccc111111ccccc11ccc11111cc
    b1111ccc1111111111111111111111cc111111ccccccccc111111111111111ccccccc11111cbbbbbbbbbbbbbbbbbbbbc111111cc11111111ccccccccccccccc1cccccccc11c111ccccc111cc11111ccc
    1111dccc111111111111111111111111cccc11cccccccccc11111cccccccccccccccccc111111cccccbbbbbbcccccccccccccc111111ccccccccccccccccccccccccccc111111ccccccc1ccc11111ccc
    1cccc1111111111111111111c111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccccccccccc
    cccc11111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccc
    ccc111111111111111111111111111111c111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    11c11111c11111c1c1111cc1111111c111c11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111ccc111cc1cc111cc111111111111cc111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    111c11ccc1111cc1cc11ccccc111ccc11111cccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    11cccccccc11cc11cc11cccccc111ccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1ccc11ccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1cccc1cccccccc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6cccccccccccccccccccc
    cccccccccccccccccccccccccc66cccccccccccccccc6ccccccccccccccccccccccccccccccccccccccccccc666c6cccccccccccc66666ccccccccccccccccc6ccccccc6ccc66ccccc6ccccccccccccc
    6cc6c6666c6c6666c666cc66c666666666666666c666666cccc6666c66666666666666666666666cc6666666666666666666666666666666666666666666666666666cc666666666666666666666c666
    666666666666666666666666e6666666666666666666ee6666666666666666666666666666666666666666eeeee6ee66666666666eeeee66666e66e66ee6666666e666e66666666eeee6666e66666666
    6666e66e6e6ee666e66666666666666666ee6666666eee6666666eeee66eee66eee66666eee66eee666666ee66ee66eeeee76eeee6e66ee66666666eeee66e66666666e666666666eeeee6666ee66666
    666e666666666666666e666666666666668888888888888888888888888888888888888888888888888888888888888888886ee666e66ee66666666eee666eeee6eee66666666666ee6e666ee6666666
    6666666e66666eee66666666688888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888868888888e6666666666666e666e
    66666666666666e66666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e666666666e
    66666666666666666ee66668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e66666e66e
    66666666666e6666666666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e666666
    6666e66ee666666ee6e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666e666
    666666666666ee8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888666666e
    66e6666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666
    6e6666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666
    6e666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866e
    66666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    66e6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66
    666e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668e66ee
    ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e66
    e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666ee666
    e666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888886886666666666
    666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888886667666666e666
    6666668868886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666866e666666eee66666
    66e666e666886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666ee666e666666666
    66e6666666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666
    6666666666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866eee666666e66666666666666
    e66666e66666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888686e666e6666e666e66666666666
    ee66666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666ee666e666e66666666666
    666666666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886686ee666e6666e666e6666e6e66e
    6666666666e66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e666eee6666666e6e6666666
    6666666666e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886e66666eee66ee6666666e6666666
    e66e66666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666eee6666eee666666
    e66666e6666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666666ee666ee6666
    66666e666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666e666666666
    666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e
    e6e6668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886
    6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
player1 = sprites.create(img`
    ........................
    ......ccccc.............
    .....cc333cc............
    .....c33333cc...........
    .....cc33333ccccccc.....
    ......c33333c333333cc...
    ..ccccccc333333333333c..
    ..c3333c33333333333333c.
    ..c333333333333ff133333c
    ..cc333333333333ff33f33c
    ...ccccc333333333333333c
    ...cccc333333333cc1cccc.
    ...c3333333333333cbbc3c.
    ...ccc333333333333ccc3c.
    ....c33333c33cc3333333c.
    ....c33333cc33cccccccc..
    ...cc333333c3333ccc3c...
    ccccb3333333cb33cccc....
    c3333333333333ccbbc.....
    .c333333b33333bbbcc.....
    ..cc333bbb3333cbc3c.....
    ....ccbbcb3333cc333cc...
    ......ccc33333dcccccc...
    ........cccccccc........
    `, SpriteKind.Player)
player1.setPosition(20, 15)
player1.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player1, 200, 200)
info.player1.setLife(3)
info.player1.setScore(0)
player2 = sprites.create(img`
    ........................
    ......ccccc.............
    .....cc999cc............
    .....c99999cc...........
    .....cc99999ccccccc.....
    ......c99999c999999cc...
    ..ccccccc999999999999c..
    ..c9999c99999999999999c.
    ..c999999999999ff199999c
    ..cc999999999999ff99f99c
    ...ccccc999999999999999c
    ...cccc999999999cc1cccc.
    ...c9999999999999cbbc9c.
    ...ccc999999999999ccc9c.
    ....c99999c99cc9999999c.
    ....c99999cc99cccccccc..
    ...cc999999c9999ccc9c...
    cccc69999999c699cccc....
    c9999999999999cc66c.....
    .c999999699999666cc.....
    ..cc9996669999c6c9c.....
    ....cc66c69999cc999cc...
    ......ccc999996cccccc...
    ........cccccccc........
    `, SpriteKind.Player)
player2.setPosition(20, 45)
player2.setFlag(SpriteFlag.StayInScreen, true)
controller.player2.moveSprite(player2, 200, 200)
info.player2.setLife(3)
info.player2.setScore(0)
game.onUpdateInterval(200, function () {
    if (true) {
        bogey = sprites.create(img`
            .............ccfff..............
            ...........ccddbcf..............
            ..........ccddbbf...............
            ..........fccbbcf...............
            .....fffffccccccff.........ccc..
            ...ffbbbbbbbcbbbbcfff....ccbbc..
            ..fbbbbbbbbcbcbbbbcccff.cdbbc...
            ffbbbbbb2fbbcbcbbbcccccfcdbbf...
            fbcbbb112f1bcbbbbbcccccffbbf....
            fbbb11111111bbbbbcccccccbbcf....
            .fb11133cc11bbbbcccccccccccf....
            ..fccc31c111bbbcccccbdbffbbcf...
            ...fc13c111cbbbfcddddcc..fbbf...
            ....fccc111fbdbbccdcc.....fbbf..
            ........ccccfcdbbcc........fff..
            .............fffff..............
            `, SpriteKind.Enemy)
        bogey.setVelocity(-100, 0)
        bogey.setPosition(180, randint(0, 100))
    } else {
    	
    }
})
