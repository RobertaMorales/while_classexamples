let COUNTER = 0
input.onPinPressed(TouchPin.P0, function () {
    COUNTER = 0
    while (COUNTER <= 5) {
        basic.showNumber(COUNTER)
        music.playTone(698, music.beat(BeatFraction.Half))
        COUNTER += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
