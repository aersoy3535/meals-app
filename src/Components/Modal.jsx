import { useGlobalContext } from '../context'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';



const Modal = () => {

  const { closeModal, selectedMeal, darkMode } = useGlobalContext();

  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source, strYoutube: youtubeLink } = selectedMeal

  const videoId =  youtubeLink.split("=")[1];
  
  return (
    <aside className="modal-overlay">
      <div className={darkMode ? "modal-container-dark" :"modal-container"}>
        <img src={image} alt={title} className="img modal-img" />
        <div className={darkMode ? "modal-content-dark" : "modal-content"}>
          <h4>{title}</h4>
          <p> Cooking Instructions</p>
          <p>{text}</p>
          <div className="modal-youtube">
            <LiteYouTubeEmbed 
              id={videoId}
              adNetwork={true}
              playlist= {false}
              //poster={`https://img.youtube.com/vi/${videoId}/2.jpg`} <--! Doesn't work with some videos and show an ugly ass thumbnail --!>
              noCookie={true}
              muted={true}
            />
          </div>
          <a href={source} target="_blank">Original Source</a>
          <button className={darkMode ? "btn btn-hipster-dark close-btn":"btn btn-hipster close-btn"} onClick={closeModal}>Close</button>
        </div>
      </div>
    </aside>
  )

}

export default Modal