
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
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
    containerList: {
         flex: 1,
         paddingBottom: 22
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
    },
    botaoLogin: {
      margin: 10,
      marginTop: 40,
    },
    txtLogin: {
      color: '#fff',
      fontSize: 18,
    },
    fab:{
      position:'absolute',
      
    },
    botaoCadastrar: {
      margin: 10,
      backgroundColor: '#4682B4',
    },
    txtCadastrar: {
      color: '#fff',
      fontSize: 18,
    }
    
    
  });

  export default styles;