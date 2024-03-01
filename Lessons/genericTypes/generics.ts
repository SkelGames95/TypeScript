// An example with functions:

function identity<Type>(value:Type): Type {
    //console.log(value);       this is not correct: it must return value
    return value;
}

const id = <Type>(value:Type): Type => value;
// it works at the same way

let output1 = identity("India");

let output2 = id(13);

let output3 = identity(false);

let output4 = id<string>("China");

let output5 = identity<number>(27);

let output6 = id<boolean>(true);


// with more parameters:

function multipleId<Type1, Type2>(val1:Type1, val2:Type2): [val1:Type1, val2:Type2] {
    return [val1, val2];
}

let newOutput = multipleId<boolean, string>(true, "Mexico");


// And now an example with interfaces:

interface Currency<Type> {
    currency: Type;
}

const currencyObj:Currency<string> = { currency: "Baht" };

const currencyObjA:Currency<{ name:string; code:string; }> = { 
    currency: { name: "Baht", code: "THB" }
};


// Let's try another way to intend Currency can be either string or object:

type CurrencyString = Currency<string>;
type CurrencyObject = Currency<{ name:string; code:string }>;

const currencyObj1:CurrencyString = { currency: "Euro" }

const currencyObj1A:CurrencyObject = {
    currency: { name: "Euro", code: "EUR" }
};