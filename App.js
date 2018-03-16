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
    const size = 70;
    return (
      <ScrollView>
        <View style={styles.container}>

          {/* payment */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#26de81"
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
                  fillType="#26de81"
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
                  fillType="#26de81"
                  name="payment"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="squareOutline"
                  fillType="#26de81"
                  name="payment"
                  fill="#26de81"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="roundOutline"
                  fillType="#26de81"
                  name="payment"
                  fill="#26de81"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circleOutline"
                  fillType="#26de81"
                  name="payment"
                  fill="#26de81"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Payment</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* wallet */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#a55eea"
                  name="wallet"
                  fill="white"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Wallet</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="round"
                  fillType="#a55eea"
                  name="wallet"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Wallet</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circle"
                  fillType="#a55eea"
                  name="wallet"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Wallet</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="squareOutline"
                  fillType="#a55eea"
                  name="wallet"
                  fill="#a55eea"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Wallet</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="roundOutline"
                  fillType="#a55eea"
                  name="wallet"
                  fill="#a55eea"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Wallet</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circleOutline"
                  fillType="#a55eea"
                  name="wallet"
                  fill="#a55eea"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Wallet</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* report */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#2bcbba"
                  name="report"
                  fill="white"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="round"
                  fillType="#2bcbba"
                  name="report"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circle"
                  fillType="#2bcbba"
                  name="report"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Report</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="squareOutline"
                  fillType="#2bcbba"
                  name="report"
                  fill="#2bcbba"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="roundOutline"
                  fillType="#2bcbba"
                  name="report"
                  fill="#2bcbba"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circleOutline"
                  fillType="#2bcbba"
                  name="report"
                  fill="#2bcbba"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Report</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* profit */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#45aaf2"
                  name="profit"
                  fill="white"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Profit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="round"
                  fillType="#45aaf2"
                  name="profit"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Profit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circle"
                  fillType="#45aaf2"
                  name="profit"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Profit</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="squareOutline"
                  fillType="#45aaf2"
                  name="profit"
                  fill="#45aaf2"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Profit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="roundOutline"
                  fillType="#45aaf2"
                  name="profit"
                  fill="#45aaf2"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Profit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circleOutline"
                  fillType="#45aaf2"
                  name="profit"
                  fill="#45aaf2"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Profit</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* contact */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#fa8231"
                  name="contact"
                  fill="#fff"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="round"
                  fillType="#fa8231"
                  name="contact"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circle"
                  fillType="#fa8231"
                  name="contact"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Contact</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="squareOutline"
                  fillType="#fa8231"
                  name="contact"
                  fill="#fa8231"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="roundOutline"
                  fillType="#fa8231"
                  name="contact"
                  fill="#fa8231"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circleOutline"
                  fillType="#fa8231"
                  name="contact"
                  fill="#fa8231"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Contact</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* location */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="square"
                  fillType="#eb3b5a"
                  name="location"
                  fill="white"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="round"
                  fillType="#eb3b5a"
                  name="location"
                  fill="white"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circle"
                  fillType="#eb3b5a"
                  name="location"
                  fill="#fff"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Location</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="squareOutline"
                  fillType="#eb3b5a"
                  name="location"
                  fill="#eb3b5a"
                  size={size}
                  background="rgba(255,255,255,.2)"
                />
                <Text style={{ textAlign: 'center' }}>Location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="roundOutline"
                  fillType="#eb3b5a"
                  name="location"
                  fill="#eb3b5a"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon}>
                <WBI
                  type="circleOutline"
                  fillType="#eb3b5a"
                  name="location"
                  fill="#eb3b5a"
                  size={size}
                  background="white"
                />
                <Text style={{ textAlign: 'center' }}>Location</Text>
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