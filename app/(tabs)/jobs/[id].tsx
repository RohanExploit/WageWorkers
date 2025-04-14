import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { MapPin, IndianRupee, Clock, Calendar, Briefcase, Star, Phone, MessageSquare } from 'lucide-react-native';

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();

  // This would normally come from your API
  const job = {
    id: '1',
    title: 'Experienced Plumber Needed',
    location: 'Powai, Mumbai',
    type: 'Plumbing',
    budget: '1200',
    duration: '2 days',
    startDate: 'Immediate',
    postedAgo: '3 hours ago',
    description: 'We are looking for an experienced plumber to fix multiple bathroom fixtures and install new pipelines. The work involves both repair and new installation. Must have experience with modern fixtures and tools.',
    requirements: [
      '5+ years of experience',
      'Own basic tools',
      'Knowledge of modern fixtures',
      'Available for 2 full days',
    ],
    contractor: {
      name: 'Rajesh Constructions',
      rating: 4.8,
      jobs: 52,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{job.title}</Text>
          <View style={styles.jobType}>
            <Briefcase size={16} color="#0066FF" />
            <Text style={styles.jobTypeText}>{job.type}</Text>
          </View>
        </View>

        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <MapPin size={20} color="#71717A" />
            <Text style={styles.detailText}>{job.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <IndianRupee size={20} color="#71717A" />
            <Text style={styles.detailText}>₹{job.budget}/day</Text>
          </View>
          <View style={styles.detailItem}>
            <Clock size={20} color="#71717A" />
            <Text style={styles.detailText}>{job.duration}</Text>
          </View>
          <View style={styles.detailItem}>
            <Calendar size={20} color="#71717A" />
            <Text style={styles.detailText}>{job.startDate}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Job Description</Text>
        <Text style={styles.description}>{job.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requirements</Text>
        {job.requirements.map((req, index) => (
          <View key={index} style={styles.requirementItem}>
            <View style={styles.bullet} />
            <Text style={styles.requirementText}>{req}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Posted By</Text>
        <View style={styles.contractorCard}>
          <Image
            source={{ uri: job.contractor.image }}
            style={styles.contractorImage}
          />
          <View style={styles.contractorInfo}>
            <Text style={styles.contractorName}>{job.contractor.name}</Text>
            <View style={styles.ratingContainer}>
              <Star size={16} color="#FFB800" fill="#FFB800" />
              <Text style={styles.ratingText}>{job.contractor.rating}</Text>
              <Text style={styles.jobsPosted}>{job.contractor.jobs} jobs posted</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Phone size={24} color="#0066FF" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/messages')}
          >
            <MessageSquare size={24} color="#0066FF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
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
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#18181B',
    marginBottom: 8,
  },
  jobType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  jobTypeText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#0066FF',
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minWidth: '45%',
  },
  detailText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  section: {
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
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#52525B',
    lineHeight: 24,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0066FF',
    marginRight: 12,
  },
  requirementText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#52525B',
  },
  contractorCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contractorImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  contractorInfo: {
    flex: 1,
  },
  contractorName: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#18181B',
    marginLeft: 4,
    marginRight: 8,
  },
  jobsPosted: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#0066FF',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});