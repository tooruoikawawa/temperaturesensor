let temperature = 0
basic.forever(function () {
    if (temperature > 30) {
        let lower_temperature = 0
        basic.showString("It's too warm!")
        temperature += lower_temperature
    }
    if (temperature < 10) {
        let higher_temperature = 0
        basic.showString("It's too cold!")
        temperature += higher_temperature
    }
})
