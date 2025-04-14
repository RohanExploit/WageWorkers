import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { MapPin, IndianRupee, Calendar, Clock } from 'lucide-react-native';

const WORK_TYPES = ['Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Mason', 'Helper'];

export default function PostJobScreen() {
  const [workType, setWorkType] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Experienced Plumber Needed"
            placeholderTextColor="#A1A1AA"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Work Type</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.workTypesContainer}
          >
            {WORK_TYPES.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.workTypeChip,
                  workType === type && styles.workTypeChipSelected,
                ]}
                onPress={() => setWorkType(type)}
              >
                <Text
                  style={[
                    styles.workTypeText,
                    workType === type && styles.workTypeTextSelected,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Location</Text>
          <View style={styles.inputWithIcon}>
            <MapPin size={20} color="#71717A" />
            <TextInput
              style={styles.iconInput}
              placeholder="Work location"
              placeholderTextColor="#A1A1AA"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Daily Budget</Text>
          <View style={styles.inputWithIcon}>
            <IndianRupee size={20} color="#71717A" />
            <TextInput
              style={styles.iconInput}
              placeholder="Amount per day"
              keyboardType="numeric"
              placeholderTextColor="#A1A1AA"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.formGroup, styles.flex1]}>
            <Text style={styles.label}>Start Date</Text>
            <View style={styles.inputWithIcon}>
              <Calendar size={20} color="#71717A" />
              <TextInput
                style={styles.iconInput}
                placeholder="Select date"
                placeholderTextColor="#A1A1AA"
              />
            </View>
          </View>

          <View style={[styles.formGroup, styles.flex1]}>
            <Text style={styles.label}>Duration</Text>
            <View style={styles.inputWithIcon}>
              <Clock size={20} color="#71717A" />
              <TextInput
                style={styles.iconInput}
                placeholder="Number of days"
                keyboardType="numeric"
                placeholderTextColor="#A1A1AA"
              />
            </View>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Job Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe the job requirements, skills needed, and any other important details"
            placeholderTextColor="#A1A1AA"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={() => {
            // Handle job posting
            router.back();
          }}
        >
          <Text style={styles.submitButtonText}>Post Job</Text>
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
  workTypesContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  workTypeChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F4F4F5',
    marginRight: 8,
  },
  workTypeChipSelected: {
    backgroundColor: '#0066FF',
  },
  workTypeText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#71717A',
  },
  workTypeTextSelected: {
    color: '#FFFFFF',
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
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  flex1: {
    flex: 1,
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
  submitButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});