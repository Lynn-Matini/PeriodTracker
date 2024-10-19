import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Share,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from '../../ThemeContext'; // Make sure this path is correct
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AccessSettingsScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this amazing period tracking app!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LinearGradient
      colors={isDarkMode ? ['#333333', '#666666'] : ['#FF9FF3', '#FEC3A6']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDarkMode ? '#FFFFFF' : '#333333'}
          />
        </TouchableOpacity>

        <Text style={[styles.title, isDarkMode && styles.darkText]}>
          Access Settings
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.contentContainer,
            isDarkMode && styles.darkContentContainer,
          ]}
        >
          {/* Language Picker */}
          <View style={styles.settingItem}>
            <View>
              <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
                Language
              </Text>
              <Text style={[styles.subText, isDarkMode && styles.darkSubText]}>
                Change the language
              </Text>
            </View>

            <RNPickerSelect
              onValueChange={(value) => setSelectedLanguage(value)}
              items={[
                { label: 'English', value: 'en' },
                { label: 'Swahili', value: 'sw' },
                { label: 'French', value: 'fr' },
                { label: 'Spanish', value: 'es' },
                { label: 'Mandarin', value: 'zh' },
                { label: 'Hindi', value: 'hi' },
                { label: 'Arabic', value: 'ar' },
                { label: 'Japanese', value: 'ja' },
                { label: 'Russian', value: 'ru' },
                { label: 'Portuguese', value: 'pt' },
                { label: 'German', value: 'de' },
                { label: 'Korean', value: 'ko' },
                { label: 'Italian', value: 'it' },
                { label: 'Dutch', value: 'nl' },
                { label: 'Turkish', value: 'tr' },
              ]}
              value={selectedLanguage}
              style={pickerSelectStyles(isDarkMode)}
            />
          </View>

          {/* Share App */}
          <View style={styles.settingItem}>
            <View>
              <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
                Share App
              </Text>
              <Text style={[styles.subText, isDarkMode && styles.darkSubText]}>
                Spread the love
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.shareButton, isDarkMode && styles.darkShareButton]}
              onPress={handleShare}
            >
              <Text
                style={[
                  styles.shareButtonText,
                  isDarkMode && styles.darkShareButtonText,
                ]}
              >
                Share
              </Text>
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
  },
  subText: {
    fontSize: 14,
    color: '#666666',
  },
  shareButton: {
    backgroundColor: '#FF9FF3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Dark mode styles
  darkText: {
    color: '#FFFFFF',
  },
  darkSubText: {
    color: '#CCCCCC',
  },
  darkContentContainer: {
    backgroundColor: 'rgba(80, 80, 80, 0.8)',
  },
  darkShareButton: {
    backgroundColor: '#FF9FF3',
  },
  darkShareButtonText: {
    color: '#333333',
  },
});

const pickerSelectStyles = (isDarkMode) => ({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: isDarkMode ? '#666666' : '#cccccc',
    borderRadius: 4,
    color: isDarkMode ? '#FFFFFF' : '#333333',
    paddingRight: 30,
    backgroundColor: isDarkMode ? '#444444' : '#FFFFFF',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: isDarkMode ? '#666666' : '#cccccc',
    borderRadius: 8,
    color: isDarkMode ? '#FFFFFF' : '#333333',
    paddingRight: 30,
    backgroundColor: isDarkMode ? '#444444' : '#FFFFFF',
  },
});

export default AccessSettingsScreen;
