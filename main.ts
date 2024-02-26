let toestand = 1
basic.forever(function () {
    if (toestand == 1) {
        if (input.lightLevel() < 100) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            toestand = 2
        }
    }
    if (input.lightLevel() >= 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        toestand = 1
    }
})
