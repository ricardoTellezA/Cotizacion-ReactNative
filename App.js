import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from "react-native";
import { YellowBox } from "react-native-web";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import colors from "./src/utils/colors";
import ResultCalculation from './src/components/ResultCalculation';

YellowBox.ignoreWarnings([`Some dependencies are incompatible with the installed expo package version:
- @react-native-picker/picker - expected version: 2.2.1 - actual version installed: 2.4.1
Your project may not work correctly until you install the correct versions of the packages.
To install the correct versions of these packages, please run: expo doctor --fix-dependencies,
or install individual packages by running expo install [package-name ...]`]);

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [month, setMonth] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (capital && interes && month) calcular();
    else reset();
  }, [capital, interes, month]);
  const calcular = () => {
    reset();
    if (!capital) {
      setErrorMessage("Debes ingresar un capital");
    } else if (!interes) {
      setErrorMessage("Debes ingresar un interes");
    } else if (!month) {
      setErrorMessage("Debes ingresar un mes");
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(1 + i, - month)) / i);
      setTotal({
        monthFee: fee.toFixed(2),
        totalPay: (fee * month).toFixed(2),
      });
    }
  }

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Corizador de prestamos</Text>
        <Form setCapital={setCapital} setInteres={setInteres} setMonth={setMonth} />
      </SafeAreaView>

      <ResultCalculation
        errorMessage={errorMessage}
        capital={capital}
        interes={interes}
        month={month}
        total={total}

      />

      <Footer calcular={calcular} />


    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    // marginTop: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },

  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 15,
  },
});
