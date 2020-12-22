let calculadora = {
    sumar: function(numeroA, numeroB) {
        return numeroA + numeroB
    },
    restar: function (numeroA, numeroB){
     return numeroA - numeroB},
multiplicar : function (numeroA, numeroB){
    return numeroA * numeroB},
    dividir : function ( numeroA , numeroB) {
    if (numeroA !== 0 && numeroB !=0){
        return numeroA / numeroB}
        else{
             let mensaje = "error";
    return mensaje }
    }
}
console.log(calculadora.sumar(2, 2)) 
console.log(calculadora.restar(6, 6))
console.log(calculadora.multiplicar(2, 4))
console.log(calculadora.dividir(4,2))