import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";




function Login(){

    const [ email ,setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const navigate = useNavigate();


    function handleLogin(){

        const savedUser = JSON.parse(
            localStorage.getItem("registeredUser")
        );

        if(
            savedUser &&
            savedUser.email === email &&
            savedUser.password === password
        )
        
        {
            localStorage.setItem("user", JSON.stringify(savedUser));
            navigate ("/dashboard");
        }else{
            alert("Feil email eller password")
        }
    }

return(

     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Ingen bruker?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>

)
}

export default Login;