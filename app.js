function suma(a, b){
    return a + b;
};

const resta = (a, b) => {
    return a - b;
};

const esMayorDeEdad = edad => edad >= 21 ? true : false;

const name = "Luis";

const total = (valores = []) => {
    return valores.reduce((total, valor) => total + valor, 0)
}

module.exports = {
    suma, 
    resta,
    esMayorDeEdad,
    name,
    total
};