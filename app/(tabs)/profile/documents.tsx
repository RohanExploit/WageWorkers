import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FileText, Upload, Check, CircleAlert as AlertCircle } from 'lucide-react-native';

const DOCUMENTS = [
  {
    id: 'aadhar',
    title: 'Aadhaar Card',
    description: 'Government issued ID with 12-digit number',
    status: 'verified',
    lastUpdated: '15 Jan 2024',
  },
  {
    id: 'pan',
    title: 'PAN Card',
    description: 'Permanent Account Number for tax purposes',
    status: 'pending',
    lastUpdated: '20 Jan 2024',
  },
  {
    id: 'bank',
    title: 'Bank Account Details',
    description: 'For receiving payments securely',
    status: 'required',
    lastUpdated: null,
  },
];

export default function DocumentsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Document Verification</Text>
        <Text style={styles.headerDescription}>
          Upload your documents for identity verification and secure payments
        </Text>
      </View>

      {DOCUMENTS.map((doc) => (
        <View key={doc.id} style={styles.documentCard}>
          <View style={styles.documentHeader}>
            <FileText size={24} color="#18181B" />
            <View style={styles.documentInfo}>
              <Text style={styles.documentTitle}>{doc.title}</Text>
              <Text style={styles.documentDescription}>{doc.description}</Text>
            </View>
          </View>

          <View style={styles.documentStatus}>
            {doc.status === 'verified' && (
              <View style={[styles.statusBadge, styles.verifiedBadge]}>
                <Check size={16} color="#059669" />
                <Text style={[styles.statusText, styles.verifiedText]}>Verified</Text>
              </View>
            )}
            {doc.status === 'pending' && (
              <View style={[styles.statusBadge, styles.pendingBadge]}>
                <AlertCircle size={16} color="#D97706" />
                <Text style={[styles.statusText, styles.pendingText]}>Under Review</Text>
              </View>
            )}
          </View>

          {doc.lastUpdated && (
            <Text style={styles.lastUpdated}>Last updated: {doc.lastUpdated}</Text>
          )}

          <TouchableOpacity 
            style={[
              styles.uploadButton,
              doc.status === 'verified' && styles.uploadButtonDisabled
            ]}
            disabled={doc.status === 'verified'}
          >
            <Upload size={20} color={doc.status === 'verified' ? '#A1A1AA' : '#0066FF'} />
            <Text 
              style={[
                styles.uploadButtonText,
                doc.status === 'verified' && styles.uploadButtonTextDisabled
              ]}
            >
              {doc.status === 'verified' ? 'Uploaded' : 'Upload Document'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.infoBox}>
        <AlertCircle size={20} color="#0066FF" />
        <Text style={styles.infoText}>
          Your documents are encrypted and securely stored. They will only be used for verification purposes.
        </Text>
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
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#18181B',
    marginBottom: 8,
  },
  headerDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
    lineHeight: 20,
  },
  documentCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    padding: 16,
  },
  documentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  documentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  documentTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginBottom: 4,
  },
  documentDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  documentStatus: {
    marginBottom: 12,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 4,
  },
  verifiedBadge: {
    backgroundColor: '#ECFDF5',
  },
  pendingBadge: {
    backgroundColor: '#FEF3C7',
  },
  statusText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
  },
  verifiedText: {
    color: '#059669',
  },
  pendingText: {
    color: '#D97706',
  },
  lastUpdated: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#71717A',
    marginBottom: 16,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F7FF',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  uploadButtonDisabled: {
    backgroundColor: '#F4F4F5',
  },
  uploadButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#0066FF',
  },
  uploadButtonTextDisabled: {
    color: '#A1A1AA',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F0F7FF',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#18181B',
    lineHeight: 20,
  },
});