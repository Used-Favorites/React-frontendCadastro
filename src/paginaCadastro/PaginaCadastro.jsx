import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import "./Cadastro.css"

const PaginaCadastro = () => {
   
  const [username, setUsername] = useState ("");
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  const handleSubmit= (e) => {
      e.preventDefault();
     alert("Enviando os dados:" +username + " - " + email + " - " + password)
  }


  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="header">
              <img src="\src\assets\cadastrar-tcc.jpeg"></img>
              <hr></hr>
              <h1>Inscrever-se</h1>
              <p>Crie uma conta para começar</p>   
            </div>

        <div>
          <div className="Input-Nome">
            <label>Nome</label>
            <input type="text" placeholder='Digite seu nome'
            onChange={(event)=> setUsername(e.target.value)}></input>
          </div>

          <div className="Input-Email">
            <label>Endereço de email</label>
            <input type="email" placeholder='Digite seu email'
            onChange={(event)=> setEmail(e.target.value)}></input>
            <FaUser className='icon'></FaUser>
          </div>

          <div className="Input-Senha">
            <label>Senha</label>
            <input type="password" placeholder='Crie uma senha'
            onChange={(event)=> setPassword(e.target.value)}></input>
            <FaLock className='icon'></FaLock>
            <input type="password" placeholder='Confirme sua senha'
            onChange={(event)=> setPassword(e.target.value)}></input>
            <FaLock className='icon'></FaLock>
          </div>
        </div>

        <div className="BoxEnd">
            <p>Já tem cadastro? <a href='#'>Entre agora</a></p>
            <label>
              <input type='checkbox'/>
              Li e concordo com os <a href='#'>Termos e Condições e a Política de Privacidade</a>
            </label>
          </div>

          <div className="Button">
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaginaCadastro
