
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerTop: {
      flex: 0.7,
      justifyContent: 'space-around',
    },
    containerBottom: {
      flex: 1,
      justifyContent: 'flex-start',
      textAlign:'center'
    },
    txtInput: {
      width:280,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1 ,
      borderRadius: 20,
      marginBottom: 20, 
      fontSize: 15,
      padding: 10
    },
    imageContacts:{
      width:150,
      height:150
    },
    txtButton:{
     textAlign:'center',
     fontSize: 20
    }
  });

  export default styles;