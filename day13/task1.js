let fruits=["Apple","orange","mango","banana","cherry"];
console.log("third :",fruits[2]);

fruits.push("grape");
console.log("after push:",fruits);

fruits.shift();
console.log("after shift:",fruits);

console.log("length:",fruits.length);

fruits.reverse();
console.log("reversed:",fruits);

let numbers=[1,2,3,4,5];
let sum=0;
for(let i=0;i<fruits.length;i++){
    sum+=numbers[i];
}
console.log("sum:",sum);

fruits.pop();
console.log("pop:",fruits);

fruits.unshift("guava");
console.log("after unshift:",fruits);

for(let i=0;i<fruits.length;i++){
    console.log("all fruits:",fruits[i]);
}

