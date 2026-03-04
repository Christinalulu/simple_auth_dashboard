import useAuth from "../hooks/useAuth";

function Navbar(){


    const { getCurrentUser, logout} = useAuth();
    const user = getCurrentUser();



    return (

         <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">
        Welcome, {user?.email}
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>

    );



}
export default Navbar;