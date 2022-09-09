import './style.css';
import { useState } from 'react';
import api from "../../services/api"
import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"



function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!email || !nome || !senha) {

                console.log("preencha todos os campos!");
                return;
            }
            const response = await api.post("/Register", {
                nome,
                email,
                senha
            })
            console.log(response)


        } catch (error) {
            console.log(error.response.data.message)

        }
        navigate("/SignIn");
    }

    return (
        <div className='container'>
            <img className='logo' src={Logo} alt='Logo' />
            <div >
                <div className='full-1'>
                    <form className='document' onSubmit={handleSubmit}>
                        <h1>Cadastre-se</h1>
                        <label>Nome</label>
                        <input
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <label>E-mail</label>
                        <input
                            type='text'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Senha</label>
                        <input
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}

                        />
                        <label>Confirmacao de senha</label>
                        <input
                            type='password'
                            placeholder=''
                        />
                        <button
                            onClick={() => handleSubmit()}
                        >
                            Cadastrar
                        </button>
                        <span className="link">ja tem cadastro? clique aqui</span>

                    </form>
                </div>

            </div>
        </div >
    );
}


export default Register;
