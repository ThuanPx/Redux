import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./app/domain/actions/actions";

const App = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redux Examples</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => props.test()}
      >
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableHighlight>
      <View style={styles.mainContent}>
        {props.appData.isFetching && <Text>Loading</Text>}
        {props.appData.data.length
          ? props.appData.data.map((person, i) => {
              return (
                <View key={i}>
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>
              );
            })
          : null}
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    appData: state.appData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    test: () => dispatch(fetchData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: "center"
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b7eff"
  },
  buttonText: {
    color: "white"
  },
  mainContent: {
    margin: 10
  }
});
