import React, { useState, useEffect } from "react"; //useffect is the function that happens when or code starts it is same as the component didmountin the classbased components
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";
import wordsToNumbers from "words-to-numbers";

const alanKey =
	"893bc1415f4cf8e4cff28320b49073232e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
	//array destructing
	const [newsArticles, setNewsArticles] = useState([]);
	const[activeArticle , setActiveArticle] = useState(-1);
	const [isOpen , setIsOpen] = useState(false);
	const classes = useStyles();
	//Mounting means putting elements into the DOM.
	useEffect(() => {
		//take to parameter 1- callback function  2- dependency array
		//it depends upon the elements of the dependency arry that how many times the useeffect hook runs...if we leave it empty then it wll run only for the one time that is when once our component mounts
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles, number }) => {
				if (command === 'newsHeadlines') {
					// alert('This code was executed');
					// console.log(articles);
					setNewsArticles(articles);
					setActiveArticle(-1); //once there are new news we will set active article to start again
				} else if (command === 'instuctions') {
					setIsOpen(true);
				}
				else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);
				}
				else if(command === 'open'){
					const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}):number;
					const article = articles[parsedNumber -1];

					if(parsedNumber > 20){
						alanBtn().playText('Please try that again...');
					}
					else if(article){
						window.open(article.url , '_blank');
						alanBtn().playText('Opening...');
					}
					else {
						alanBtn().playText('Please try that again...');
					  }

					// window.open(articles[number].url , '_blank');
				}
			},
		});
	}, []);

	return (
		<div>
			<div className={classes.logoContainer}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKCY77TSeBUowKTfLnO2SEOPDUTWROUWHrg&usqp=CAU"
					className={classes.alanLogo}
					alt="alan logo"
				/>
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle}/>
		</div>
	);
};

export default App;
