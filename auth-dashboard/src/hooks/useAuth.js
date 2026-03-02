import { useNavigate} from "react-router-dom";

 function useAuth(){

    const navigate = useNavigate();


    function register(email, password){

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const usersExists = existingUsers.some(
            (user) => user.email === email
        );
        if(usersExists){
            return { success: false, message: "Email already registred"}
        }

        const newUser = { email, password};
        const updatedUsers = [...existingUsers, newUser];

        localStorage.setItem("users" , JSON.stringify(updatedUsers));

        return { success: true};

    }


    function login (email, password){

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (user) =>
                user.email === email &&
            user.password === password
        );

        if(foundUser){
            localStorage.setItem("user", JSON.stringify(foundUser));
            return { success: true}
        }

        return {success: false, message: "Invalid credentials" } ;

    }

    function logout(){
        localStorage.removeItem("user");
        navigate("/");
    }

    function getCurrentUser(){
     return JSON.parse(localStorage.getItem("user"));
    }

    return {

        register,
        login,
        logout,
        getCurrentUser,
    };

}

export default useAuth;