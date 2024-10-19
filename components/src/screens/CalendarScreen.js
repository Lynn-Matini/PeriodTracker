import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../ThemeContext';

const CalendarScreen = () => {
  const { isDarkMode } = useTheme();
  const [selectedDay, setSelectedDay] = useState('18 October'); // Set default selected day
  const [isPeriodLogged, setIsPeriodLogged] = useState(false);

  const handleFitnessCheck = () => {
    // Implement fitness check functionality
    console.log('Fitness check clicked!');
  };

  const logPeriod = () => {
    setIsPeriodLogged(true);
    alert('Period Logged Successfully!');
  };

  return (
    <LinearGradient
      colors={isDarkMode ? ['#1a3a1a', '#2d5a2d'] : ['#90EE90', '#32CD32']}
      style={styles.container}
    >
      <ScrollView>
        {/* Title */}
        <Text style={[styles.title, isDarkMode && styles.darkText]}>
          My Calendar
        </Text>

        {/* Custom Header with Selected Day and Period Information */}
        <View style={styles.header}>
          <Text style={[styles.date, isDarkMode && styles.darkText]}>
            Today - {selectedDay}
          </Text>
          <Text
            style={[styles.periodText, isDarkMode && styles.darkPeriodText]}
          ></Text>
        </View>

        {/* Calendar Component */}
        <View
          style={[
            styles.calendarContainer,
            isDarkMode && styles.darkCalendarContainer,
          ]}
        >
          <Calendar
            onDayPress={(day) => setSelectedDay(day.dateString)}
            markedDates={{}}
            theme={{
              calendarBackground: isDarkMode
                ? '#444444'
                : 'rgba(255, 255, 255, 0.9)',
              textSectionTitleColor: isDarkMode ? '#FFFFFF' : '#FF9FF3',
              dayTextColor: isDarkMode ? '#FFFFFF' : '#333333',
              todayTextColor: '#FF9FF3',
              selectedDayBackgroundColor: '#FF9FF3',
              selectedDayTextColor: '#FFFFFF',
              monthTextColor: isDarkMode ? '#FFFFFF' : '#FF9FF3',
              arrowColor: isDarkMode ? '#FFFFFF' : '#FF9FF3',
            }}
          />
        </View>

        {/* Log Period Button */}
        <TouchableOpacity
          style={[styles.logButton, isDarkMode && styles.darkLogButton]}
          onPress={logPeriod}
        >
          <Text
            style={[
              styles.logButtonText,
              isDarkMode && styles.darkLogButtonText,
            ]}
          >
            Log Period
          </Text>
        </TouchableOpacity>

        {/* Insights Section */}
        <View style={styles.insights}>
          <Text style={[styles.insightsTitle, isDarkMode && styles.darkText]}>
            My Daily Insights
          </Text>
          <View style={styles.insightCard}>
            <Text style={[styles.insightText, isDarkMode && styles.darkText]}>
              Period started on {selectedDay}
            </Text>
          </View>
        </View>

        {/* Fitness Check Button */}
        <TouchableOpacity
          style={[styles.fitnessButton, isDarkMode && styles.darkFitnessButton]}
          onPress={handleFitnessCheck}
        >
          <Text
            style={[
              styles.fitnessButtonText,
              isDarkMode && styles.darkFitnessButtonText,
            ]}
          >
            Fitness Check
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  periodText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9FF3',
  },
  darkPeriodText: {
    color: '#FF9FF3',
  },
  calendarContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  darkCalendarContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logButton: {
    backgroundColor: '#FF9FF3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  darkLogButton: {
    backgroundColor: '#333',
  },
  logButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  darkLogButtonText: {
    color: '#FFFFFF',
  },
  insights: {
    marginTop: 20,
  },
  insightsTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  insightCard: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
  },
  insightText: {
    fontSize: 16,
    color: '#333',
  },
  fitnessButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: 'center',
  },
  darkFitnessButton: {
    backgroundColor: '#444444',
  },
  fitnessButtonText: {
    color: '#FF9FF3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkFitnessButtonText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#FFFFFF',
  },
});

export default CalendarScreen;
