let x = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        x += 1
    }
    if (input.buttonIsPressed(Button.A)) {
        x += -1
    }
    if (x > 4) {
        x = 4
    }
    if (input.logoIsPressed()) {
        y += 1
    }
    basic.clearScreen()
    led.plot(x, y)
    basic.pause(100)
})
