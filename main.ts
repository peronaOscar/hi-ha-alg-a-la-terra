input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    radio.sendString("Hola, te recibo")
})
