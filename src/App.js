import {useEffect , useState} from "react";
import {
  Button,
  Card,
  Typography,
  CssBaseline,
  TextField,
  Container,
  Box,
  CardActionArea,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import useStyles from "./styles";
import "./App.css";


const theme = createTheme({
  palette: {
    secondary: {
      main: '#f50057', // replace with your desired color code
    },
  },
});

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App(props) {
// to set the data fetched using useState
const [wrd, setWord] = useState([]);

// to set meanings array 
const [mng, setMeaning] = useState([]);

// to set defitions array from the fetched data 
const [def, setDefinition] = useState([]);

// to set example fetched from  the data 
const [exm, setExample] = useState("");

// to set search term 
const [searchTerm , setsearchTerm] = useState("");

// set audio 
// const [aud, setAudio] = useState(null);

//
// const [isPlaying, setIsPlaying] = useState(false);


// fetch the api and load data 
const searchMeaning = async(wd)=>{
  const response = await fetch(`${API_URL}${wd}`);
  const data = await response.json();

  // setWord function setting the fetched data to 'word' variable using useState
  setWord(data[0]);
  
  // 
  setMeaning(data[0].meanings[0]);

  // 
   setDefinition(data[0].meanings[0].definitions[0]);

   // 
   setExample(data[0].meanings[0].definitions[0].example);

  //
  

  // will display the fetched data in console.
  console.log(data[0]);
}

// using useEffect hook to run the searchMeaning function 
useEffect(() => {
  searchMeaning("introduction");
}, []);

// useEffect(() => {
//   setAudio(new Audio(aud));
// }, [aud]);

// const togglePlay = () => {
//   if (!aud) return;
//   if (isPlaying) {
//     aud.pause();
//   } else {
//     aud.play();
//   }
//   setIsPlaying(!isPlaying);
// };

  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline/>
      
      <Typography variant="h5" my={1.7}>Dictionary </Typography>
      <Typography variant="subtitle2" color="text.secondary">Built using React.JS and Material UI </Typography>

      <div className={classes.navdiv}>
        <TextField id="outlined-basic" label="Search Word" className={classes.input} value={searchTerm}  onChange={(e) => setsearchTerm(e.target.value)} />

        <Button variant="contained" color="secondary" onClick={()=> searchMeaning(searchTerm)} style={{paddingLeft:"25px" , paddingRight:"25px"}}>
          Search
        </Button>
      </div>

      <Container className={classes.content} justifyContent="center">
        <Card sx={{ maxWidth: 450 }}>

          <CardActionArea>
          <CardContent>
                   <div flex className={classes.wordcontent} >
                        <Typography gutterBottom variant="h4" component="div" textAlign="start">
                          {wrd.word}
                        </Typography>

                         <Typography variant="subtitle1"  color="text.secondary">{wrd.phonetic}</Typography>

                    </div>

                       <Typography variant="subtitle1" component="div"  gutterBottom color="text.secondary" textAlign="start" lineHeight={2.5}>
                         {mng.partOfSpeech}
                       </Typography>

                       <Box className={classes.scrollbox}>

                
                  <div>
                    <Typography variant="h6" textAlign="left">Meaning: </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="left">{def.definition}</Typography>
                  </div>

   

                     <br/>
               
                  <div>
                    <Typography variant="h6" textAlign="left"  >Example:</Typography>
                    <Typography variant="body2" color='text.secondary' textAlign="left">{exm || ""}</Typography>
                  </div>

                       </Box>
          </CardContent>
          </CardActionArea>

        <ThemeProvider theme={theme}>
          <Box className={classes.bottombox} bgcolor="secondary.main">

                <Typography variant="subtitle1" color="white">Play</Typography>

             <IconButton aria-label="play/pause"  >
            
             <PlayArrowIcon sx={{ height: 38, width: 38 }}  color="white" />
             </IconButton>
          </Box>
        </ThemeProvider>
        </Card>


       


      </Container>
    </div>
  );
}

export default App;
