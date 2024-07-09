document.addEventListener("DOMContentLoaded", function() {


        
        //let urlVariavel = 4;
        let num = 7

        /*
        let ContainerVariavel = 3
        */

    
        fetch('http://localhost:8080/exibir/' + num)
            .then(response => response.json())
            .then(data => {

                var NovoParagrafo = document.createElement("h1");
                NovoParagrafo.textContent = data.pais;

                var Capital = document.createElement("p");
                Capital.textContent = "capital: " +data.capital;

                var Continente = document.createElement("p")
                Continente.textContent = "continente: " + data.continente;

                var Idioma = document.createElement("p")
                Idioma.textContent = "idioma: "+ data.idioma;

                var Presidente = document.createElement("p")
                Presidente.textContent = "presidente: " + data.presidente;
                
                    var Container = document.getElementById("container-pais2");
                    Container.appendChild(NovoParagrafo)
                    Container.appendChild(Capital)
                    Container.appendChild(Continente)
                    Container.appendChild(Idioma)
                    Container.appendChild(Presidente)

            })

            .catch(error => console.error('Erro ao buscar dados:', error));


});

