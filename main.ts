let J1 = 0
let J2 = 0
input.onGesture(Gesture.Shake, function () {
    basic.showString("J1")
    basic.pause(1000)
    J1 = randint(0, 2)
    if (J1 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(1000)
    }
    if (J1 == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }
    if (J1 == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("J2")
    basic.pause(1000)
    J2 = randint(0, 2)
    if (J2 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(1000)
    }
    if (J2 == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }
    if (J2 == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (J1 != J2) {
        if (J1 == 0) {
            if (J2 == 1) {
                basic.showString("J2 V")
            } else {
                basic.showString("J1 V")
            }
        }
        if (J1 == 1) {
            if (J2 == 2) {
                basic.showString("J2 V")
            } else {
                basic.showString("J1 V")
            }
        }
        if (J1 == 2) {
            if (J2 == 3) {
                basic.showString("J2 V")
            } else {
                basic.showString("J1 V")
            }
        }
    } else {
        basic.showString("EMPATE")
    }
})
