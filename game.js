class functionsGame {
    constructor (num1,num2) {
        this.num1 = num1
        this.num2 = num2
    }
    soma() {
        this.num1 + this.num2
    }
}

var s = new functionsGame(55,44)
s.soma()
console.log(s)



//Exportando
const all = {functionsGame}
module.exports = all
 

