import { useEffect } from 'react';
import style from './Details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCatBreedDetails, getCatBreedImages, clearCatDetails, clearCatImages } from '../../redux/actions';
import catSilhouette from '../../img/Cat-silhouette.jpg';
import Scale from '../Scale/Scale';
import Loader from '../Loader/Loader';


function Details() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);

  const navigate = useNavigate();
  const params = useParams();
  const id = Object.values(params).toString();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatBreedDetails(id));

    return () => {
      dispatch(clearCatDetails());
      dispatch(clearCatImages());
    }
  }, [dispatch, id]);


  const catBreedDetails = useSelector((state) => state.catBreedDetails);
  let catImage = useSelector((state) => state.catImage);

  useEffect(() => {
    if (catBreedDetails && catBreedDetails.reference_image_id) {
      dispatch(getCatBreedImages(catBreedDetails.reference_image_id));
    }
    return () => {
      dispatch(clearCatImages());
    };
  }, [dispatch, catBreedDetails]);


  return (
    <div className={style.container}>

      <a onClick={() => navigate(-1)}>← GO BACK</a>
      {
        Object.keys(catBreedDetails).length !== 0
          ? (
            <div className={style.row}>
              <div className={style.catImageContainer}>
                {
                  Object.keys(catImage).length !== 0
                    ? (
                      <div className={style.overlap}>
                        <div className={style.decoration}></div>
                        <img className={style.catImage} src={catImage.url} alt="cat" />
                      </div>
                    )
                    : (
                      <div className={style.overlap}>
                        <img className={style.catImage} src={catSilhouette} alt="default cat" />
                      </div>
                    )
                }
              </div>
              <div className={style.column}>
                <p className={style.title}>{catBreedDetails.name}</p>
                <p className={style.description}>{catBreedDetails.description}</p>
                <p className={style.text}>
                  <b className={style.textB}>Temperament: </b>
                  {catBreedDetails.temperament}
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Origin: </b>
                  {catBreedDetails.origin}
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Adaptability: </b>
                  <Scale number={catBreedDetails.adaptability} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Affection level: </b>
                  <Scale number={catBreedDetails.affection_level} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Child friendly: </b>
                  <Scale number={catBreedDetails.child_friendly} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Grooming: </b>
                  <Scale number={catBreedDetails.grooming} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Intelligence: </b>
                  <Scale number={catBreedDetails.intelligence} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Health issues: </b>
                  <Scale number={catBreedDetails.health_issues} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Intelligence: </b>
                  <Scale number={catBreedDetails.intelligence} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Social needs: </b>
                  <Scale number={catBreedDetails.social_needs} />
                </p>
                <p className={style.text}>
                  <b className={style.textB}>Stranger friendly: </b>
                  <Scale number={catBreedDetails.stranger_friendly} />
                </p>
              </div>
            </div>
          ) : <div className={style.loader}>
            <Loader />
          </div>
      }
    </div>
  )
}

export default Details;