import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import Rectangle from '../images/Rectangle.png'
import HeroImg from '../images/heroImg.png'
import { BsArrowRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'


const styles = {
    container: `w-full h-screen flex bg-[#FFF] flex-col relative`,
    logoParent: `flex flex-row`,
    logoDiv: `flex justify-center items-center bg-transparent z-20 absolute -rotate-20  `,
    navbar: `w-full h-20 flex  items-center px-10 `,
    searchbar: `w-1/3 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
    searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none `,
    searchbar__button: `flex justify-center items-center px-3`,
    gitHub: ` flex justify-center items-center absolute right-5`,
    bar: `w-[80%] h-[2px] bg-[#D9D9D9]  mx-auto`,
    heroContainer: `w-[100%] flex flex-col justify-center items-center mx-auto relative mb-5 cursor-pointer`,
    hero: `w-[80%] flex flex-col justify-center items-center relative z-0 mx-auto `,
    heroOverlay: `w-[80%] h-[75px] flex justify-center items-center z-10 bg-[#D9D9D9] opacity-75 absolute bottom-0 hover:opacity-80 transition duration-500 ease-in-out `,
    heroOverlay__text: `w-3/4 h-1/2 flex justify-start px-5 items-center font-bold text-[#000] text-[26px] font-[Inter]`,
    heroOverlay__button: `w-1/4 h-1/2 flex justify-end items-center pr-5 `,
    CategoryContainer: `w-[80%] flex flex-col mx-auto relative mt-5 `,
    categoryCardContainer: ` flex flex-col justify-between items-center mx-auto  `,
    categoryTitle: `font-bold text-[#000] text-[26px] font-[Inter]`,
    categoryCard: `w-[350px] h-[350px] flex justify-center items-center relative z-0  mt-5 cursor-pointer`,
    categoryCardOverlay: `w-[350px] h-[60px] flex justify-center items-center z-10 bg-[#D9D9D9] opacity-75 absolute bottom-0 hover:opacity-80 transition duration-500 ease-in-out `,
    categoryCardOverlayText: `w-4/5 h-1/2 flex justify-start px-5 items-center font-bold text-[#000] text-[16px] font-[Inter] text-ellipsis overflow-hidden truncate`,
    categoryCardOverlayButton: `w-1/5 h-1/2 flex justify-end items-center pr-5 `,
    banner: `w-[100%] h-[300px] flex justify-center items-center relative z-0 mx-auto bg-[#D99] mt-10`,
    banner__text: `w-[3/4] h-1/2 flex justify-start px-11 items-center font-black text-[#000] text-[32px] font-[Inter]`,
    banner__button: `w-1/4 h-1/2 flex justify-end items-center px-11 font-bold text-[#000] text-[26px] font-[Inter]`,
    moreContainer: `w-[80%] flex flex-col mx-auto relative mt-5 justify-center items-end mb-5`,
    more: `font-bold text-[#000] text-[22px] font-[Inter]   flex items-center justify-center px-5 cursor-pointer hover:text-[#D99] transition duration-500 ease-in-out ` ,
    footer: `w-[100%] h-[200px] flex justify-center items-center relative z-0  bg-black mt-10 text-white`,
    footerMain: `w-[100%] h-[200px] flex justify-between items-center bg-black px-11  `,
    text: `h-[200px] w-1/3 flex flex-col justify-center  items-start font-black text-[#fff] text-[18px] font-[Inter]`,
    footerMainTitle: `  flex flex-col  pb-4  items-center font-black text-[#fff] text-[18px] font-[Inter]`,
    footerMainParagraph: ` flex flex-col  items-center font-black text-[#fff] text-[14px] font-[Inter]`,
    footerMainLinks: ` h-[200px] w-1/3 flex flex-col justify-center items-center  text-[#fff] text-[18px] font-[Inter] space-y-2`,
    footerMainLinksTitle: `flex flex-col   items-center  text-[#fff] text-[18px] font-[Inter] font-bold `,
    footerMainLinksList: ` flex flex-col  items-center  text-[#fff] text-[14px] font-[Inter] font-regular`,
    footerMainLogo: ` h-[200px] w-1/3 flex flex-col justify-center items-center  text-[#fff] space-y-3 `,
    

}

const Home = () => {

  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);

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
    <div className={styles.container}>
        <div className={styles.logoParent}>
            <img className={styles.logoDiv} src={Rectangle} alt='decoration'></img>
        </div>
        <div className={styles.navbar}>
            <div className={styles.searchbar}>
                <div className={styles.searchbar__input}>
                    <input type="text" placeholder="Search recipes..." className={styles.searchbar__input} />
                </div>
                <div className={styles.searchbar__button}>
                    <AiOutlineSearch size={24}/>
                </div>
            </div>
            <div className={styles.gitHub}><BsGithub size={32} /></div>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.heroContainer}>
            <img src={HeroImg} alt='hero' className={styles.hero}></img>
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
                <button className={styles.banner__button__text}><FaTelegramPlane size={120} /></button>
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
                <div className={styles.footerMainLinks}>
                  <div className={styles.footerMainLinksTitle}>
                    <h1>Links</h1>
                  </div>
                  <div className={styles.footerMainLinksList}>
                    <ul>
                      <li>Home</li>
                      <li>Recipes</li>
                      <li>Blog</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.footerMainLogo}>
                  <GiKnifeFork size={74} />
                  <h3>© 2023 All rights reserved.</h3>
                </div>
                <div className={styles.footerBar}></div>
                
              </div>
          </div>
         </>
  );
};

export default Home