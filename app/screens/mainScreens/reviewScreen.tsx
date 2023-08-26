import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/headerComponent/header';
import Toaster from '../../components/toast/Toaster';
import {ScreenStyles} from './ScreenStyles';
import MIcon from 'react-native-vector-icons/Ionicons';
import {Button, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { addReview, allReview } from '../../services/Auth';
const ReviewScreen = ({navigation}) => {
  const S = ScreenStyles;
  const toasterRef = React.useRef<any>();

  const [rating, setRating] = useState(0);
console.log(rating,'ratingratingrating');
  const handleStarPress = selectedRating => {
    setRating(selectedRating);
  };
  const initialReviews = [
    {id: 1, rating: 3, text: 'Nice'},
    {id: 2, rating: 2, text: 'Amazing'},
    {id: 3, rating: 4, text: 'Nice'},
    {id: 4, rating: 4, text: 'Nice'},

    // Add more reviews here
  ];
  const [reviews, setReviews] = useState(initialReviews);
  const [showOlder, setShowOlder] = useState(false);
  const [reviewText, setReviewText] = useState('');
  function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const timeDifference = now - date;
  
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return {
      hours: hoursAgo,
      days: daysAgo
    };
  }
  
  // Usage example
  const date = "2023-07-08T10:53:01.566Z";
  const timeAgo = getTimeAgo(date);
  
  console.log(timeAgo.hours + " hours ago");
  console.log(timeAgo.days + " days ago");
  const handleShowOlderReviews = () => {
    setShowOlder(true);
  };
useEffect(() => {
  allReview().then(r=>{
    setReviews(r?.data)
    console.log(r?.data,'response reviewwww');
  }).catch(e=>{
    console.log(e,'error in reviewwee');
  })
}, [])
const addReviewPress= ()=>{
 if (!reviewText ) {
  toasterRef.current.showToaster(
    {
      message:'write review',
     type:'E'
    }
   );
 }else{
  addReview({
    "entityType":"patient",
    "patient":"64723b4e4bbac21db05feb26",
    "review":reviewText,
    "rating":rating
  }).then(r=>{
    if (r?.data) {
      toasterRef.current.showToaster(
        {
          message:'Review Added Successfully',
         type:'S'
        }
       );
    }
    // setReviews(r?.data?.data)
    console.log(r?.data,'responseeee');
    setReviewText('')
    setRating(0)
    allReview().then(r=>{
      setReviews(r?.data)
      console.log(r?.data,'response reviewwww');
    }).catch(e=>{
      console.log(e,'error in reviewwee');
    })
  }).catch(e=>{
    console.log(e,'eeeeeeee');
  })
 }
}
  const renderReviewItem = ({item}) => <ReviewItem item={item} />;
  const renderFooter = () => {
    if (!showOlder) {
      return (
        <TouchableOpacity  onPress={handleShowOlderReviews} style={{marginVertical:10}}>
<Text style={{color:'#936DAC',fontWeight:'600'}}>
Show Older Reviews...
</Text>
        </TouchableOpacity>
        // <Text>jhjjh</Text>
        // <Button title="Show Older Reviews" onPress={handleShowOlderReviews} />
      );
    }
    return null;
  };

  // const keyExtractor = item => item.id.toString();

  const filteredReviews = showOlder ? reviews : reviews.slice(0, 3);
  const ReviewItem = ({item}) => {
    // console.log(item,'itemitemitemitemitem');
    const timeAgo = getTimeAgo(item?.createdAt);
// console.log(timeAgo,'timeAgotimeAgotimeAgotimeAgo');
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      const iconName = 'star';
      starIcons.push(
        <MIcon
          key={i}
          name={iconName}
          size={24}
          color={i <= item?.rating ? '#FFD700' : '#D3D3D3'}
          style={{marginRight: 5}}
        />,
      );
    }
    return (
      <View style={{marginBottom: 10, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 15,
            borderRadius: 8,
            marginTop: 20,
            flex: 1,
          }}>
          <View style={{flexDirection: 'row'}}>{starIcons}</View>
          <Text style={{fontSize: 18, color: '#000'}}>{item?.review}</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: 10,
            }}>
            <Text>Sal1234</Text>
            <Text>{`${timeAgo?.hours<=24?`${timeAgo?.hours} hour ago`:`${timeAgo?.days} days ago`} `}</Text>
          </View>
        </View>
        {/* {starIcons} */}
        {/* <Text>{`(${rating} stars)`}</Text> */}
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(195, 136, 247, 0.2)',
          backgroundOpacity: 0.1,
        }}>
        <Toaster ref={toasterRef} />

        <HeaderComponent
          text={'Reviews'}
          handleBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView >
         <View style={{padding:15}}>
         <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
            Overall Rating
          </Text>
          <Text style={{paddingVertical: 10, color: '#000', fontSize: 16}}>
            Lorem Ipsum is simply dummytext of the printing and
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {Array.from({length: 5}).map((_, index) => {
              const starNumber = index + 1;
              const isFilled = starNumber <= 4;

              return (
                <TouchableOpacity
                  key={starNumber}
                  activeOpacity={0.7}
                  // onPress={() => handleStarPress(starNumber)}
                  >
                  <MIcon
                    name={'star'}
                    size={32}
                    color={isFilled ? '#FFD700' : '#D3D3D3'}
                  />
                </TouchableOpacity>
              );
            })}
            <Text style={{fontSize: 18, color: '#000'}}>{`(${reviews.length})`}</Text>
          </View>
          <View style={{marginTop: 22}}>
            <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
              {`Reviews (${reviews.length})`}
            </Text>
            <FlatList
              data={filteredReviews}
              renderItem={renderReviewItem}
              // keyExtractor={keyExtractor}
              ListFooterComponent={renderFooter}
            />
            {/* <View style={{backgroundColor: '#fff',padding:15,borderRadius:8,marginTop:20}}>
         <Text>Stars</Text>
         <Text style={{fontSize:18,color:'#000'}}>
          Nice
         </Text>
         <View style={{justifyContent:'space-between',flexDirection:'row',paddingTop:10}}>
          <Text>Sal1234</Text>
          <Text>2 hour ago</Text>
         </View>
          </View> */}
          </View>
        <View>
        <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
        Add your rating and review!
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {Array.from({length: 5}).map((_, index) => {
              const starNumber = index + 1;
              const isFilled = starNumber <= rating;

              return (
                <TouchableOpacity
                  key={starNumber}
                  activeOpacity={0.7}
                  onPress={() => handleStarPress(starNumber)}
                  style={{marginHorizontal:4}}
                  >
                  <MIcon
                    name={'star'}
                    size={32}
                    color={isFilled ? '#FFD700' : '#D3D3D3'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={{marginVertical:10}}>
            Tap to add your rating
          </Text>
          
        </View>
        <TextInput
            style={{
              width: '100%',
              // borderColor: '#D9D9D9',
              // borderWidth: 1,
              // paddingLeft: 50,
              fontSize: 16,
              backgroundColor: '#fff',
              borderRadius: 8,
            }}
            placeholderTextColor={'#999999'}
            placeholder="Add your review ..."
            mode={'outlined'}
            multiline
            numberOfLines={3}
            outlineColor='#fff'
            activeOutlineColor='#fff'

            // keyboardType="number-pad"
           
            // maxLength={10}
            value={reviewText}
            onChangeText={(e)=>{
              setReviewText(e)
            }}
          />
         </View>
       <View style={{marginTop:'18%',marginBottom:25}}>
       <Button
    children='Submit'
    contentStyle={{
        backgroundColor:'#936DAC',
        width:'70%',
        paddingVertical:4,
      borderRadius:28,
      alignSelf:'center'


    }}
    labelStyle={{fontSize:20,fontWeight:'500',color:'white'}}
    onPress={()=>addReviewPress()}
    />
       </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default ReviewScreen;
