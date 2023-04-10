input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature() * (9 / 5) + 32)
    basic.showString("F")
})
