// Iteration 1: Names and Input

let hacker1 = "Amine";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Gladys";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    )
};

// Iteration 3: Loops

let hacker1String = ""

for (let i = 0; i < hacker1.length; i++) {
    let hacker1Loop = hacker1.charAt(i)

    hacker1String = hacker1String + hacker1Loop.toUpperCase() + " "
    // === hacker1String += hacker1Loop.toUpperCase() + " "
}
console.log("i get", hacker1String);
