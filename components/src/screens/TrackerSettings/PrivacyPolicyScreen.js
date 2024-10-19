import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../ThemeContext'; // Make sure this path is correct
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PrivacyPolicyScreen = () => {
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();

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
        <Text style={[styles.title, isDarkMode && styles.darkText]}>Privacy Policy</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.contentContainer, isDarkMode && styles.darkContentContainer]}>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            Your privacy is important to us. This policy outlines how we handle your data:
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            1. Data Collection: We collect only the information you provide directly in the app for period tracking purposes.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            2. Data Use: Your data is used solely to provide you with period predictions and insights within the app.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            3. Data Storage: All your data is stored securely on your device and is not transmitted to our servers.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            4. Data Sharing: We do not share your personal information with any third parties.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            5. Data Control: You have full control over your data. You can delete your account and all associated data at any time.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            6. Updates: We may update this policy periodically. Please review it regularly.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            By using this app, you agree to this privacy policy. If you have any questions, please contact us.
          </Text>
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
  content: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 15,
  },
  // Dark mode styles
  darkText: {
    color: '#FFFFFF',
  },
  darkContentContainer: {
    backgroundColor: 'rgba(80, 80, 80, 0.8)',
  },
});

export default PrivacyPolicyScreen;
