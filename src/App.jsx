
import './App.css'
import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'
import axios from 'axios'

// Componente do React é ASSIM
// 1) Função (Código muitoooo antigos, pode ser uma classe)
// 2) Ele tem um return
// Fora do Return / Código JavaScript
// Dentro do Return / Código "HTML"

// useState(Estado do React)
// Estado - Super Variável
// Não fica CARREGANDO a tela por nada, e nem a tela toda

function App() {
  const [name, setName] = useState("Rodolfo")
  const [email, setEmail] = useState("rod@maul.com")
  const [age, setAge] = useState(33)
  const [users, setUsers] = useState([])

  useEffect(() => {

    async function buscarUsuarios() {
      const resposta = await axios.get('https://api.gestordevclub.com/usuarios')

      setUsers(resposta.data)
    }

    buscarUsuarios()
  }, [])




  // 1) Variavel em si, que eu pego o valor dela
  // 2) (set) uma funcao para colocar o valor dentro da variavel

  async function handleSubmit(event) {
    event.preventDefault()

    await axios.post('https://api.gestordevclub.com//usuarios', {
      nome: name,
      email,
      idade: age
    })
  }


  return (

    <div className='app'>
      <h1>Cadastro de Usuários</h1>


      <form onSubmit={handleSubmit}>
        <input
          placeholder='Nome'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          placeholder='Email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          placeholder='Idade'
          type='number'
          value={age}
          onChange={event => setAge(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>

      </form>

      <div className='user-list'>

        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}

        {/* CORS
          Cross-Origin Resource Sharing 
          (Compartilhamento de Recursos entre Origens Diferentes, em português).
        

          BACK END - BLOQUEIA ACESSOS DE OUTROS ENDEREÇOS POR SEGURANÇA
        */}

      </div>

    </div>
  )
}

export default App
