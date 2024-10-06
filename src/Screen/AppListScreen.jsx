import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {AppHeader, AppItemView, AppSearch} from '../Components';
import {getAppData} from '../API/ApiCall';

const AppListScreen = () => {
  const [apps, setApps] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApps();
  }, []);

  useEffect(() => {
    const filtered = apps.filter(app =>
      app?.app_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [searchQuery, apps]);

  const fetchApps = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getAppData();
      setApps(response);
      // setFilteredApps(response);
    } catch (error) {
      console.error('Error fetching apps:', error);
      setError('Failed to fetch apps. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleApp = appId => {
    setApps(prevApps =>
      prevApps.map(app =>
        app.app_id === appId
          ? {
              ...app,
              status: app.status === 'Active' ? 'Inactive' : 'Active',
            }
          : app,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <AppSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size='large' color="red" />
        </View>
      ) : error ? (
        <View style={styles.centerContent}>
          <Text>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchApps}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredApps}
          renderItem={({item}) => (
            <AppItemView item={item} toggleApp={toggleApp} />
          )}
          keyExtractor={item => item.app_id.toString()}
          style={styles.list}
          ListEmptyComponent={
            <View style={styles.centerContent}>
              <Text>No apps found</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retryButton: {
    marginTop: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: '#4CAF50',
    borderRadius: moderateScale(5),
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AppListScreen;