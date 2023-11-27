interface Product {
    description: string,
    price: number
}

const phone: Product = {
    description: 'Nokia A1',
    price: 100.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 300.0
}


interface taxCalculationOptions {
    tax: number,
    products: Product[]
}


function taxCalculation(options: taxCalculationOptions): [number,number] {
    
    const {tax,products} = options;
    
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });
    
    return [total, total * tax]
}

const shoppingCart= [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total: ', total)
console.log('Tax: ', taxTotal)

export {};