import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ChartBar as BarChart2, ArrowUpRight, TrendingUp, TrendingDown, DollarSign } from 'lucide-react-native';
import Header from '@/components/Header';
import Card from '@/components/Card';
import { formatCurrency } from '@/utils/format';
import { fetchDashboardData } from '@/services/api';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
    pendingPayments: 0,
    recentTransactions: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error('Erro ao carregar dados do painel:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0F766E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Painel Financeiro" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo Atual</Text>
          <Text style={styles.balanceAmount}>{formatCurrency(dashboardData.balance)}</Text>
          <View style={styles.balanceTrend}>
            <TrendingUp size={16} color="#10B981" />
            <Text style={styles.balanceTrendText}>+2,4% em relação ao mês anterior</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <DollarSign size={20} color="#FFFFFF" />
            </View>
            <Text style={styles.statLabel}>Receitas</Text>
            <Text style={styles.statValue}>{formatCurrency(dashboardData.income)}</Text>
          </Card>
          
          <Card style={styles.statCard}>
            <View style={[styles.statIconContainer, styles.expenseIcon]}>
              <TrendingDown size={20} color="#FFFFFF" />
            </View>
            <Text style={styles.statLabel}>Despesas</Text>
            <Text style={styles.statValue}>{formatCurrency(dashboardData.expenses)}</Text>
          </Card>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Visão Geral Financeira</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Ver Tudo</Text>
            <ArrowUpRight size={16} color="#0F766E" />
          </TouchableOpacity>
        </View>

        <View style={styles.chartCard}>
          <BarChart2 size={24} color="#0F766E" />
          <Text style={styles.chartTitle}>Despesas Mensais</Text>
          <Text style={styles.chartDescription}>
            Suas despesas diminuíram 12% em comparação ao mês anterior.
          </Text>

          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>Visualização do Gráfico</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Insights Financeiros</Text>
        </View>

        <Card style={styles.insightCard}>
          <Text style={styles.insightTitle}>Recomendação da IA</Text>
          <Text style={styles.insightText}>
            Com base nos padrões atuais de gastos, considere alocar mais 5% ao fundo de reserva de manutenção para se preparar para despesas sazonais futuras.
          </Text>
        </Card>

        <Card style={styles.insightCard}>
          <Text style={styles.insightTitle}>Alerta de Orçamento</Text>
          <Text style={styles.insightText}>
            As despesas com utilidades estão 8% acima do orçamento. Revise o uso recente de água e eletricidade para possíveis problemas.
          </Text>
        </Card>

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginTop: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  balanceTrend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceTrendText: {
    fontSize: 12,
    color: '#10B981',
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statCard: {
    width: '48%',
    padding: 16,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  expenseIcon: {
    backgroundColor: '#EF4444',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
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
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#0F766E',
    marginRight: 4,
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginTop: 12,
    marginBottom: 8,
  },
  chartDescription: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  insightCard: {
    marginBottom: 16,
    padding: 16,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
  },
  insightText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  footer: {
    height: 40,
  },
});