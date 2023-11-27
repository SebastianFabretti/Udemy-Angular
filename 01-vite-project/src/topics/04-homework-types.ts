interface SuperHero {
    name: string,
    age: number,
    address: Address
    showAddress: () => string;
}

interface Address {
    street: string,
    country: string,
    city: string
}


const superHeroe: SuperHero = {
    name: 'Batman',
    age: 35,
    address: {
        street: 'Wayne St',
        country: 'USA',
        city: 'Gotham City'
    },
    showAddress(){
        return this.name + ', ' + 
        this.address.city + ', ' + this.address.country
    }
}

const address = superHeroe.showAddress();
console.log(address);


export {};