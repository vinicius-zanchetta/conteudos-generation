let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("\nmap() - Multiplicar todos os números por 3 e retornar um novo array");
let numerosPorTres: Array<number> = numeros.map(n => n * 3)
console.log(numerosPorTres);
 
console.log("\nfilter() - Listar todos os Estados que contém a palavra Rio");
let estadosComRio: Array<string> = estados.filter(e => e.includes("Rio"))
console.log(estadosComRio);

console.log("\nincludes() - Checar se existe na lista o Estado de Minas Gerais");
let minasGerais = estados.includes("Minas Gerais")
minasGerais ? console.log("Minas Gerais!") : console.log("Minas Gerais não está na lista.");
 
console.log("\nreduce() - Remover todos os elementos repetidos do array estados\n");
let estadosSemRepeticao = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1) {
        acumulador.push(estado);
    }
    return acumulador;
}, [])
console.log(estadosSemRepeticao);
 
console.log("\nfind() - Encontrar o primeiro número da lista maior do que 9");
console.log(numeros.find(n => n > 9));

console.log("\nfindIndex() - Encontrar o Índice do primeiro número da lista maior do que 9");
let indiceNumerosMaiorQueNove = numeros.findIndex(n => n > 9)
console.log(indiceNumerosMaiorQueNove);

console.log("\nspread - Combinar 2 arrays");
let combinado: Array<number> = [...numeros, ...numerosDesordenados]
console.log(combinado);
