import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../Assets/Images/map';
import {styles} from './HeaderStyle';
import LinearGradient from 'react-native-linear-gradient';

const Header = props => {
  return (
    <View>
      <View style={styles.headerView}>
        {props.isBack ? (
          <TouchableOpacity style={styles.backView}>
            <Image source={IMAGE.back} style={styles.backStyle} />
          </TouchableOpacity>
        ) : null}

        <View style={styles.titleView}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
      </View>
      <Image resizeMode="contain" source={IMAGE.line} style={styles.img} />
    </View>
  );
};

export default Header;
