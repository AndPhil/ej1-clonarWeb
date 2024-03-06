/* ========== SHOW HIDDEN PASSWORD ========== */
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
            iconEye = document.getElementById(loginEye)
    
    iconEye.addEventListener('click', () => {
        //Change pasword to text
        if (input.type === "password") {
            //Switch to text
            input.type = "text",

            // Icon change
            iconEye.classList.add('ri-eye-line'),
            iconEye.classList.remove('ri-eye-off-line')
        }
        else {
            input.type = "password",
            iconEye.classList.add('ri-eye-off-line'),
            iconEye.classList.remove('ri-eye-line')
        }
    })
}

showHiddenPass('login-pass','login-eye')

/* ========== LOGIN ========== */
console.log('===== WebLogin =====')

// Obtener botón
const btnLogin = document.querySelector(".login__button");

// Detectar evento
btnLogin.addEventListener('click', ObtenerValores);

// Obtener selectores
let Email = document.getElementById('login__form').elements[0];


function ObtenerValores(params) {
    
}


