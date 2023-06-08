import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'',

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer:{
    // flex:1,
    marginTop:10

    // position:'relative'
  },
  textView:{
    marginVertical:35,
    alignItems:'center'
  },
  text:{
fontSize:44,
color:'#000',
fontWeight:'500'
  },
  boldText:{
color:'#936CAB',
fontWeight:'800'
  },
  inputView:{
    alignItems:'center',
    marginTop:15
    // justifyContent:'center',
    
  },
  policyView: {
    flexDirection: 'row',
    alignSelf:'center',
    marginTop:25,

    // ...Layout.row,
    // ...Layout.selfCenter,
    // ...Gutters.xmTMargin,
    // ...Gutters.smallBMargin,
    // ...Layout.fill,
    flexWrap: 'wrap',
    // ...Gutters.tinyHMargin,
    marginHorizontal: 16,
    justifyContent:'center'
    // alignItems:'center'
  },
  signup:{
    color:'#936CAB'
  },
  underlineStyleBase:{
    borderWidth: 1,
        borderRadius:6,
        color:'black',
        borderColor:'#C388F7',
        backgroundColor:'#F8FAFD',
        width:50,
        height:40

  },
  
});
