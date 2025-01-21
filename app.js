
let lim = 10;                //Limite de amigos
let arry = [];  //Creacion del espacio para los nombres
let contador = 0;           //Contador de ingresos
//Funcion para agrearlo en la lista de arry
function agregarAmigo() {
    if(contador < lim){
        let amigo = validor();
        if (amigo) {
            arry.push(amigo);
            contador++;
            mostrarAmigos();
        }
    }else{
        alert('Limite '+lim+' de nombres de grupo de amigos');
    }
    document.querySelector('#amigo').value = '';
    document.getElementById('resultado').innerHTML = '';

}

function sortearAmigo(){
    document.querySelector('#resultado').innerHTML = ''; // Limpiar el contenido anterior
    if(contador >= 2){
        let resultado = document.getElementById('resultado');
        let i = Math.floor(Math.random() * contador);
        let amigoSecreto = arry[i];
        
        // Crear y agregar el elemento <li> a la lista de resultados
        let li = document.createElement('li');
        li.textContent = `Amigo secreto: ${amigoSecreto}`;
        resultado.appendChild(li);
        
    } else {
        document.querySelector('#alert').innerHTML = 'Necesitas mínimo 2 personas registradas';
    }
}

//Validador y conversion de texto con el siguiente formato {0}[A-Z]{1-...}[a-z]
function validor(){
    let text = document.getElementById('amigo').value;
    text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    if (!(text === '')){
        //Metodo para ver si ya existe un nombre igual
        let similitud = arry.some(
            function(item) {
                return item.toLowerCase() === text.toLowerCase(); 
            });
            if(!(similitud)){
                return text;
            }else{
                document.querySelector('#alert').innerHTML = 'Ya existe el nombre '+text+' ingrese otro nombre';
            }
    }
    return false;
}

//Mostrar listado de amigos
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    // Limpiar la lista antes de agregar nuevos elementos
    arry.forEach(function(amigo){
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}