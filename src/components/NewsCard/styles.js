import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: 'solid',
    borderRadius: 20,
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
    // border: '2px solid black',
    borderRadius:'20px'
  },
  activeCard: {
    border: '2px solid #BF181D',
    borderBottom: '10px solid #BF181D',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
})