input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(Number2)
    Number2 = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
let Number2 = 0
radio.setGroup(1)
Number2 = 0
basic.forever(function () {
	
})
