const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

    const tempClient = {
        nome: "Fernando",
        email: "fernandogmail@gmail.com",
        celular: "123456789",
        cidade: "rio de janeiro"
    }
// CRUD
const createClient = (client) => {
    const db_client = []
    db_client.push(client)
    localStorage.setItem('db_client',JSON.stringify(db_client))
}

    // EVENTOS 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)