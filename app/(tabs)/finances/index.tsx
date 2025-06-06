import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronDown, Filter } from 'lucide-react-native';
import Header from '@/components/Header';
import Card from '@/components/Card';
import TransactionItem from '@/components/TransactionItem';
import { mockTransactions } from '@/data/mockData';

export default function FinancesScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('Esse mês');
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

  const periods = ['Hoje', 'Essa semana', 'Esse mês', 'Último três meses', 'Esse ano'];

  return (
    <View style={styles.container}>
      <Header title="Gestão financeira" />

      <View style={styles.filterContainer}>
        <View style={styles.periodContainer}>
          <TouchableOpacity
            style={styles.periodSelector}
            onPress={() => setShowPeriodDropdown(!showPeriodDropdown)}
          >
            <Text style={styles.periodText}>{selectedPeriod}</Text>
            <ChevronDown size={18} color="#0F172A" />
          </TouchableOpacity>

          {showPeriodDropdown && (
            <View style={styles.periodDropdown}>
              {periods.map((period) => (
                <TouchableOpacity
                  key={period}
                  style={styles.periodOption}
                  onPress={() => {
                    setSelectedPeriod(period);
                    setShowPeriodDropdown(false);
                  }}
                >
                  <Text style={[
                    styles.periodOptionText,
                    selectedPeriod === period && styles.periodOptionSelected
                  ]}>
                    {period}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Filter size={18} color="#0F172A" />
          <Text style={styles.filterText}>Filtro</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Card style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Pedido total</Text>
              <Text style={styles.summaryValue}>R$12,540.00</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total de gastos</Text>
              <Text style={[styles.summaryValue, styles.expenseText]}>R$8,790.00</Text>
            </View>
          </View>
          <View style={styles.horizontalDivider} />
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Balanço</Text>
            <Text style={styles.balanceValue}>R$3,750.00</Text>
          </View>
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Transacoes Recentes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        {mockTransactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}

        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  periodContainer: {
    position: 'relative',
    zIndex: 1,
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  periodText: {
    fontSize: 14,
    color: '#0F172A',
    marginRight: 8,
  },
  periodDropdown: {
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 160,
    paddingVertical: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 2,
  },
  periodOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  periodOptionText: {
    fontSize: 14,
    color: '#0F172A',
  },
  periodOptionSelected: {
    color: '#0F766E',
    fontWeight: '600',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filterText: {
    fontSize: 14,
    color: '#0F172A',
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  summaryCard: {
    marginTop: 16,
    padding: 0,
    overflow: 'hidden',
  },
  summaryRow: {
    flexDirection: 'row',
    padding: 16,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryDivider: {
    width: 1,
    backgroundColor: '#E2E8F0',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#10B981',
  },
  expenseText: {
    color: '#EF4444',
  },
  horizontalDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  balanceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0F172A',
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  seeAllText: {
    fontSize: 14,
    color: '#0F766E',
  },
  footer: {
    height: 40,
  },
});
