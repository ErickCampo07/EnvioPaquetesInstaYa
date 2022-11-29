import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => { 
    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate("/");
    }
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="ejemplo@email.com"
                    aria-describedby="emailHelp"></input>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="exampleInputPassword1"></input>
            </div>
            <div class="mb-3 form-check">
                <input 
                    type="checkbox" 
                    class="form-check-input" 
                    id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={()=> handleOnClick()}>Iniciar sesión</button>
        </form>
    );
};

export default Login;
