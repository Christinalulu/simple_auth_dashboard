import { useNavigate } from "react-router-dom";



function Dashboard(){

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  


 return (
 <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-white text-4xl">Dashboard</h1>
    </div>

 );

}

export default Dashboard;