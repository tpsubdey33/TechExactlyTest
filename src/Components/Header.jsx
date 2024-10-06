import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale,moderateScale,verticalScale} from 'react-native-size-matters';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer}>
          <MaterialIcons
            name="keyboard-arrow-left"
            color="#ffffff"
            size={scale(25)}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Suvojit</Text>
        <View style={styles.connectedStatus}>
          <Text style={styles.connectedText}>Connected</Text>
          <Ionicons name="checkmark-circle" size={moderateScale(20)} color="#4CAF50" />
        </View>
      </View>
      <View style={styles.tabBar}>
        <Text style={styles.tabActive}>Applications</Text>
        <Text style={styles.tab}>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',
  },
  header: {
    padding: moderateScale(20),
    alignItems: 'center',
  },
  backIconContainer: {
    position: 'absolute',
    left: moderateScale(10),
    top: moderateScale(10),
  },
  avatar: {
    width: scale(80),
    height: verticalScale(80),
    borderRadius: moderateScale(40),
    resizeMode:"contain",
  },
  username: {
    color: '#fff',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
  },
  connectedStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(21),
    backgroundColor: '#ffffff',
  },
  connectedText: {
    color: '#000000',
    marginRight: moderateScale(5),
  },
  tabBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50',
  },
  tab: {
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    color: '#ffffff',
  },
  tabActive: {
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    borderBottomWidth: moderateScale(3),
    borderBottomColor: '#ffffff',
    color: '#ffffff',
  },
});

export default Header;
