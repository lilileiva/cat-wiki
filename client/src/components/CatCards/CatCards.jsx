import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CatCards.module.css';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { getCatBreedByName, clearCatBreedsByName, getCatBreeds } from '../../redux/actions';
import { Link } from 'react-router-dom';


function CatCards() {
    const dispatch = useDispatch();

    let catBreeds = useSelector((state) => state.catBreeds);
    catBreeds = catBreeds.slice(0, 10);
    const catBreedsByName = useSelector((state) => state.catBreedsByName);
    const searchbar = useSelector((state) => state.searchbar);

    useEffect(() => {
        if (searchbar !== "") {
            dispatch(getCatBreedByName(searchbar));
        } else {
            dispatch(getCatBreeds());
        }

        return () => {
            dispatch(clearCatBreedsByName())
        }
    }, [dispatch, searchbar])

    let counter = 0;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2500)
    }, [setIsLoading])

    return (
        <div className={style.container}>
            {
                isLoading && <div className={style.loader}>
                    <Loader />
                </div>
            }
            {
                catBreeds.length !== 0 && searchbar === "" && !isLoading
                    ? <>
                        <Link to='/'>
                            <span>← GO BACK</span>
                        </Link>
                        <p className={style.title}>Top 10 most searched breeds</p>
                        {
                            catBreeds.map((cat) => {
                                counter++
                                return (
                                    <Card cat={cat} counter={counter} />
                                )
                            })
                        }
                    </>
                    : null
            }
            {
                catBreedsByName.length !== 0 && !isLoading
                    ? <>
                        <p className={style.title}>{searchbar}...</p>
                        {
                            catBreedsByName.map((cat) => {
                                counter++
                                return (
                                    <Card cat={cat} counter={counter} />
                                )
                            })
                        }
                    </>
                    : null
            }
            {
                catBreeds.length === 0 && catBreedsByName.length === 0 && !isLoading
                    ? <p className={style.title}>No results...</p>
                    : null
            }
        </div>
    )
}

export default CatCards;