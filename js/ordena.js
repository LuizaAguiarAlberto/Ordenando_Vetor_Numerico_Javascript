
var acumu=0;
function ordena(vetor){
    for(var i=0; i<=10; i++){
        for(var j=i; j<=10; j++){
            if(vetor[i]>vetor[j]){
                 acumu=vetor[i];
                 vetor[i]=vetor[j];
                 vetor[j]=acumu;
            }

        }  
        
    }
    for(var i=0; i<=10; i++){
        console.log(vetor[i]);
    }
}

var vetor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
ordena(vetor);
console.log(vetor);