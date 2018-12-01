/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
*/
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import {

 AppRegistry,

 StyleSheet,

 Text,

 ScrollView,

 View,

 Button

} from 'react-native';

class Main extends Component {

static navigationOptions =
 {
    title: 'Life is Beautiful',
 };

 constructor() {

     super()

     this.state = {

      firstVar: ' ',

       listvalue: [

           {'name': 'happiness', 'id': 'blueviolet'},

           {'name': 'wealth', 'id': 'cadetblue'},

           {'name': 'love', 'id': 'blueviolet'},

           {'name': 'procreation', 'id':'cadetblue'},

           {'name': 'freedom', 'id':'blueviolet'},

           {'name': 'fun', 'id':'cadetblue'},

           {'name': 'new experiences', 'id':'blueviolet'},

           {'name': 'sex', 'id':'cadetblue'},

           {'name': 'friends', 'id':'blueviolet'},

           {'name': 'success', 'id':'cadetblue'},

           {'name': 'contentedness', 'id':'blueviolet'},

           {'name': 'knowledge', 'id':'cadetblue'}

        ]

     }

  }

     makeList= (item) => (

     <Button
        //onPress={this.handleClick}
        //key={item.id}
        onPress={() => {
            this.props.navigation.navigate('Second', {
              name: item.name
            });
           }}

        style={styles.list}

        title={item.name}
        color={item.id}
       />

  );

handleClick = () => {
     this.props.navigation.navigate('Second');
}

 render() {

   return (

      <View style={{margin: 50,

                    height: 500,}}>

               <Text>Choose your lifes priority</Text>

                    <ScrollView>

                       { this.state.listvalue.map(this.makeList)}

                    </ScrollView>

            </View>

   );

 }

}
class SecondActivity extends Component
{
  static navigationOptions =
  {
     title: 'SecondActivity',
  };
  constructor()
  {
  super()
  this.state=
  {
  textlist: 
           [{'id':'happiness','text': 'Dont be ridiculous you will experience nothing but misery like everyone else'},

           {'id':'wealth','text':'you may become rich but you will be utterly miserable as you will never know if people like you for your money or just because you are rich. '},

           {'id':'love', 'text':'love doesnt exist its a dillusion'},

           {'id':'procreation','text':'basic animalistic instict which will cause disappointment as your children will end up hating you and ignoring you and just wanting money off you '},

           {'id':'freedom','text':'a worthy goal if you are unfairly incarcerated. But freedom only brings choice and choice means you will pick the wrong one'},

           {'id':'fun','text':'fun what is fun it doesnt exist unless you are a mindless moron'},

           {'id':'new experiences','text': 'fuck that everything is just the same'},

           {'id':'sex','text':'sex ? sex yeah right you will just get a disease if your lucky or be attacked or robbed by someone who in the throws of passions says they love you'},

           {'id':'friends','text':'friend dont exist they are just people who hang around and smile at you whils taking your stuff'},

           {'id':'success','text':'good luck with that it will just make you crave more or jealous or miserable'},

           {'id':'contentedness','text':'human are never content unless they have become brain washed buddhists and look how much boring shit they end up doing'},

           {'id':'knowledge','text':'yeah another delusion noone ever truly knows anything'}
           
         ] 
  }
  }
  render()
  {

     const { navigation } = this.props;
     const itemId = navigation.getParam('name', 'NO-ID');
     var textdictout = this.state.textlist;
     for (i=0;i< textdictout.length;i++)
     {
       if (textdictout[i].id==itemId)
       {
          output=textdictout[i].text;
       }
     }
     return(
        <View style = { styles.MainContainer }>
 
           <Text style = { styles.TextStyle }> {JSON.stringify(itemId)} </Text>
           <Text style = { styles.TextStyle }> {output} </Text>
 
        </View>
     );
  }
}

export default App = StackNavigator(
{
 First: { screen: Main },
 
 Second: { screen: SecondActivity }
});

const styles = StyleSheet.create ({

 list: {

     margin: 15,

     padding: 5,

     height: 40,

     borderColor: 'red',

     borderWidth: 1

  },
MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10
  
 },
 
 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },

})
