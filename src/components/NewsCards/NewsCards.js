import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from './styles.js';
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles , activeArticle}) => {
const classes = useStyles();

const infoCards = [
	{ color:'whitesmoke' , title: 'Latest News', text: 'Give me the latest news' },
	{ color: 'whitesmoke', title: 'News by Categories', info: 'Business, Entertainment, Science, Sports, Technology', text: 'Give me the latest Technology news' },
	{ color: 'whitesmoke', title: 'News by Terms', info: 'Bitcoin, COVID-19, Climate change, Rishi Sunak...', text: 'What\'s up with PlayStation 5' },
	{ color: 'whitesmoke', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>

          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5" ><b>{infoCard.title}</b></Typography>
                {infoCard.info ? (<Typography variant="h6" component="h6"><strong className={classes.text}>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography>) : null}
                <Typography variant="h6" component="h6" className={classes.text}><b>Try saying:</b> <br /> <i className={classes.word}>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

	return (
		<Grow in>
			<Grid className={classes.container} container alignItems="strech" spacing={3}>
				{articles.map((article, i) => (
          <Grid item xs = {12} sm={6} md={4} lg={3} style ={{display: 'flex'}}>
         
					<NewsCard article = {article} activeArticle={activeArticle} i = {i}/></Grid>
				))}
			</Grid>
		</Grow>
	);
};

export default NewsCards;
