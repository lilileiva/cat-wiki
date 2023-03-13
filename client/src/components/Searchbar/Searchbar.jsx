import React, { useEffect, useState } from 'react';
import style from './Searchbar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatBreeds, searchbar } from '../../redux/actions';


function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    dispatch(getCatBreeds());
  }, [dispatch]);

  let catBreeds = useSelector((state) => state.catBreeds);

  const [dropdown, setDropdown] = useState(false);

  const [inputText, setInputText] = useState("");

  const changeDropdown = () => {
    if (dropdown) return setDropdown(false);
    else setDropdown(true);
  }

  const changeInputText = (text) => {
    setInputText(text);
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);    
  }

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      dispatch(searchbar(inputText))
      navigate('/breeds')
    }
  }

  return (
    <div className={style.column}>

      <form className={style.form} onSubmit={(e) => handleInputSubmit(e)}>
        <div className={style.row}>
          <input
            className={style.searchbar}
            value={inputText}
            placeholder='Enter your breed'
            onFocus={() => changeDropdown()}
            onChange={(e) => handleInputChange(e)}
          />
          {
            pathname === '/search'
              ? <input
                className={style.searchbarMobileFixed}
                value={inputText}
                placeholder='Search'
                onFocus={() => setDropdown(true)}
                onBlur={() => setDropdown(true)}
                onClick={() => navigate('/search')}
              /> : <input
                className={style.searchbarMobile}
                value={inputText}
                placeholder='Search'
                onFocus={() => setDropdown(true)}
                onBlur={() => setDropdown(true)}
                onClick={() => navigate('/search')}
              />
          }

          <div className={style.submit}>
            <span className="material-symbols-outlined" onClick={(e) => handleInputSubmit(e)}>
              search
            </span>
          </div>
        </div>
      </form>
      {
        dropdown && catBreeds &&
        <ul className={style.breedList}>
          {
            catBreeds.map((cat) => (
              <li onClick={() => changeInputText(cat.name)}>
                {cat.name}
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Searchbar;