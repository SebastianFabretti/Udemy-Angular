

function addNumbers (a: number,b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number) => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}


//const result = addNumbers (1,2)
//const result2 = addNumbersArrow(3,4)
//const multiplyResult: number = multiply(5);
//console.log({result,result2, multiplyResult})


const healCharacter = (character: Character, amount: number) => {
    
    character.hp += amount;
}

const aragon: Character = {
    name: 'Aragon',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}


healCharacter (aragon, 10);

aragon.showHp();
export {};