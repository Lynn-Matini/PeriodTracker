import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
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
        <Text style={[styles.title, isDarkMode && styles.darkText]}>About This App</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.contentContainer, isDarkMode && styles.darkContentContainer]}>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            Welcome to your personal period tracking companion! This app is designed to help you track your menstrual cycle, monitor symptoms, and gain valuable insights into your reproductive health.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            Key Features:
          </Text>
          <Text style={[styles.listItem, isDarkMode && styles.darkText]}>• Accurate cycle predictions</Text>
          <Text style={[styles.listItem, isDarkMode && styles.darkText]}>• Symptom tracking and analysis</Text>
          <Text style={[styles.listItem, isDarkMode && styles.darkText]}>• Customizable reminders</Text>
          <Text style={[styles.listItem, isDarkMode && styles.darkText]}>• Insightful health tips</Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            Our mission is to empower you with knowledge about your body and menstrual health. By tracking your cycles and symptoms, you can better understand your body's patterns and make informed decisions about your health and lifestyle.
          </Text>
          <Text style={[styles.content, isDarkMode && styles.darkText]}>
            Remember, this app is a tool for tracking and awareness. Always consult with a healthcare professional for medical advice.
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
  listItem: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 15,
    marginBottom: 5,
  },
  // Dark mode styles
  darkText: {
    color: '#FFFFFF',
  },
  darkContentContainer: {
    backgroundColor: 'rgba(80, 80, 80, 0.8)',
  },
});

export default AboutScreen;
