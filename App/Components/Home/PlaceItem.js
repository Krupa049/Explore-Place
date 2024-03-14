import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';

export default function PlaceItem({place}) {
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        gap:15,
        marginTop:20
    }}>
      <Image source={{uri:
      "https://maps.googleapis.com/maps/api/place/photo"+
      "?maxwidth=400"+
      "&photo_reference=" +
      place?.photos[0]?.photo_reference +
      "&key=AIzaSyB-3LSaodcL3S-pAQPhg-DcHAkn6ftX3To",
       }}
        style={{width:110, height:110, borderRadius:15}} />
      <View style={{flex:1}}>
        <Text numberOfLines={2} style={{fontSize:18, marginBottom:5}}>{place.name}</Text>
        <Text numberOfLines={2} style={{fontSize:18, marginBottom:5}}>{place.vicinity}</Text>
        <View style={{display:'flex', alignItems:'center', flexDirection:'row', gap:2}}>
            <AntDesign name="star" size={20} color={Colors.YELLOW} />
            <Text>{PlaceItem.rating}</Text>
        </View>
      </View>
      
    </View>
  )
}