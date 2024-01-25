function encriptar() {
    let texto = document.getElementById('texto-encriptar').value;
    let textoDesencriptar = document.querySelector('.derecha p');
    textoDesencriptar.innerHTML = encrypt(texto);
    document.querySelector('.derecha img').style.display = 'none';
    textoDesencriptar.style.display = 'block';
    limpiar();
}

function desencriptar() {
    let texto = document.getElementById('texto-encriptar').value;
    let textoDesencriptar = document.querySelector('.derecha p');
    textoDesencriptar.innerHTML = decrypt(texto);
    document.querySelector('.derecha img').style.display = 'none';
    textoDesencriptar.style.display = 'block';
    limpiar();
}

function restaurarEstado() {
    document.querySelector('.derecha img').style.display = 'block';
    document.querySelector('.derecha p').innerHTML = 'Ningun mensaje fue encontrado, ingresa el texto que desees encriptar o desencriptar';
    document.getElementById('texto-encriptar').value = '';
}

function encrypt(text) {
    return btoa(text);
}

function decrypt(encodedText) {
    return atob(encodedText);
}

function limpiar(){
    document.getElementById('texto-encriptar').value = '';
}
