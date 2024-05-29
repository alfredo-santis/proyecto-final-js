

var cuentas = [
    { nombre: "Mali", saldo: 200, contraseña: "1234" },
    { nombre: "Gera", saldo: 290, contraseña: "5678" },
    { nombre: "Maui", saldo: 67, contraseña: "9012" }
];

var cuentaActual = null;

function iniciarSesion() {
    var indiceCuenta = document.getElementById('accountSelect').value;
    var contraseña = document.getElementById('password').value;

    if (cuentas[indiceCuenta].contraseña === contraseña) {
        cuentaActual = cuentas[indiceCuenta];
        document.getElementById('login').classList.add('hidden');
        document.getElementById('operaciones').classList.remove('hidden');
        document.getElementById('mensajeBienvenida').innerText = `Bienvenido, ${cuentaActual.nombre}`;
        document.getElementById('loginError').classList.add('hidden');
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
}

function cerrarSesion() {
    cuentaActual = null;
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('operaciones').classList.add('hidden');
    document.getElementById('password').value = '';
    document.getElementById('saldo').classList.add('hidden');
    document.getElementById('formularioIngreso').classList.add('hidden');
    document.getElementById('formularioRetiro').classList.add('hidden');
    document.getElementById('mensajeIngreso').classList.add('hidden');
    document.getElementById('mensajeRetiro').classList.add('hidden');
    document.getElementById('loginError').classList.add('hidden');
}

function mostrarSaldo() {
    document.getElementById('saldo').innerText = `Saldo actual: $${cuentaActual.saldo}`;
    document.getElementById('saldo').classList.remove('hidden');
    document.getElementById('formularioIngreso').classList.add('hidden');
    document.getElementById('formularioRetiro').classList.add('hidden');
}

function mostrarFormularioIngreso() {
    document.getElementById('formularioIngreso').classList.remove('hidden');
    document.getElementById('formularioRetiro').classList.add('hidden');
    document.getElementById('saldo').classList.add('hidden');
    document.getElementById('mensajeIngreso').classList.add('hidden');
}

function mostrarFormularioRetiro() {
    document.getElementById('formularioRetiro').classList.remove('hidden');
    document.getElementById('formularioIngreso').classList.add('hidden');
    document.getElementById('saldo').classList.add('hidden');
    document.getElementById('mensajeRetiro').classList.add('hidden');
}

function ingresarMonto() {
    var monto = parseFloat(document.getElementById('montoIngreso').value);
    if (!isNaN(monto) && monto > 0) {
        if (cuentaActual.saldo + monto <= 990) {
            cuentaActual.saldo += monto;
            document.getElementById('mensajeIngreso').innerText = `Monto ingresado: $${monto}. Nuevo saldo: $${cuentaActual.saldo}`;
            document.getElementById('mensajeIngreso').classList.remove('hidden');
            resetForms();
        } else {
            alert("No puedes tener más de $990 en tu cuenta.");
        }
    } else {
        alert("Ingresa un monto válido.");
    }
}

function retirarMonto() {
    var monto = parseFloat(document.getElementById('montoRetiro').value);
    if (!isNaN(monto) && monto > 0) {
        if (cuentaActual.saldo - monto >= 10) {
            cuentaActual.saldo -= monto;
            document.getElementById('mensajeRetiro').innerText = `Monto retirado: $${monto}. Nuevo saldo: $${cuentaActual.saldo}`;
            document.getElementById('mensajeRetiro').classList.remove('hidden');
            resetForms();
        } else {
            alert("No puedes tener menos de $10 en tu cuenta.");
        }
    } else {
        alert("Ingresa un monto válido.");
    }
}

function resetForms() {
    document.getElementById('montoIngreso').value = '';
    document.getElementById('montoRetiro').value = '';
    document.getElementById('saldo').classList.add('hidden');
    document.getElementById('formularioIngreso').classList.add('hidden');
    document.getElementById('formularioRetiro').classList.add('hidden');
}
