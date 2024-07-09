/*ACESSO E ALTERAÇÃO DE VALORES*/
	const bubble = (v) => {
	let ordenado = false;
	while(!ordenado){
		ordenado = true;
		for(let i=1; i<.length;i++)
		if(v[i-1] > v[i]){
			const aux = v[i]; v[i] = v[i-1];
			v[i-1] = aux;	ordenado = false;
		}
	}
}
const valores = [3,1,7,8,4];
console.log(valores);
bubble(valores);
console.log(valores);


/*MATRIZES, VETORES, METODO FLAT*/
const matriz = [[1,2],[3,4],[5,6]];
console.log(matriz);
const vetor = matriz.flat();
console.log(vetor);


/*INCLUSÃO DE ELEMENTOS*/
/* push = INCLUI elemento no final do vetor
unshift = INCLUI elemento no inicio do vetor */
const valores = [3,1,7,8,4]
console.log(valores); //3,1,7,8,4
valores.push(5);
console.log(valores); //3,1,7,8,4,5
valores.unshift(6);
console.log(valores); //6,3,1,7,8,4,5


/*REMOÇÃO DE ELEMENTOS*/
/* pop = REMOVE elemento no final do vetor
   shift = REMOVE elemento no inicio do vetor */
const valores = [6,3,1,7,8,4,5]
console.log(valores); //6,3,1,7,8,4,5
console.log(valores.shift()); //6
console.log(valores); //3,1,7,8,4,5
console.log(valores.pop()); //5
console.log(valores); //3,1,7,8,4


/*JUNÇÃO DE VETORES - Método CONCAT*/
const array1 = ["Cecilie","Lone"];
const array2 = ["Emil","Tobias","Linus"];
const array3 = ["Robin","Morgan"];
const myChildren = 
		array1.concat(array2, array3);
document.getElementById("demo").innerHTML = myChildren;


/*MANIPULAÇÃO COM VETORES  - Copia com SLICE*/
const dias = 
["dom","seg","ter","qua","qui","sex","sab"];
const dias_uteis = dias.slice(1,6); //inicio e fim+1
console.log(dias);
console.log(dias_uteis);


/*MANIPULAÇÃO COM VETORES  - INCLUSÃO E REMOÇÃO com SPLICE*/
/* splice(2,3) quer dizer = a partir da posição 2 remova 3 elementos
splice(2,0,"X","X") quer dizer = a partir da posição 2, não remova nada e 
coloque X,X */

const vetor = [1,2,3,4,5,6,7];
console.log(vetor); //1,2,3,4,5,6,7
vetor.splice(2,3);
console.log(vetor); //1,2,6,7
vetor.splice(2,0,"X","X");
console.log(vetor); //1,2,X,X,6,7























