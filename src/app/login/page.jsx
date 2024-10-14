'use client'

import React, { useEffect,useState } from 'react';
import { collection,getDocs,deleteDoc,doc } from 'firebase/firestore';
import { db } from '@/firebaseConnect';
import { IoMdLogIn } from "react-icons/io";
import { toast } from 'react-toastify';
import Image from 'next/image';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";


import draco from '../draco.png'
import Link from 'next/link';

const Home = () => {
  const [login,setLogin]=useState(false)
  const [usuario,setUsuario]=useState('')
  const [password,setPassword]=useState('')
  const [users, setUsers] = useState([]);


  function handleLogin(){
    if (usuario==='admin'&& password==='784951623'){
      toast.success("Login")
      setLogin(true)
      setUsuario('')
      setPassword('')
    } else{
      toast.error("Usuário ou senha incorretos.");
    }
    
  }
function handleLogout(){
  setLogin(false)
  toast.info("Logout realizado com sucesso.");
}
async function handleDelete(id){
  alert(id)
  try{
    const docRef=doc(db,'users',id)
    await deleteDoc(docRef)
    toast.success("Usuário deletado com sucesso.");
  }catch(err){
    console.log(err)
    toast.error("Error ao deletar usuário")
  }
}
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersData = [];
        
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });

        setUsers(usersData); // Atualiza o estado com os dados dos usuários
      } catch (e) {
        console.error('Erro ao buscar usuários: ', e);
      }
    };

    fetchUsers();
  }, [users]);

  if (login===true){
    return(
      <div className="p-4 bg-zinc-900 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 bg-zinc-800 rounded shadow">
              <h2 className="font-semibold">{user.nome}</h2>
              <p >{user.idade}</p>
              <p>Número: {user.numero}</p>
              <p>Instagram: {user.instagram}</p>
              <FaTrashAlt color='red' onClick={() => handleDelete(user.id)} />

            </li>
          ))}
        </ul>
        <IoMdLogIn size={25} color='red' onClick={handleLogout}/>
        
      </div>
    )
  }else{
    return(
      <div className="p-4 bg-zinc-900 min-h-screen flex justify-center flex-col items-center">
        <Image src={draco} width={200}   />
        <h1 className="text-2xl font-bold mb-4">Faça o login</h1>
        <div className="space-y-2 flex flex-col min-w-96 ">
          <input
            placeholder='Digite o usuario'
            type='text'
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="p-2 border border-zinc-700 rounded text-black"
          />
          <input
            placeholder='Digite a senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-zinc-700 rounded text-black"
          />
          <button className='bg-custom-yellow text-white p-2 rounded' onClick={handleLogin}>
            Login
          </button>
          <Link href={"/"}>
            <IoReturnDownBackOutline size={25} color='#F3B118' />
          </Link>

          
        </div>
      </div>
    )
  }

 
};

export default Home;
