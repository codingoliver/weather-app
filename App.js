import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput
} from "react-native";
import {Container, Body} from "native-base";
import {Row, Grid} from "react-native-easy-grid";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground
          imageStyle={styles.image}
          style={styles.imageContainer}
          source={require("./assets/bg.png")}
        >
          <Grid>
            <Row>
              <Body>
                <Text style={styles.text}>Shanghai</Text>
                <Text style={styles.midText}>Showers</Text>
                <Text style={styles.text}>13º</Text>
                <TextInput
                  style={styles.searchBox}
                  placeholder="Search any city"
                />
              </Body>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: { flex: 1 },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "stretch"
  },
  searchBox: {
    width: "80%",
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 10,
    color: "white"
  },
  text: {
    fontSize: 32,
    color: "white",
    marginBottom: 8
  },
  midText: {
    fontSize: 14,
    color: "white",
    marginBottom: 8,
  }
});
