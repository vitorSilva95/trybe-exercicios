
let salarioBruto = 3000;
let impostoAliquotaInss = 0;
let impostoDeRenda = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
  impostoAliquotaInss = salarioBruto*0.08;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  impostoAliquotaInss = salarioBruto*0.09
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  impostoAliquotaInss = salarioBruto*0.11;
}else{
  impostoAliquotaInss = 570.88;
}
let salarioBase = salarioBruto - impostoAliquotaInss;

if (salarioBase <= 1903.98) {
  impostoDeRenda = 0;
}else if(salarioBase<= 2826.65){
  impostoDeRenda = (salarioBase *0.075)-142.80;
}else if (salarioBase <=3751.05) {
  impostoDeRenda = (salarioBase*0.15)-354;
}else if (salarioBase <= 4664.68) {
  impostoDeRenda = (salarioBase*0.225)-636.13
}else{
  impostoDeRenda = (salarioBase*0.275)-869.36;
}

salarioLiquido = salarioBruto-impostoAliquotaInss-impostoDeRenda;

console.log("Salario liquido : "+salarioLiquido+" Reais.");