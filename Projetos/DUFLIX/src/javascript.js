function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (email == "admin@admin.com" && senha == "admin") {
        location.href = "src/entrada.html";
    } else {
        alert('usuario invelido');
    }
}