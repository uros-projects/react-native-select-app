import React, { useState, useEffect } from 'react'
import {
    StyleSheet,    
    View,   
    FlatList
} from 'react-native'
import Item from './Item'

const data = [
    {text: 'Marvin'},
    {text: 'Jimmy'},
    {text: 'Alicia'},
    {text: 'Smith'},
    {text: 'Janis'},
    {text: 'John'},
    {text: 'Cindy'},
    {text: 'Tom'},
    {text: 'Joe'},
    {text: 'Justin'},
    {text: 'Suzan'},
    {text: 'Elizabeth'}  
];

const ItemList = () => {
    const [items, setItems] = useState(data)

    useEffect(() => {
        setItems(
            items.map((item, i) => {
                return {
                    ...item,
                    key: i.toString(),
                    isSelected: false
                }
            })
        )          
    }, [])

    const pressHandler = index => {
        setItems(
            items.map(item => {                
                if(item.key === index) {
                    if(item.isSelected) {
                        return {
                            ...item,
                            isSelected: false
                        }
                    } else {
                        return {
                            ...item,
                            isSelected: true
                        }
                    }
                } else {
                    return {
                        ...item,
                        isSelected: false
                    }
                }
            })
        )
    }

    return (        
        <View style={styles.list}>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <Item item={item} pressHandler={pressHandler} />
                )}                    
            />                
        </View>        
    )
}

const styles = StyleSheet.create({   
    list: {
        width: '80%',
        marginLeft: '10%',
        paddingBottom: 40
    }      
})

export default ItemList
