import './style.css';
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom"


function SignIn() {
    const navigate = useNavigate();
    return (
        <div className='container-main'>
            <div className="Logo">

                <img src={Logo} alt="Logo" />
            </div>
            <div className='full'>
                <div className='aside'>
                    <h1>Controle suas <span>finanças</span>,<br></br>
                        sem planilha chata. </h1>
                    <p>Organizar as suas finanças nunca foi tão fácil,<br></br>
                        com o DINDIN, você tem tudo num único lugar<br></br>
                        e em um clique de distância.</p>

                    <button on onClick={() => navigate("/")}>
                        Cadastre-se
                    </button>
</div>

<div >
                    <form className="login">
                        <h1>Login</h1>
                        <div>
                            <label>E-mail</label>
                            <input
                                type='text'
                            />
                            <label>Password</label>
                            <input
                                type='text'
                            />
                        </div>
                        <button
                            type='button'
                            onClick={() => navigate("/main")}>
                            Entrar
                        </button>
                    </form>
                </div>




            </div>
        </div>






    );
}







export default SignIn;
