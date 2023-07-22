//INFERENCIA
let x = 2;

//ANNOTATION
let y: number = 2;

//EXEMPLO1
let z: number = 15;

console.log(z);

//OBJETO
const user: { nome: string; idade: number } = {
  nome: "Thiago",
  idade: 25,
};

//UNION TYPE
let id: string | number = "10";
id = 10;

//TYPE ALIAS
type strnum = string | number;

const user2: strnum = 10;

//FUNCTION
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(12, 12));
