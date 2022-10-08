import './App.css'
import { useGlobalContext } from './context'
import Favorites from './Components/Favorites'
import Meals from './Components/Meals'
import Modal from './Components/Modal'
import Search from './Components/Search'
import {Helmet} from 'react-helmet';
import { useEffect } from 'react'



export default function App() {

  const { showModal, favorites, darkMode } = useGlobalContext();

  function useDisableBodyScroll(showModal){
    useEffect(() => {
      if(showModal){
        document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = 'unset';
      }

    },[showModal])
  }
  
  useDisableBodyScroll(showModal)

  return (
    <main className='main'>
      <Helmet>
        <style>
          {darkMode ? 'body {background-color: black}':''}
        </style>
      </Helmet>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}
