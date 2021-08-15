input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Angry)
    // 左手
    pins.servoWritePin(AnalogPin.P14, 180)
    // 右手
    pins.servoWritePin(AnalogPin.P15, 0)
    basic.pause(1000)
    // 左手
    pins.servoWritePin(AnalogPin.P14, 0)
    // 右手
    pins.servoWritePin(AnalogPin.P15, 180)
    basic.showIcon(IconNames.Happy)
})
/**
 * サーボ P13・・・頭
 * 
 * サーボ P14・・・右腕
 * 
 * サーボ P15・・・左腕
 */
basic.showIcon(IconNames.Happy)
// 左手
pins.servoWritePin(AnalogPin.P13, 90)
// 左手
pins.servoWritePin(AnalogPin.P14, 0)
// 右手
pins.servoWritePin(AnalogPin.P15, 180)
basic.forever(function () {
    // 左手
    pins.servoWritePin(AnalogPin.P13, 90 - input.rotation(Rotation.Roll))
})
