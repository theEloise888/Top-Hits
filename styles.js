/**
 * Author:Eloise Lin
 * Purpose: An app that renders a list of the top 10 trending songs on Spotify. 
 * Date: June 3, 2019
 */
 
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        container: {
         flex:1,
         textAlign: 'center',
         backgroundColor: "rgba(245,252,255,0.5)",
        },

        imgContainer: {
          paddingTop: 1,  
          paddingBottom: 1, 
          flex: 1,
          flexDirection: 'row',
          marginBottom: 3, 
          paddingHorizontal: 3,
        
        },
        txtContainer: {
          flex: 1,
          justifyContent: 'center',
          marginLeft: 7,
          marginBottom:5, 
          fontSize: 19, 
          fontFamily: 'sans-serif-medium',
          
        },
        header: {
          fontSize: 19,
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor:'#9999ff', 
          fontFamily: 'sans-serif-medium',
         
        },
        overlay: {  
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,     
            backgroundColor: 'rgba(255,0,0,0.5)',
            width: '100%', 
            height: '100%'
        },    
      });
      
