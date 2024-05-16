document.addEventListener("DOMContentLoaded", function() {
    const vibrationSlider = document.getElementById("vibrationSlider");
    const vibrationValue = document.getElementById("vibrationValue");
    const motor1Speed = document.getElementById("motor1Speed");
    const motor2Speed = document.getElementById("motor2Speed");
    const motor1Increase = document.getElementById("motor1Increase");
    const motor1Decrease = document.getElementById("motor1Decrease");
    const motor2Increase = document.getElementById("motor2Increase");
    const motor2Decrease = document.getElementById("motor2Decrease");
    const saveButton = document.getElementById("saveButton");

    vibrationSlider.addEventListener("input", function() {
        vibrationValue.textContent = vibrationSlider.value;
    });

    motor1Increase.addEventListener("click", function() {
        motor1Speed.textContent = parseInt(motor1Speed.textContent) + 1;
    });

    motor1Decrease.addEventListener("click", function() {
        motor1Speed.textContent = Math.max(0, parseInt(motor1Speed.textContent) - 1);
    });

    motor2Increase.addEventListener("click", function() {
        motor2Speed.textContent = parseInt(motor2Speed.textContent) + 1;
    });

    motor2Decrease.addEventListener("click", function() {
        motor2Speed.textContent = Math.max(0, parseInt(motor2Speed.textContent) - 1);
    });

    saveButton.addEventListener("click", function() {
        const wifiNetwork = document.getElementById("wifiNetwork").value;
        const password = document.getElementById("password").value;

        console.log({
            vibrationPower: vibrationSlider.value,
            motor1Speed: motor1Speed.textContent,
            motor2Speed: motor2Speed.textContent,
            wifiNetwork: wifiNetwork,
            password: password
        });
    });
});
