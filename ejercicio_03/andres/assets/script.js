console.log('Script Login')

// DATA BASE
const DB_Email = "and@phil"
const DB_Pass = '1234'


// Selecciono el botón.
btn = document.getElementById('btn_login')
const msjError = document.getElementById('log_error')

// Le doy función al botón selecto al hacer click.
btn.addEventListener('click', ObtenerValores)


function ObtenerValores() {
    let Email = document.getElementById('form1').elements[0].value
    let Pass = document.getElementById('form1').elements[1].value

    // ------- Esto es solo de control ----
    console.log(`Email: ${Email}.`);
    console.log(`PassWord: ${Pass}.`);
    // -------------------------------------

    if (Email !== DB_Email | Pass !== DB_Pass) {
        console.log('Email y/o contraseña incorrectos.'),
        msjError.style.visibility = 'visible'
    }
    
    if (Email === DB_Email & Pass === DB_Pass) {
        console.log('Sesión habilitada.'),
        msjError.style.visibility = 'hidden'

        // Guardar nombre usuario.
        myName = localStorage.setItem('myName',Email)

        // Abrir nueva ventana de logeo.
        window.location.replace('./log.html')
    }
}