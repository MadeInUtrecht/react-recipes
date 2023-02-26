import React from 'react'
import HeroImg from '../images/heroImg.png'
import { BsArrowRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'






const styles = {
    container: `w-full h-full flex bg-[#FFF] flex-col relative `,
    logoDiv: `flex justify-center items-center bg-transparent z-20 absolute -rotate-20 m:w-[20%] w-[35%] lg:w-[20%] xl:w-[20%] `,
    navbar: `w-full h-20 flex  items-center px-10 `,
    searchbar: `w-1/2 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
    searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none `,
    searchbar__button: `flex justify-center items-center px-3`,
    gitHub: ` flex justify-center items-center absolute right-7 top-7`,
    bar: `w-[80%] h-[2px] bg-[#D9D9D9]  mx-auto`,
    heroContainer: `w-[100%] flex flex-col justify-center items-center mx-auto relative mb-5 cursor-pointer`,
    hero: `w-[80%] flex flex-col justify-center items-center relative z-0 mx-auto`,
    heroOverlay: `w-[80%] h-[20%] flex justify-center items-center z-10 bg-[#D9D9D9] opacity-75 absolute bottom-0 hover:opacity-80 transition duration-500 ease-in-out `,
    heroOverlay__text: `w-3/4 h-1/2 flex justify-start px-5 items-center font-bold text-[#000] text-[12px] font-[Inter] m:text-[26px] truncate overflow-hidden  lg:text-[26px] xl:text-[26px]`,
    heroOverlay__button: `w-1/4  flex justify-end items-center pr-5  `,
    CategoryContainer: `w-[80%] flex flex-col mx-auto relative mt-5 `,
    categoryCardContainer: ` flex flex-col justify-between items-center mx-auto  `,
    categoryTitle: `font-bold text-[#000] text-[20px] font-[Inter] m:text-[26px] lg:text-[26px] xl:text-[26px]`,
    categoryCard: `w-1/4  flex justify-center items-center relative z-0  mt-5 cursor-pointer`,
    categoryCardOverlay: `w-full h-1/6 flex justify-center items-center z-10 bg-[#D9D9D9] opacity-75 absolute bottom-0 hover:opacity-80 transition duration-500 ease-in-out `,
    categoryCardOverlayText: `w-4/5 h-1/2 flex justify-start px-2 m:px-5 lg:px-5 xl:px-5 items-center font-bold text-[#000] text-[8px] m:text-[16px] lg:text-[16px] xl:text-[16px] font-[Inter] text-ellipsis overflow-hidden truncate`,
    categoryCardOverlayButton: `w-1/3 m:w-1/5 lg:w-1/5 xl:w-1/5 h-1/2 flex justify-end items-center pr-5  `,
    banner: `w-[100%] h-[300px] flex justify-center items-center relative z-0 mx-auto bg-[#D99] mt-10`,
    banner__text: `w-[3/4] h-1/2 flex justify-start px-11 items-center font-black text-[#000] text-[32px] font-[Inter]`,
    banner__button: `w-1/4 h-1/2 flex justify-end items-center px-11 font-bold text-[#000] text-[26px] font-[Inter]`,
    moreContainer: `w-[80%] flex flex-col mx-auto relative mt-5 justify-center items-end mb-5`,
    more: `font-bold text-[#000] text-[12px] m:text-[22px] lg:text-[22px] xl:text-[22px] font-[Inter]   flex items-center justify-center px-5 cursor-pointer hover:text-[#D99] transition duration-500 ease-in-out ` ,
    footer: `w-[100%] h-[200px] flex justify-center items-center relative z-0  bg-black mt-10 text-white`,
    footerMain: `w-[100%] h-[200px] flex justify-between items-center bg-black px-11  space-x-7 `,
    text: `h-[200px] flex flex-col justify-center  items-start  text-[#fff] text-[18px] font-[Inter]`,
    footerMainTitle: `  flex flex-col    items-center font-bold text-[#fff] text-[12px] m:text-[18px] lg:text-[18px] xl:text-[18px] font-[Inter]`,
    footerMainParagraph: ` flex flex-col  items-center font-regular text-[#fff] text-[10px] m:text-[14px] lg:text-[14px] xl:text-[14px] font-[Inter]`,
    footerMainLinks: ` h-[200px]  flex flex-col justify-center items-center  text-[#fff] m:text-[18px] font-[Inter] space-y-2`,
    footerMainLinksTitle: `flex flex-col   items-center  text-[#fff] text-[12px] m:text-[18px] lg:text-[18px] xl:text-[18px] font-[Inter] font-bold `,
    footerMainLinksList: ` flex flex-col  items-center  text-[#fff] text-[8px] m:text-[14px] lg:text-[14px] xl:text-[14px] font-[Inter] font-regular`,
    footerMainLogo: ` h-[200px] flex flex-col justify-center items-center  text-[#fff] space-y-3 `,
    footerMainLogoimg: `  text-[#fff] text-[12px] m:text-[18px] lg:text-[18px] xl:text-[18px] font-[Inter] font-bold pr-11`,
    footerMainLogoText: `  text-[#fff] text-[14px] font-[Inter] font-regular text-center`,
    footerBottom: ` flex justify-center items-center text-[#fff] text-[12px] m:text-[18px] lg:text-[18px] xl:text-[18px]font-[Inter] font-regular text-center pr-11`,
    footerSocialTitle: `flex flex-col  items-center  text-[#fff] text-[12px] m:text-[18px] lg:text-[18px] xl:text-[18px] font-[Inter] font-bold text-center `,
    footerSocial: `flex flex-col justify-center items-center `,
    footerSocialIcons: `flex flex-col justify-center items-center space-y-2`,

}

const Home = () => {

  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const history = useNavigate();

  const handleSearchSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    history.push(`/search/${searchQuery}`);
  };


  useEffect(() => {
    async function fetchVegetarianRecipes() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian"
      );
      const data = await response.json();
      const threeRecipes = data.meals.slice(1, 4);
      setVegetarianRecipes(threeRecipes);
    }
    fetchVegetarianRecipes();
  }, []);

  const [beefRecipes, setbeefRecipes] = useState([]);

  useEffect(() => {
    async function fetchbeefRecipes() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
      );
      const data = await response.json();
      const threeRecipes = data.meals.slice(2, 5);
      setbeefRecipes(threeRecipes);
    }
    fetchbeefRecipes();
  }, []);

  const [seafoodRecipes, setseafoodRecipes] = useState([]);

  useEffect(() => {
    async function fetchseafoodRecipes() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood"
      );
      const data = await response.json();
      const threeRecipes = data.meals.slice(2, 5);
      setseafoodRecipes(threeRecipes);
    }
    fetchseafoodRecipes();
  }, []);

  const [dessertRecipes, setdessertRecipes] = useState([]);

  useEffect(() => {
    async function fetchdessertRecipes() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert"
      );
      const data = await response.json();
      const threeRecipes = data.meals.slice(2, 5);
      setdessertRecipes(threeRecipes);
    }
    fetchdessertRecipes();
  }, []);






  return (
    <>
    <Navbar onSearchSubmit={handleSearchSubmit} searchQuery={searchQuery}/>

    <div className={styles.heroContainer}>
      <img src={HeroImg} alt='hero' className={styles.hero} />
      <div className={styles.heroOverlay}>
        <div className={styles.heroOverlay__text}>
          <h1>Overcome your winter dip with these delicious classics...</h1>
        </div>
        <div className={styles.heroOverlay__button}>
          <BsArrowRight size={40} />
        </div>
      </div>
    </div>

    <div className={styles.bar}></div>

    <div className={styles.CategoryContainer}>
      <div className={styles.categoryTitle}>Healthy Recipes</div>
      <div className="flex flex-wrap justify-between">
        {vegetarianRecipes.map((recipe) => (
          <div className={styles.categoryCard} key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className={styles.categoryCardOverlay}>
              <div className={styles.categoryCardOverlayText}>
                {recipe.strMeal}
              </div>
              <div className={styles.categoryCardOverlayButton}>
                <BsArrowRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.moreContainer}>
      <div className={styles.more}><h1>More Healthy Recipes...</h1></div>
    </div>
  
    <div className={styles.bar}></div>
  
    <div className={styles.CategoryContainer}>
      <div className={styles.categoryTitle}>Beef Recipes</div>
      <div className="flex flex-wrap justify-between">
        {beefRecipes.map((recipe) => (
          <div className={styles.categoryCard} key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className={styles.categoryCardOverlay}>
              <div className={styles.categoryCardOverlayText}>
                {recipe.strMeal}
              </div>
              <div className={styles.categoryCardOverlayButton}>
                <BsArrowRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.moreContainer}>
      <div className={styles.more}><h1>More Beef Recipes...</h1></div>
    </div>
  
    <div className={styles.banner}>
      <div className={styles.banner__text}>
        <h1>Get the best recipes delivered to your inbox</h1>
      </div>
      <div className={styles.banner__button}>
        <FaTelegramPlane size={74} />
      </div>
    </div>
  
    <div className={styles.CategoryContainer}>
      <div className={styles.categoryTitle}>Seafood Recipes</div>
      <div className="flex flex-wrap justify-between">
        {seafoodRecipes.map((recipe) => (
          <div className={styles.categoryCard} key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className={styles.categoryCardOverlay}>
              <div className={styles.categoryCardOverlayText}>
                {recipe.strMeal}
              </div>
              <div className={styles.categoryCardOverlayButton}>
                <BsArrowRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.moreContainer}>
      <div className={styles.more}><h1>More Seafood Recipes...</h1></div>
    </div>

    <div className={styles.bar}></div>

    <div className={styles.CategoryContainer}>
      <div className={styles.categoryTitle}>Dessert Recipes</div>
      <div className="flex flex-wrap justify-between">
        {dessertRecipes.map((recipe) => (
          <div className={styles.categoryCard} key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className={styles.categoryCardOverlay}>
              <div className={styles.categoryCardOverlayText}>
                {recipe.strMeal}
              </div>
              <div className={styles.categoryCardOverlayButton}>
                <BsArrowRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.moreContainer}>
      <div className={styles.more}><h1>More Dessert Recipes...</h1></div>
    </div>

    <div className={styles.bar}></div>

    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.text}>
          <div className={styles.footerMainTitle}>
            <h1>Recipe App</h1>
          </div>
          <div className={styles.footerMainParagraph}>
            <p>Recipes you want to make. Cooking advice that works.</p>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksTitle}>
            <h2 className={styles.footerMainLinksTitle}>Quick Links</h2>
          </div>
          <div className={styles.footerLinksList}>
            <ul>
              <li>
                <p className={styles.footerMainLinksList} href="#">About Us</p>
              </li>
              <li>
                <p className={styles.footerMainLinksList} href="#">Contact Us</p>
              </li>
              <li>
                <p className={styles.footerMainLinksList} href="#">Privacy Policy</p>
              </li>
              <li>
                <p className={styles.footerMainLinksList} href="#">Terms &amp; Conditions</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <div className={styles.footerSocialTitle}>
            <h2>Connect with us</h2>
          </div>
          <div className={styles.footerSocialIcons}>
            <p href="#"><FaFacebook size={28} /></p>
            <p href="#"><FaInstagram size={28} /></p>
            <p href="#"><FaTwitter size={28} /></p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2023 Recipe App. All rights reserved.</p>
      </div>
    </div>
</>
  );
};

export default Home