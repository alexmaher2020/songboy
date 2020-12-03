for (let index = 0; index < 100; index++) {
    basic.showLeds(`
        # . . . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . . # .
        . . # # .
        `)
}
basic.forever(function () {
    music.playMelody("B E G B A E G E ", 120)
    music.playMelody("B E G B A F G E ", 120)
})
