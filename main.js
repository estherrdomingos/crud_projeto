const openModal = () => document.getElementById('modal')
    .classList.add('active')

    const closeModal = () => {
        clearFields()
        document.getElementById('modal').classList.remove('active')
    }

    const tempClient = {
        nome: "nikolas",
        email: "nikinho@gmail.com",
        celular: "123456789",
        cidade: "sao roque"
    }

    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
// CRUD -----------------------------------------------------------------------------------------
// CRUD CREATE------------------------------------------------------------------------------------
const updateClient = (index, client) => {
const dbClient = readClient()
dbClient[index] = client
}
// CRUD READ----------------------------------------------------------------------------------------------
const readClient = () => getLocalStorage()
// CRUD CREATE ----------------------------------------------------------------------------------------------
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

    // EVENTOS 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
