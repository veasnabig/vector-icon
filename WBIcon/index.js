import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Svg, LinearGradient } from "expo";

const { Path } = Svg;
// const { width, height } = Dimensions.get('window');

import jsonData from "../WBIcon/WBIcon.json";

export default class WBI extends React.Component {
    render() {
        const { background, gradient, size, round } = this.props;
        let grads = gradient && gradient.map(o => o) || [];
        let colors = grads.length === 0 ? !!background ? [background, background] : grads : grads;
        return (
            <View style={styles.container}>
                {/* <LinearGradient
                    colors={colors}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: size,
                        width: size,
                        borderRadius: round,
                        overflow: 'hidden',
                        zIndex: 0
                    }}
                /> */}
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 65 65"
                >
                    {
                        this._renderBackgroundType()
                    }
                    {
                        this._renderIcon()
                    }
                </Svg>
            </View>
        );
    }
    _renderIcon() {
        const { name, fill } = this.props;
        let fillColor = fill || 'black';
        return !!name ? jsonData[name].map((o) => {
            return (
                <Path key={o} d={o} fill={fillColor} />
            )
        }) : (<Text></Text>)
    }
    _renderBackgroundType() {
        const { type, fillType } = this.props;
        let fillColor = fillType || 'black';
        return !!type ? jsonData[type].map((o) => {
            return (
                <Path key={o} d={o} fill={fillColor} />
            )
        }) : (<Text></Text>)
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

WBI.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    fill: PropTypes.string,
    gradient: PropTypes.array,
    background: PropTypes.string,
    size: PropTypes.number,
    round: PropTypes.number
}