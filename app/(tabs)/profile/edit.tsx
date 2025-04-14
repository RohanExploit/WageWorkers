import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Camera, MapPin, IndianRupee, Languages } from 'lucide-react-native';

const LANGUAGES = ['English', 'Hindi', 'Marathi', 'Gujarati', 'Bengali', 'Tamil', 'Telugu'];
const SKILLS = ['Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Mason', 'Helper'];

export default function EditProfileScreen() {
  const [selectedLanguages, setSelectedLanguages] = useState(['Hindi', 'English']);
  const [selectedSkills, setSelectedSkills] = useState(['Plumbing', 'Pipe Fitting']);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Camera size={20} color="#FFFFFF" />
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            defaultValue="Rajesh Kumar"
            placeholder="Enter your full name"
            placeholderTextColor="#A1A1AA"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>About</Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            defaultValue="Experienced plumber specializing in residential and commercial plumbing services. Expert in modern fixtures and emergency repairs."
            placeholder="Tell us about yourself and your work experience"
            placeholderTextColor="#A1A1AA"
            textAlignVertical="top"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Location</Text>
          <View style={styles.inputWithIcon}>
            <MapPin size={20} color="#71717A" />
            <TextInput
              style={styles.iconInput}
              defaultValue="Andheri West, Mumbai"
              placeholder="Enter your location"
              placeholderTextColor="#A1A1AA"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Daily Rate (₹)</Text>
          <View style={styles.inputWithIcon}>
            <IndianRupee size={20} color="#71717A" />
            <TextInput
              style={styles.iconInput}
              defaultValue="1200"
              placeholder="Enter your daily rate"
              keyboardType="numeric"
              placeholderTextColor="#A1A1AA"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Languages</Text>
          <View style={styles.chipsContainer}>
            {LANGUAGES.map((language) => (
              <TouchableOpacity
                key={language}
                style={[
                  styles.chip,
                  selectedLanguages.includes(language) && styles.chipSelected,
                ]}
                onPress={() => toggleLanguage(language)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selectedLanguages.includes(language) && styles.chipTextSelected,
                  ]}
                >
                  {language}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Skills</Text>
          <View style={styles.chipsContainer}>
            {SKILLS.map((skill) => (
              <TouchableOpacity
                key={skill}
                style={[
                  styles.chip,
                  selectedSkills.includes(skill) && styles.chipSelected,
                ]}
                onPress={() => toggleSkill(skill)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selectedSkills.includes(skill) && styles.chipTextSelected,
                  ]}
                >
                  {skill}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => router.back()}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageSection: {
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F5',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  changePhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  changePhotoText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  form: {
    padding: 16,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F4F4F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#18181B',
  },
  textArea: {
    backgroundColor: '#F4F4F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#18181B',
    height: 120,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F5',
    borderRadius: 12,
    padding: 16,
  },
  iconInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#18181B',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F4F4F5',
  },
  chipSelected: {
    backgroundColor: '#0066FF',
  },
  chipText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#71717A',
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  saveButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});