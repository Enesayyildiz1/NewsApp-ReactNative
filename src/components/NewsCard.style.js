import { white } from "chalk";
import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

export default StyleSheet.create(
    {
        container:{
            backgroundColor:"white",
            margin:10,
            borderRadius:10,
        },
        image:{
            height:Dimensions.get('window').height/4,
            borderTopRightRadius:10,
            borderTopLeftRadius:10,
           
        },
        title:
        {
            fontWeight:"bold",
            fontSize:22,  
                 
        },
        inner_container:{
           margin:5,
        },
        description:{
           marginTop:3,
            fontSize:15,       
        },
        author:
        {
            textAlign:"right",
            fontStyle:"italic",

        }
    
    
    }
)

