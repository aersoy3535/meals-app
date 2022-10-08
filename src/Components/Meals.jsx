import { useGlobalContext } from '../context'
import { FcLike, FcDislike } from 'react-icons/fc'

const Meals = () => {

  

  const { meals, loading, selectedMeal, selectMeal, removeFromFavorites, addToFavorites, darkMode, favorites } = useGlobalContext()

  
  function decideLikeButton(favorites,idMeal){


    if(favorites.length<1){
      return(
        <FcLike />
      )     

    }
    else if(favorites.length>0){
      for (let i=0; i<favorites.length; i++){
        if(favorites[i].idMeal === idMeal){
          return(
            <FcDislike onClick={() => {

              removeFromFavorites(idMeal)

            }}/>
          )
        }
      }
      return(
        <FcLike />
      )
    }
  }

  var loadingImage = require('../images/spin-loading.gif')

  if(loading){
    return <section className="loading">
      <img src={loadingImage} alt="Loading Image"/>
    </section>
  }

  else if (meals.length < 1) {
    return <section className={darkMode ? "section-notfound-dark" : "section-notfound"}>
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }

  return <section className={"section-center"}>
    {meals.map((singleMeal) => {
      const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
      return <article key={idMeal} className={darkMode? "single-meal-dark": "single-meal"}>
        <img src={image} className='img' alt={image} onClick={() => selectMeal(idMeal)} />
        <footer>
          <h5>{title}</h5>
          <button className="like-btn" onClick={() => { 
                
          addToFavorites(idMeal) 
                      
          }
          }> 
          {
            decideLikeButton(favorites, idMeal)
              
          }
           </button>
        </footer>
      </article>
    })}
  </section>



}

export default Meals