import React from 'react';
import { View, Text, Image, Switch, StyleSheet } from 'react-native';
import { scale,verticalScale,moderateScale } from 'react-native-size-matters';

const AppItem = ({ item, toggleApp }) => {
  return (
    <View style={styles.appItem}>
      <Image source={{ uri: item.app_icon }} style={styles.appIcon} />
      <Text style={styles.appName}>{item.app_name}</Text>
      <Switch
        value={item.status === 'Active'}
        onValueChange={() => toggleApp(item.app_id)}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={item.status === 'Active' ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(18),
  },
  appIcon: {
    width: scale(40),
    height: verticalScale(40),
    marginRight: moderateScale(10),
    resizeMode:'contain',
  },
  appName: {
    flex:verticalScale(1),
    fontSize: moderateScale(16),
  },
});

export default AppItem;
