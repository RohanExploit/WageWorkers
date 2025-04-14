import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MapPin, Star, Clock } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.nameText}>Rahul</Text>
      </View>

      <View style={styles.searchBar}>
        <MapPin size={20} color="#71717A" />
        <Text style={styles.locationText}>Mumbai, Maharashtra</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Workers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.workersList}>
          {[1, 2, 3].map((worker) => (
            <TouchableOpacity key={worker} style={styles.workerCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' }}
                style={styles.workerImage}
              />
              <Text style={styles.workerName}>Amit Kumar</Text>
              <Text style={styles.workerRole}>Electrician</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#FFB800" fill="#FFB800" />
                <Text style={styles.ratingText}>4.8</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Jobs</Text>
        {[1, 2, 3].map((job) => (
          <TouchableOpacity key={job} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Plumbing Work Required</Text>
              <Text style={styles.jobPrice}>₹800/day</Text>
            </View>
            <Text style={styles.jobLocation}>
              <MapPin size={16} color="#71717A" /> Andheri West, Mumbai
            </Text>
            <Text style={styles.jobTiming}>
              <Clock size={16} color="#71717A" /> Posted 2 hours ago
            </Text>
          </TouchableOpacity>
        ))}
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
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#71717A',
  },
  nameText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#18181B',
    marginTop: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4E4E7',
  },
  locationText: {
    marginLeft: 8,
    fontFamily: 'Inter_400Regular',
    color: '#71717A',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#18181B',
    marginBottom: 16,
  },
  workersList: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  workerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
    width: 160,
  },
  workerImage: {
    width: 136,
    height: 136,
    borderRadius: 8,
    marginBottom: 12,
  },
  workerName: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
  },
  workerRole: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#18181B',
    marginLeft: 4,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  jobTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
  },
  jobPrice: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#0066FF',
  },
  jobLocation: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
    marginBottom: 8,
  },
  jobTiming: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
});