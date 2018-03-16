import React from 'react';
import {
  View, StyleSheet,
  Dimensions, TouchableOpacity, ScrollView, Text,
  Touchableopacity
} from 'react-native';

import WBI from "./WBIcon/index.js";
import { Svg, LinearGradient } from "expo";

import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      offsetValues: [
        '-2', '-1.5', '-1'
      ],
      offsets: [
        '0.0001', '0.0002', '0.0003' // Avoid duplicate value cause error in Android
      ],
    }

  }

  render() {
    const grad = ['#3a6073', '#16222a'];
    const size = 100;
    const round = 100;
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#eb3b5a"
                  name="payment"
                  fill="white"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="round"
                  fillType="#eb3b5a"
                  name="payment"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circle"
                  fillType="#eb3b5a"
                  name="payment"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
          </View>



        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50, flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  icon: {
    margin: 5
  }
});