import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native'
import Header from './components/Header'
import ItemList from './components/ItemList'

const App = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <Header />
                <ItemList />
            </View>
        </SafeAreaView>
    )
}

export default App
