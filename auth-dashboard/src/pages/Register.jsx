import {useState} from "react";
import { useNavigate, Link} from "react-router-dom";









function Register(){

     const [ email, setEmail] = useState("");

     const [ password, setPassword] = useState("");

     const navigate = useNavigate();


     function handleRegister(){
        const user = {
        email,
        password,
    };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    navigate("/");
     }


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

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
          onClick={handleRegister}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Har du bruker?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>

);


 

  
}

export default Register;