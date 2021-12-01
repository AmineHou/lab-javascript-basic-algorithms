
// Iteration 1: Names and Input

let hacker1 = "Amine";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Gladys";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
};

// Iteration 3: Loops

// 3.1

let hacker1String = "";

for (let i = 0; i < hacker1.length; i++) {
    let hacker1Loop = hacker1.charAt(i);

    hacker1String = hacker1String + hacker1Loop.toUpperCase() + " ";
    // === hacker1String += hacker1Loop.toUpperCase() + " "
}
console.log("The driver's name with capitals and spaces: ", hacker1String);

// 3.2

let hacker2String = "";

for (let j = (hacker2.length - 1); j >= 0; j--) {
    let hacker2Loop = hacker2.charAt(j);

    hacker2String = hacker2String + hacker2Loop;
    // === hacker2String += hacker2Loop
}
console.log("The reverse navigator's name: ", hacker2String);

// 3.3

let hackerLength;
if (hacker1.length < hacker2.length) {
    hackerLength = hacker1.length
} else {
    hackerLength = hacker2.length
}

for (let k = 0; k < hackerLength; k++) {
    if (hacker2[k] > hacker1[k]) {
        console.log("The driver's name goes first.");
        break
    } else if (hacker2[k] < hacker1[k]) {
        console.log("Yo, the navigator goes first definitely")
        break
    } else if (hacker1 === hacker2) {
        console.log("What! you both have the same name?");
        break
    }
}
