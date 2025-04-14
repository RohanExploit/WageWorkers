import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { IndianRupee, Wallet, Ban as Bank, CreditCard, QrCode, ChevronRight, Shield } from 'lucide-react-native';

export default function PaymentSettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <View style={styles.balanceAmount}>
          <IndianRupee size={24} color="#18181B" />
          <Text style={styles.balanceText}>12,450</Text>
        </View>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>Withdraw to Bank</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Methods</Text>
        
        <TouchableOpacity style={styles.paymentMethod}>
          <View style={styles.paymentMethodLeft}>
            <View style={styles.paymentMethodIcon}>
              <Bank size={24} color="#0066FF" />
            </View>
            <View>
              <Text style={styles.paymentMethodTitle}>Bank Account</Text>
              <Text style={styles.paymentMethodDetails}>HDFC Bank •••• 4589</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#71717A" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentMethod}>
          <View style={styles.paymentMethodLeft}>
            <View style={styles.paymentMethodIcon}>
              <QrCode size={24} color="#0066FF" />
            </View>
            <View>
              <Text style={styles.paymentMethodTitle}>UPI</Text>
              <Text style={styles.paymentMethodDetails}>rajesh@upi</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#71717A" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addPaymentMethod}>
          <Text style={styles.addPaymentMethodText}>+ Add Payment Method</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        
        <View style={styles.transaction}>
          <View style={styles.transactionLeft}>
            <View style={[styles.transactionIcon, styles.receivedIcon]}>
              <Wallet size={20} color="#059669" />
            </View>
            <View>
              <Text style={styles.transactionTitle}>Payment Received</Text>
              <Text style={styles.transactionDetails}>From: Amit Construction</Text>
            </View>
          </View>
          <View>
            <Text style={styles.transactionAmount}>+ ₹2,400</Text>
            <Text style={styles.transactionDate}>Today, 2:30 PM</Text>
          </View>
        </View>

        

        <View style={styles.transaction}>
          <View style={styles.transactionLeft}>
            <View style={[styles.transactionIcon, styles.withdrawnIcon]}>
              <Bank size={20} color="#DC2626" />
            </View>
            <View>
              <Text style={styles.transactionTitle}>Withdrawn to Bank</Text>
              <Text style={styles.transactionDetails}>HDFC Bank •••• 4589</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.transactionAmount, styles.withdrawnAmount]}>- ₹5,000</Text>
            <Text style={styles.transactionDate}>Yesterday</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Shield size={20} color="#0066FF" />
        <Text style={styles.infoText}>
          Your payment information is encrypted and secure. We use industry-standard security measures to protect your data.
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
  balanceCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#71717A',
    marginBottom: 8,
  },
  balanceAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 32,
    color: '#18181B',
    marginLeft: 4,
  },
  withdrawButton: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  withdrawButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#18181B',
    marginBottom: 16,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F5',
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F0F7FF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentMethodTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginBottom: 4,
  },
  paymentMethodDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  addPaymentMethod: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  addPaymentMethodText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#0066FF',
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F5',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  receivedIcon: {
    backgroundColor: '#ECFDF5',
  },
  withdrawnIcon: {
    backgroundColor: '#FEF2F2',
  },
  transactionTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#18181B',
    marginBottom: 4,
  },
  transactionDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#71717A',
  },
  transactionAmount: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#059669',
    textAlign: 'right',
    marginBottom: 4,
  },
  withdrawnAmount: {
    color: '#DC2626',
  },
  transactionDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#71717A',
    textAlign: 'right',
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