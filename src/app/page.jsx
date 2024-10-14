"use client"
import { useState } from 'react';
import {db} from '../firebaseConnect'
import {doc,setDoc,collection} from 'firebase/firestore'
import Image from 'next/image';
import draco from './dracocom.png'
import { IoMdLogIn } from "react-icons/io";
import Link from 'next/link';
import { toast } from 'react-toastify';
import WhatsAppButton from './components/whats';
import { IoLogoWhatsapp } from "react-icons/io5";
export default function Home() {
  const [nome,setNome]=useState('')
  const [idade,setIdade]=useState('')
  const [numero,setNumero]=useState('')
  const [instagram,setInstagram]=useState('')
  const phoneNumber = '5587999611853'; // Exemplo: +55 11 99999-9999
  const message = 'Faala Monstrinhoo! 😎👊🏼 Gostaria de dar um UP no Shape com seus produtos'; // Mensagem pré-definida


  async function handleRegister() {
    if (nome==='' || numero===''||instagram===''){
      toast.error('Preencha todos os campos')
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
  
  function handleWhats(){
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,'_blank')
  }


  return (
    <div className="grid bg-zinc-900 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <div className='w-full max-w-md flex flex-col items-center justify-center mx-4'>
      <Image className='b' src={draco} width={320} quality={80} />
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
    <div onClick={handleWhats} className='flex justify-center items-center space-x-2 rounded-sm'>
      <a>Chama no Whats!</a>
      <IoLogoWhatsapp color='#34D399' size={50}/>
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
    >@RobsonLuan95
    </a>
  </footer>
</div>
  );
}
