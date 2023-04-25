import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
    

    navdiv:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
       gap:'20px',
       padding:'15px',
       

    },

    input:{
       
        width:'400px',
    },

    content:{
     
        marginTop:'20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
        
    },

    wordcontent:{
        display:'flex',
        justifyContent:'space-between',

    },

    

    bottombox:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#e0caeb",
    }
}))

export default useStyles;