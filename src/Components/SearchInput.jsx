import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale,verticalScale,moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity>
        <Ionicons name="search" size={scale(20)} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: moderateScale(5),
    marginTop: moderateScale(10),
    borderWidth: moderateScale(0.5),
    borderBottomColor: '#000000',
    borderRadius: moderateScale(5),
  },
  searchInput: {
    flex: verticalScale(1),
    height: verticalScale(40),
    paddingLeft: moderateScale(15),
    color: '#000000',
  },
});

export default SearchInput;
