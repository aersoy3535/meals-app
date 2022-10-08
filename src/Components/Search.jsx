import { useContext, useEffect, useState } from 'react';
import { AppContext, AppProvider, useGlobalContext } from '../context'
import Toggle from 'react-toggle'
import { BsSun } from 'react-icons/bs'
import {MdOutlineNightlight} from 'react-icons/md'



const Search = () => {

  const { setSearchTerm, fetchRandomMeal, setRefresh, setDarkMode, darkMode } = useGlobalContext();

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value)

  }

  function handleSubmit(e) {
    if (text) {
      e.preventDefault()
      setSearchTerm(text)
      setText('')
    }
    else if (text === ''){
      setSearchTerm('')
    }
  }

  function handleRandomMeal() {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  function darkModeToggler(){
    setDarkMode(!darkMode)
  }

  useEffect(() => {

    localStorage.setItem('dark-mode', darkMode )


  },[darkMode])

  


  return (
    <header className={darkMode ? "search-container-dark":"search-container"}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type favorite meal" className="form-input" onChange={handleChange} value={text} />
        <button type="submit" className="btn">Search</button>
        <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Suprise Me</button>
      </form>
      <div>
        <label htmlFor="material-switch">
          <Toggle
            checked= {darkMode}
            onClick={darkModeToggler}
            icons={{
              checked: <MdOutlineNightlight
                        color="white" />,
              unchecked: <BsSun
                          color="yellow" />,
            }}
          />
        </label>
      </div>
    </header>

  )

}


export default Search