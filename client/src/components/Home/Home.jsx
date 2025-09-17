import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';
import cover from '../../img/HeroImagelg.png';
import logo from '../../img/CatwikiLogo.svg';
import image1 from '../../img/image 1.png';
import image2 from '../../img/image 2.png';
import image3 from '../../img/image 3.png';
import catSilhouette from '../../img/Cat-silhouette.jpg';
import { getCatBreeds, clearCatBreeds, clearSearchbar } from '../../redux/actions';


function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearSearchbar());
        dispatch(getCatBreeds());

        return () => {
            dispatch(clearCatBreeds())
        }
    }, [dispatch])

    let catBreeds = useSelector((state) => state.catBreeds);
    catBreeds = catBreeds.slice(0, 4)

    return (

        <div className={style.container}>

            <div className={style.homeContent}>
                <div className={style.imageBottom}>
                    <img className={style.coverImage} src={cover} alt='cover' />
                </div>
                <div className={style.imageTop}>
                    <div className={style.searchbarStack}>
                        <img className={style.logo} src={logo} alt='logo' />
                        <p>Get to know more about your cat breed</p>
                        <Searchbar />
                    </div>

                </div>
            </div>

            <div className={style.discoverBreeds}>
                <div>
                    <p>Most Searched Breeds</p>
                    <div className={style.subLine}></div>
                </div>
                <div className={style.breedsForYou}>
                    <h1 className={style.title}>66+ Breeds for you to discover</h1>
                    <Link to='/breeds'>
                        <span>SEE MORE →</span>
                    </Link>
                </div>
                <div className={style.catImages}>
                    {
                        catBreeds.length !== 0
                            ? catBreeds.map((cat) => (
                                <Link to={`/breeds/${cat.id}`} >
                                    {console.log(cat)}
                                    {cat.image
                                        ? <img className={style.catImage} src={cat.image.url} alt='cat' />
                                        : <img className={style.catImage} src={catSilhouette} alt='cat' />
                                    }
                                    <p>{cat.name}</p>
                                </Link>
                            ))
                            : <div className={style.loader}>
                                <Loader />
                            </div>
                    }
                </div>
            </div>


            <div className={style.readMoreSection}>
                <div className={style.left}>
                    <div className={style.subLine}></div>
                    <h1 className={style.title}>Why should you have a cat?</h1>
                    <p>Having a cat around you can actually trigger the release of calming chemicalsin your body which lower your stress and anxiery leves</p>
                    <a href='https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner' rel="noreferrer" target='_blank'>
                        READ MORE →
                    </a>
                </div>
                <div className={style.right}>
                    <div className={style.images12}>
                        <img className={style.image2} src={image2} alt='cat 2' />
                        <img className={style.image1} src={image1} alt='cat 1' />
                    </div>
                    <img className={style.image3} src={image3} alt='cat 3' />
                </div>
            </div>
        </div>
    )
}

export default Home;