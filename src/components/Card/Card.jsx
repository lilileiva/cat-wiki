import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';
import catSilhouette from '../../img/Cat-silhouette.jpg';


function Card({ cat, counter }) {

  return (
    <div className={style.cardContainer}>
      <div className={style.catImageContainer}>
        {
          cat.idBreed
            ? <Link to={`/breed/${cat.idBreed}`}>
              {cat.image ? <img className={style.catImage} src={cat.image} alt='cat image' /> : <img className={style.catImage} src={catSilhouette} alt='cat image' />}
            </Link>
            : <Link to={`/breed/${cat.id}`}>
              {cat.image ? <img className={style.catImage} src={cat.image} alt='cat image' /> : <img className={style.catImage} src={catSilhouette} alt='cat image' />}
            </Link>
        }
      </div>
      <div>
        {
          cat.idBreed
            ? <Link to={`/breed/${cat.idBreed}`}>
              <p className={style.title}>{counter}. {cat.name}</p>
            </Link>
            : <Link to={`/breed/${cat.id}`}>
              <p className={style.title}>{counter}. {cat.name}</p>
            </Link>
        }
        <p className={style.text}>{cat.description}</p>
      </div>
    </div>
  )
}

export default Card;