function display_c () {
    basic.clearScreen()
    y = 1
    x = 0
    d = 0
    while (d < c) {
        d += 1
        x += 1
        if (x > 5) {
            x = 1
            y += 1
        }
        led.plot(x - 1, y - 1)
    }
}
WSJoyStick.onKey(KEY.F, function () {
    display_problem()
})
input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    c += -1
    if (c < 0) {
        c = 0
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    display_c()
})
function new_problem () {
    a = randint(1, 5)
    b = randint(1, 5)
    c = 5
}
WSJoyStick.onKey(KEY.E, function () {
    display_problem()
})
WSJoyStick.onKey(KEY.D, function () {
    check_answer()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    c += 1
    if (c > 25) {
        c = 25
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    display_c()
})
WSJoyStick.onKey(KEY.C, function () {
    stats()
})
function display_problem () {
    basic.showString("" + (a))
    basic.showString("+")
    basic.showString("" + (b))
    basic.showString("=")
    display_c()
    basic.pause(500)
}
function check_answer () {
    if (a + b == c) {
        soundExpression.happy.play()
        basic.showIcon(IconNames.Yes)
        correct += 1
        new_problem()
        display_problem()
    } else {
        soundExpression.sad.play()
        incorrect += 1
        basic.showIcon(IconNames.No)
        display_c()
    }
}
function stats () {
    basic.showString("" + (correct - incorrect))
    basic.showString("=")
    basic.showString("" + (correct))
    basic.showString("-")
    basic.showString("" + (incorrect))
    basic.showString("=")
    basic.showString("" + (correct - incorrect))
}
let incorrect = 0
let correct = 0
let b = 0
let a = 0
let c = 0
let d = 0
let x = 0
let y = 0
WSJoyStick.JoyStickInit()
basic.clearScreen()
music.setVolume(100)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(500)
new_problem()
display_problem()
