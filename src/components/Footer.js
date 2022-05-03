import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footer({ calcular }) {
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity onPress={calcular} style={styles.boton}>
                <Text style={styles.text}>CALCULAR</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,

    },

    boton: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',
        alignItems: 'center',
    }
})