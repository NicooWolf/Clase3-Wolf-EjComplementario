let name = String(prompt('Ingrese su nombre por favor'));

while (name != 'STOP'){
    switch (name) {
        case 'Nico':
            alert('Bienvenido Nico!')
            break;
        case 'Carlos':
            alert('Bienvenido Carlos!')
            break;
        default:
        alert('Usuario no registrado.')
            break;
    }
    name = String(prompt('Ingrese su nombre por favor'));
}
if (name === 'STOP') {
for (let i = 1; i <= 10; i++) {
    document.write(`${i} Bienvenido! Nico o Carlos. <br>`)
}};
