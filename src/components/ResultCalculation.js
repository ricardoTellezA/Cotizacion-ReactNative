import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation({ capital, interes, month, total, errorMessage }) {
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Capital" value={`$${capital} `} />
                    <DataResult title="Interes %" value={` %${interes} `} />
                    <DataResult title="Plazos" value={`${month} Meses `} />
                    <DataResult title="Pago Mensual" value={`$${total.monthFee} `} />
                    <DataResult title="Total a Pagar" value={`$${total.totalPay} `} />


                </View>
            )}

            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}


function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
    content: {
        marginTop: 50,
        marginHorizontal: 40,

    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})