//Clone
function clone(source) {
    const objClone= {};
    
    return Object.assign(source, objClone);
}

console.log(clone({nombre: "Juan", dni: "12424343R", edad: 22}));

//Merge
function merge(source, target) {
    return Object.assign(target, source);
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}