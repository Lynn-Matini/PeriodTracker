import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../ThemeContext'; // Make sure this path is correct
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const TermsConditionsScreen = () => {
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
        <Text style={[styles.title, isDarkMode && styles.darkText]}>Terms & Conditions</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.contentContainer, isDarkMode && styles.darkContentContainer]}>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            1. App Usage: This app is designed for personal period tracking and should not be used as a substitute for professional medical advice.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            2. Privacy: We prioritize your privacy. Your data is encrypted and stored securely. We do not share your personal information with third parties.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            3. Accuracy: While we strive for accuracy, predictions and insights are based on the data you provide and may not be 100% accurate.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            4. User Responsibility: You are responsible for the accuracy of the information you input and for keeping your account secure.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            5. Updates: We may update these terms periodically. Continued use of the app after changes constitutes acceptance of the new terms.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            6. Termination: We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            By using this app, you agree to these terms and conditions. If you do not agree, please discontinue use of the app.
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

export default TermsConditionsScreen;
