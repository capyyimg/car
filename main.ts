pins.digitalWritePin(DigitalPin.P0, 0)
control.waitMicros(2)
pins.digitalWritePin(DigitalPin.P0, 1)
control.waitMicros(10)
pins.digitalWritePin(DigitalPin.P0, 0)
let distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
basic.showNumber(distance)
basic.forever(function () {
	
})
