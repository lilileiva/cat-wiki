import { Link } from 'react-router-dom';
import style from './Card.module.css';
import catSilhouette from '../../img/Cat-silhouette.jpg';


function Card({ cat, counter }) {

  return (
    <div className={style.cardContainer}>
      <div className={style.catImageContainer}>
        <Link to={`/breeds/${cat.id}`}>
          {cat.image ? <img className={style.catImage} src={cat.image.url} alt='cat' /> : <img className={style.catImage} src={catSilhouette} alt='cat' />}
        </Link>
      </div>
      <div>
        <Link to={`/breeds/${cat.id}`}>
          <p className={style.title}>{counter}. {cat.name}</p>
        </Link>
        <p className={style.text}>{cat.description}</p>
      </div>
    </div>
  )
}

export default Card;