
const form = document.querySelector('.form'); //recebendo o form
    

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const inputPeso = e.target.querySelector('.peso'); //recebendo o inputPeso
        const inputAltura = e.target.querySelector('.altura'); //recebendo o inputAltura
        
        const peso = Number(inputPeso.value);       //recebendo o valor guardado em peso e tranformando em número
        const altura = Number(inputAltura.value);   //recebendo o valor guardado em altura e tranformando em número
        
        if(!peso){
            setResultado('Peso Inválido.', false);      //se o valor de peso for NaN ele manda falso para o resultado e exibe peso inválido
            return;
        }

        if(!altura){
            setResultado('Altura Inválido.', false);     //se o valor de altura for NaN ele manda falso para o resultado e exibe altura inválido   
            return;
        }

        const imc = getImc(peso, altura);   //função que calcula o IMC
        const nivelImc = getNivelImc(imc);  //função que mostra seus resultados

        const msg =  `Seu IMC ${imc} (${nivelImc})`;

        setResultado(msg, true);
    });

 /*
Menos do que 18,5
Entre 18,5 e 24,9
Entre 25 e 29,9
Entre 30 e 34,9
Entre 35 e 39,9
Mais do que 40
 */

// função para mostrar o resultado
    function getNivelImc (imc){
        const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (imc >= 39.9){
            return nivel[5];
        }
        if (imc >= 34.9){
            return nivel[4];
        }
        if (imc >= 29.9){
            return nivel[3];
        }
        if (imc >= 24.9){
            return nivel[2];
        }
         if (imc >= 18.5){
            return nivel[1];
        }
        if (imc < 18.5){
            return nivel[0];
        }
    }

        //função para calcular o IMC
    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);

    }

        //função que cria parágrafos
    function criaP (className){
        const p = document.createElement('p');
        return p;

    }

        //função para exibir o resultado em parágrafos chamando a função acima
    function setResultado (msg, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        }else{
            p.classList.add('bad');
        }


        p.innerHTML = msg;
        resultado.appendChild(p);
    }
