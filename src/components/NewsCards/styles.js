import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
	container: {
		padding: "0 6%",
		width: "100%",
		margin: 0,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "100%",
		height: "45vh",
		padding: "10%",
		borderRadius: 50,
		color: "black",
		border: ".5px solid #BF181D",
		borderBottom: '10px solid #BF181D',
		borderColor: "error.main",
		// fontFamily: ''
	},

	infoCard: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	},
	text: {
		color: "grey",
    fontFamily: "sans-serif"
	},
	word: {
		color: "black",
    fontWeight: "550"
    
	},
});
