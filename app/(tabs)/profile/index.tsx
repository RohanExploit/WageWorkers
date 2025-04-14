import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { router } from 'expo-router';
import { 
  Star, 
  MapPin, 
  Briefcase, 
  Clock, 
  IndianRupee, 
  FileText, 
  Wallet, 
  Settings,
  ChevronRight,
  Languages,
  Shield
} from 'lucide-react-native';

// This would come from your authentication context
const MOCK_USER = {
  type: 'worker', // or 'contractor'
  name: 'Rohan Gaikwad',
  image: 'https://ibb.co/mrNmWdDv',
  rating: 4.9,
  completedJobs: 48,
  location: 'Pune,Maharashtra',
  experience: '5+ years',
  dailyRate: '9000',
  skills: ['Robotics','Plumbing', 'Pipe Fitting', 'Bathroom Installation'],
  languages: ['Hindi', 'Marathi', 'English'],
  verified: true,
  about: 'Btech Under Grad from Yashoda Technical campus , Experienced plumber specializing in residential and commercial plumbing services. Expert in modern fixtures and emergency repairs.',
};

export default function ProfileScreen() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: MOCK_USER.image }}
          style={styles.profileImage}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{MOCK_USER.name}</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFB800" fill="#FFB800" />
            <Text style={styles.rating}>{MOCK_USER.rating}</Text>
            <Text style={styles.jobCount}>({MOCK_USER.completedJobs} jobs)</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => router.push('/profile/edit')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {MOCK_USER.type === 'worker' && (
        <View style={styles.availabilitySection}>
          <Text style={styles.availabilityTitle}>Availability Status</Text>
          <View style={styles.availabilityToggle}>
            <Text style={styles.availabilityText}>
              {isAvailable ? 'Available for Work' : 'Not Available'}
            </Text>
            <Switch
              value={isAvailable}
              onValueChange={setIsAvailable}
              trackColor={{ false: '#E4E4E7', true: '#0066FF' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>
      )}

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <MapPin size={20} color="#71717A" />
          <Text style={styles.infoText}>{MOCK_USER.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <Briefcase size={20} color="#71717A" />
          <Text style={styles.infoText}>{MOCK_USER.experience}</Text>
        </View>
        <View style={styles.infoRow}>
          <IndianRupee size={20} color="#71717A" />
          <Text style={styles.infoText}>₹{MOCK_USER.dailyRate}/day</Text>
        </View>
        <View style={styles.infoRow}>
          <Languages size={20} color="#71717A" />
          <Text style={styles.infoText}>{MOCK_USER.languages.join(', ')}</Text>
        </View>
      </View>

      {MOCK_USER.verified && (
        <View style={styles.verifiedBadge}>
          <Shield size={20} color="#059669" />
          <Text style={styles.verifiedText}>Verified Profile</Text>
        </View>
      )}

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>{MOCK_USER.about}</Text>
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {MOCK_USER.skills.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/profile/reviews')}
        >
          <View style={styles.menuItemLeft}>
            <Star size={24} color="#18181B" />
            <Text style={styles.menuItemText}>Reviews & Ratings</Text>
          </View>
          <ChevronRight size={20} color="#71717A" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/profile/documents')}
        >
          <View style={styles.menuItemLeft}>
            <FileText size={24} color="#18181B" />
            <Text style={styles.menuItemText}>Documents & KYC</Text>
          </View>
          <ChevronRight size={20} color="#71717A" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/profile/payments')}
        >
          <View style={styles.menuItemLeft}>
            <Wallet size={24} color="#18181B" />
            <Text style={styles.menuItemText}>Payment Settings</Text>
          </View>
          <ChevronRight size={20} color="#71717A" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Settings size={24} color="#18181B" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
          <ChevronRight size={20} color="#71717A" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F5',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#18181B',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginLeft: 4,
  },
  jobCount: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
    marginLeft: 4,
  },
  editButton: {
    backgroundColor: '#F4F4F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#18181B',
  },
  availabilitySection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  availabilityTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginBottom: 12,
  },
  availabilityToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  availabilityText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#18181B',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#18181B',
    marginLeft: 12,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    padding: 12,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  verifiedText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#059669',
    marginLeft: 8,
  },
  aboutSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#18181B',
    marginBottom: 12,
  },
  aboutText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#52525B',
    lineHeight: 24,
  },
  skillsSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#F0F7FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#0066FF',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginLeft: 12,
  },
});