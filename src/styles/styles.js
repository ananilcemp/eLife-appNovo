
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
      },
      containerForms: {
        flex: 1,
        padding: 35,
        // justifyContent: 'center',
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
      height:150,
      marginLeft:50
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
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      height:70,
      backgroundColor:'#fff',
      borderRadius:100,   
      
    },
    botaoCadastrar: {
      margin: 10,
      backgroundColor: '#4682B4',
    },
    botaoApagar: {
      margin: 10,
      backgroundColor: '#E37399',
    },
    txtCadastrar: {
      color: '#fff',
      fontSize: 18,
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center'
    }
    
    
  });

  export default styles;