input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
})
basic.forever(function () {
	
})
