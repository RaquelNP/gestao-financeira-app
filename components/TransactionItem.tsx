import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ArrowDownLeft, ArrowUpRight, ChevronRight } from 'lucide-react-native';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  title: string;
  amount: number;
  date: string;
  category: string;
}

interface TransactionItemProps {
  transaction: Transaction;
  onPress?: () => void;
}

export default function TransactionItem({ transaction, onPress }: TransactionItemProps) {
  const isIncome = transaction.type === 'income';

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={[
        styles.iconContainer,
        isIncome ? styles.incomeIcon : styles.expenseIcon
      ]}>
        {isIncome ? (
          <ArrowDownLeft size={20} color="#FFFFFF" />
        ) : (
          <ArrowUpRight size={20} color="#FFFFFF" />
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>{transaction.title}</Text>
          <Text style={[
            styles.amount,
            isIncome ? styles.incomeText : styles.expenseText
          ]}>
            {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.category}>{transaction.category}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
        </View>
      </View>

      <ChevronRight size={16} color="#94A3B8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  incomeIcon: {
    backgroundColor: '#10B981',
  },
  expenseIcon: {
    backgroundColor: '#EF4444',
  },
  content: {
    flex: 1,
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  incomeText: {
    color: '#10B981',
  },
  expenseText: {
    color: '#EF4444',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 14,
    color: '#64748B',
  },
  date: {
    fontSize: 14,
    color: '#94A3B8',
  },
});
