import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
export default class WelcomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      isSignedIn: true,
    };
  }

  componentDidMount() {
    // this.props.navigation.navigate('AppStack');
  }

  loginNow = () => {
    this.props.navigation.navigate('SignIn')
  };

  createAccount = () => {
    this.props.navigation.navigate('SignUp')
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/banner.png')} style={styles.bgView}>
          <TouchableOpacity onPress={this.loginNow} style={styles.btnView}>
            <Text style={styles.buttonText}>登录</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgView:{
    alignItems:'center',
    width: '100%', 
    height: '100%',
    justifyContent:'flex-end'
  },
  buttonText: {
    color: '#000',
    fontSize:20
  },
  btnView:{
    width:300,
    height:50,
    backgroundColor:'#fff',
    marginBottom:100,
    alignItems:'center',
    justifyContent:'center'
  }
});