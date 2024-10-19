import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { en } from '../resources/translations/app/en';
import { useTheme } from '../ThemeContext';

const AccessSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  // const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out successfully.');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => Alert.alert('Account Deleted'),
        },
      ]
    );
  };

  const handleContactUs = () => {
    Alert.alert(
      'Contact Us',
      'For support, please reach out to: lvctdev@lvcthealth.org'
    );
  };

  return (
    <LinearGradient
      colors={isDarkMode ? ['#333333', '#666666'] : ['#FF9FF3', '#FEC3A6']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: '#FFFFFF' }}
              thumbColor={notificationsEnabled ? '#FF9FF3' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingItem}>
            <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
              Dark Mode
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AboutScreen')}
          >
            <Text style={styles.menuItemText}>{en.about}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('TermsConditionsScreen')}
          >
            <Text style={styles.menuItemText}>{en.t_and_c}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('PrivacyPolicyScreen')}
          >
            <Text style={styles.menuItemText}>{en.privacy_policy}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AccessSettingsScreen')}
          >
            <Text style={styles.menuItemText}>{en.access_setting}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
            <Text style={styles.buttonText}>Delete account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleContactUs}>
            <Text style={styles.buttonText}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
  },
  settingsContainer: {
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  settingText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  darkText: {
    color: '#333333',
  },
  menuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FF9FF3',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccessSettings;
