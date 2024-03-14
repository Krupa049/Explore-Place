import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {
  const CategoryList=[
    {
      id:1,
      name:'Gas Station',
      value:'gas_station',
      icon:require('./../../../assets/gas.png')
    },
    {
      id:2,
      name:'Restaurants',
      value:'restaurant',
      icon:require('./../../../assets/food.png')
    },
    {
      id:3,
      name:'Cafe',
      value:'cafe',
      icon:require('./../../../assets/cafe.png')
    }
  ]
  return (
    <View style={{marginTop:15}}>
      <Text style={{ fontSize:20 }}>Select Top Category</Text>

      <FlatList
        data={CategoryList}
        horizontal={true}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>console.log(item.name)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}