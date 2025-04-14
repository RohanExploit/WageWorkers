import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { router } from 'expo-router';
import { MapPin, Search, Filter, IndianRupee, Clock, Briefcase } from 'lucide-react-native';

const CATEGORIES = ['All Jobs', 'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Mason', 'Helper'];

const JOBS = [
  {
    id: '1',
    title: 'Experienced Plumber Needed',
    location: 'Powai, Mumbai',
    type: 'Plumbing',
    budget: '1200',
    duration: '2 days',
    postedAgo: '3 hours ago',
    urgent: true,
  },
  {
    id: '2',
    title: 'Electrical Wiring Expert',
    location: 'Andheri East, Mumbai',
    type: 'Electrical',
    budget: '1500',
    duration: '1 day',
    postedAgo: '5 hours ago',
    urgent: false,
  },
  {
    id: '3',
    title: 'Construction Site Workers',
    location: 'Thane West, Mumbai',
    type: 'Mason',
    budget: '800',
    duration: '15 days',
    postedAgo: '1 day ago',
    urgent: true,
  },
];

export default function JobsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All Jobs');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#71717A" />
          <TextInput 
            placeholder="Search jobs..."
            style={styles.searchInput}
            placeholderTextColor="#71717A"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#18181B" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipSelected,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextSelected,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.jobsList}>
        {JOBS.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.jobCard}
            onPress={() => router.push(`/jobs/${job.id}`)}
          >
            <View style={styles.jobHeader}>
              <View style={styles.jobTitleContainer}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                {job.urgent && <View style={styles.urgentBadge}><Text style={styles.urgentText}>Urgent</Text></View>}
              </View>
              <View style={styles.jobType}>
                <Briefcase size={14} color="#0066FF" />
                <Text style={styles.jobTypeText}>{job.type}</Text>
              </View>
            </View>

            <View style={styles.jobDetails}>
              <View style={styles.detailItem}>
                <MapPin size={16} color="#71717A" />
                <Text style={styles.detailText}>{job.location}</Text>
              </View>
              <View style={styles.detailItem}>
                <IndianRupee size={16} color="#71717A" />
                <Text style={styles.detailText}>₹{job.budget}/day</Text>
              </View>
              <View style={styles.detailItem}>
                <Clock size={16} color="#71717A" />
                <Text style={styles.detailText}>{job.duration}</Text>
              </View>
            </View>

            <View style={styles.jobFooter}>
              <Text style={styles.postedTime}>{job.postedAgo}</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Quick Apply</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.postJobButton}
        onPress={() => router.push('/jobs/post')}
      >
        <Text style={styles.postJobButtonText}>Post a Job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F5',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F5',
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#18181B',
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#F4F4F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F4F4F5',
    marginRight: 8,
  },
  categoryChipSelected: {
    backgroundColor: '#0066FF',
  },
  categoryText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#71717A',
  },
  categoryTextSelected: {
    color: '#FFFFFF',
  },
  jobsList: {
    padding: 16,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  jobHeader: {
    marginBottom: 12,
  },
  jobTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  jobTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#18181B',
    flex: 1,
  },
  urgentBadge: {
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  urgentText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#DC2626',
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
  jobDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F4F4F5',
  },
  postedTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  applyButton: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  applyButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  postJobButton: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: '#0066FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  postJobButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});