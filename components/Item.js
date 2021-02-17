import React from 'react'
import {    
    StyleSheet,    
    Text,
    TouchableOpacity    
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Item = ({ pressHandler, item }) => {
    return (
        <TouchableOpacity            
            onPress={() => pressHandler(item.key)}
            style={[
                styles.item,
                item.isSelected ? styles.itemSelected : styles.itemNotSelected
            ]}
        >
            <Text style={styles.text}>
                {item.text}
            </Text>
            <Text style={styles.text}>
                {item.isSelected ? 
                    <AntDesign name='checkcircle' size={24} color='#ebebeb' />
                    :
                    <AntDesign name='closecircle' size={24} color='#2c2c2c' />
                }
            </Text>
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({   
    item: {
        padding: 16,        
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',          
        borderRadius: 10,            
        flexDirection: 'row',
        justifyContent: 'space-between',        
        alignItems: 'center'
    },
    itemSelected: {
        backgroundColor: '#db2432',
        color: 'white'
    },
    itemNotSelected: {
        backgroundColor: '#22a4dd',
        color: 'white'
    },
    text: {
        color: 'inherit',  
        fontSize: '1rem'
    }
})

export default Item
