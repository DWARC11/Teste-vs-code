const escola = "Cod3r";

console.log(escola.charAt(4), escola.charAt(3), escola.charAt(2), escola.charAt(1), escola.charAt(0));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e"));

console.log("escola " + escola + "!");
console.log(("casa").concat("mento"));
console.log("casa" + "mento");

console.log("Qualquer Coisa");
console.log("\n Qualquer Outra Coisa");

console.log(escola.replace(/\w/g, 'e'));// O comando /\w/g é usado para selecionar todos os digitos da palavra e /\d/g é usado para selecionar todos os digitos
console.log(escola.replace(3, 'e'));

