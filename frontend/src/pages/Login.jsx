import axios from "axios";
export default function Login() {
    function createAccount() {
        axios.get(`http://localhost:8080/create-account`)
      }

  return (
    <>
     <p className="text-cyan-700 text-2xl font-bold">Good morning.</p>
     <button className="p-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl" onClick={createAccount}>Create</button>   
    </>
  );
}
