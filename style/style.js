import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  background: {
    backgroundColor: '#fff'
  },
  header: {
    
    flexDirection: 'row',
    padding: 40,
    marginBottom: 20,
    backgroundColor: '#000000',
    
  },
  footer: {
    marginTop: 20,
    
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#a9a9a9',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
  },
  
  lable: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    marginLeft: 10,
    marginBottom: 5,
  },
  
  button: {
    backgroundColor: '#000',
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
    
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
  },
  
  input: {
    height: 25,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
  },
  resultgreen: {
    fontSize: 33,
    textAlign: 'center',
    color: '#4dd091',
    fontWeight: 'bold',
  },
  resultyellow: {
    fontSize: 33,
    textAlign: 'center',
    color: '#ffd050',
    fontWeight: 'bold',
  },
  resultred: {
    fontSize: 33,
    textAlign: 'center',
    color: '#e54c38',
    fontWeight: 'bold',
  }

});