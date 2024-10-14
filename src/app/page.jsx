"use client"
import { useState } from 'react';
import {db} from '../firebaseConnect'
import {doc,setDoc,collection} from 'firebase/firestore'
import Image from 'next/image';
import draco from './draco.png'
import { IoMdLogIn } from "react-icons/io";
import Link from 'next/link';
import { toast } from 'react-toastify';


export default function Home() {
  const [nome,setNome]=useState('')
  const [idade,setIdade]=useState('')
  const [numero,setNumero]=useState('')
  const [instagram,setInstagram]=useState('')

  async function handleRegister() {
    if (nome==='' || numero===''||instagram===''){
      alert('Preencha todos os campos')
      return
    }
    const userData ={
      nome,
      idade,
      numero,
      instagram
    }
    try{
      const docRef=doc(collection(db,'users'))
      await setDoc(docRef,userData)
      toast.success(`Nome: ${nome}, Número: ${numero}, Instagram: ${instagram}`);
      setNome('')
      setIdade('')
      setNumero('')
      setInstagram('')
    }catch(e){
      console.log(e)
    }
    

    
  } 
  


  return (
    <div className="grid bg-zinc-900 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <div className='w-full max-w-md flex flex-col items-center justify-center mx-4'>
      <Image src={draco} width={200} />
      <h1 className="text-3xl sm:text-4xl font-bold mt-3 text-white">Draco Suplemento</h1>
    </div>
    
    <div className='flex flex-col min-h-80 justify-around w-full max-w-mdmx-4'>
      <input placeholder='Seu nome' type='text' value={nome} className='p-3 rounded text-black' onChange={(e) => setNome(e.target.value)} />
      <input placeholder='Sua idade' type='text' value={idade} className='p-3 rounded text-black' onChange={(e) => setIdade(e.target.value)} />
      <input placeholder='Seu número' type='text' value={numero} className='p-3 rounded text-black' onChange={(e) => setNumero(e.target.value)} />
      <input placeholder='Seu Instagram' type='text' value={instagram} className='p-3 rounded text-black' onChange={(e) => setInstagram(e.target.value)} />
      <button onClick={handleRegister} className='bg-yellow-500 font-semibold text-black rounded p-3 my-1'>
        Cadastrar
      </button>
    </div>

    <Link
      className="flex text-center text-gray-500 gap-1 hover:underline hover:underline-offset-4"
      href="/login"
      rel="noopener noreferrer"
    >
      <IoMdLogIn size={25} color='#F3B118' />
    </Link>
  </main>

  <footer className="row-start-3 flex gap-3 flex-wrap items-center justify-center">
    <p className="text-sm text-gray-500">Desenvolvido por:</p>
    <a
      className="flex items-center text-gray-500 gap-1 hover:underline hover:underline-offset-4"
      href="https://www.instagram.com/robsonluan95/"
      target="_blank"
      rel="noopener noreferrer"
    >
      @RobsonLuan95
    </a>
  </footer>
</div>
  );
}
