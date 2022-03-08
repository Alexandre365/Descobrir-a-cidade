document.getElementById('sea').addEventListener('input', updateValue);

function updateValue(e) {
    let ulr = `https://viacep.com.br/ws/${e.target.value}/json/`

    fetch(ulr)
    .then(Response => Response.json())
    .then((id)=>{
        console.log(id)
        document.getElementById('txt').innerHTML = `
        <div class='Card'>
            <h2>CEP: ${id.cep}</h2>
            <div>
                <p>Estado: ${id.uf}</p>
                <P>Cidade: ${id.localidade}</p>
                <P>Bairro: ${id.bairro}</p>
                <P>Endereço: ${id.logradouro}</p>
            </div>
        </div>
        `
    })
}