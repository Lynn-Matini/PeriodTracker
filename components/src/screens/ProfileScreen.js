import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../ThemeContext';

const ProfileScreen = () => {
  const [username, setUsername] = useState('Lynn Matini');
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);
  const { isDarkMode } = useTheme();

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveUsername = () => {
    setUsername(tempUsername);
    setIsEditing(false);
  };

  return (
    <LinearGradient
      colors={isDarkMode ? ['#333333', '#666666'] : ['#FF9FF3', '#FEC3A6']}
      style={styles.container}
    >
      <View style={styles.profileHeader}>
        <Image
          source={require('../../../assets/images/default-avatar.png')}
          style={styles.avatar}
        />
        <Text style={[styles.username, isDarkMode && styles.darkText]}>
          {username}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, isDarkMode && styles.darkText]}>
            28
          </Text>
          <Text style={[styles.statLabel, isDarkMode && styles.darkText]}>
            Cycle Length
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, isDarkMode && styles.darkText]}>
            5
          </Text>
          <Text style={[styles.statLabel, isDarkMode && styles.darkText]}>
            Period Length
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.editButton, isDarkMode && styles.darkEditButton]}
        onPress={handleEditProfile}
      >
        <Text
          style={[
            styles.editButtonText,
            isDarkMode && styles.darkEditButtonText,
          ]}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuItem, isDarkMode && styles.darkMenuItem]}
        >
          <Text style={[styles.menuItemText, isDarkMode && styles.darkText]}>
            My Cycle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, isDarkMode && styles.darkMenuItem]}
        >
          <Text style={[styles.menuItemText, isDarkMode && styles.darkText]}>
            Symptoms
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, isDarkMode && styles.darkMenuItem]}
        >
          <Text style={[styles.menuItemText, isDarkMode && styles.darkText]}>
            Reminders
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isEditing} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View
            style={[styles.modalContent, isDarkMode && styles.darkModalContent]}
          >
            <Text
              style={[styles.modalTitle, isDarkMode && styles.darkModalTitle]}
            >
              Edit Username
            </Text>
            <TextInput
              style={[styles.input, isDarkMode && styles.darkInput]}
              value={tempUsername}
              onChangeText={setTempUsername}
              placeholder="Enter new username"
              placeholderTextColor={isDarkMode ? '#999' : '#666'}
            />
            <TouchableOpacity
              style={[styles.saveButton, isDarkMode && styles.darkSaveButton]}
              onPress={handleSaveUsername}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  editButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 30,
  },
  editButtonText: {
    color: '#FF9FF3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    width: '100%',
    marginTop: 40,
  },
  menuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#FF9FF3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Dark mode styles
  darkText: {
    color: '#FFFFFF',
  },
  darkEditButton: {
    backgroundColor: '#444444',
  },
  darkEditButtonText: {
    color: '#FF9FF3',
  },
  darkMenuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  darkModalContent: {
    backgroundColor: '#333333',
  },
  darkModalTitle: {
    color: '#FFFFFF',
  },
  darkInput: {
    borderColor: '#666',
    color: '#FFFFFF',
    backgroundColor: '#444444',
  },
  darkSaveButton: {
    backgroundColor: '#FF9FF3',
  },
});

export default ProfileScreen;
