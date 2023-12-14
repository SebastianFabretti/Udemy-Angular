export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Seba',
}

const passenger2: Passenger = {
    name: 'Lionel',
    children: ['Thiago', 'Mateo', 'Ciro']
}


const returnChildrenNumber = (passenger: Passenger) =>
{ 
    const howManyChildrens = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildrens);

    return howManyChildrens;
}

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);