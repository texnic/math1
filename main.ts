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
}
WSJoyStick.onKey(KEY.D, function () {
    check_answer()
})
input.onButtonPressed(Button.AB, function () {
    check_answer()
})
input.onButtonPressed(Button.B, function () {
    c += 1
    if (c > 25) {
        c = 25
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    display_c()
})
function display_problem () {
    basic.showString("" + (a))
    basic.showString("+")
    basic.showString("" + (b))
    basic.showString("=")
    c = 3
    display_c()
}
function check_answer () {
    if (a + b == c) {
        basic.showIcon(IconNames.Yes)
        soundExpression.happy.play()
        new_problem()
    } else {
        basic.showIcon(IconNames.No)
        soundExpression.sad.play()
        display_c()
    }
}
let b = 0
let a = 0
let c = 0
let d = 0
let x = 0
let y = 0
WSJoyStick.JoyStickInit()
basic.clearScreen()
new_problem()
display_problem()
basic.forever(function () {
	
})
