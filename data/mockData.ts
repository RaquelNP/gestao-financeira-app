export const mockTransactions = [
  {
    id: '1',
    type: 'renda',
    title: 'Pagamento do Mês',
    amount: 1250.00,
    date: 'Hoje',
    category: 'Taxas'
  },
  {
    id: '2',
    type: 'gastos',
    title: 'Reparos de Encanamento',
    amount: 450.00,
    date: 'Ontem',
    category: 'Manutenção'
  },
  {
    id: '3',
    type: 'expense',
    title: 'Conta de Eletricidade',
    amount: 320.75,
    date: '15 de Agosto de 2023',
    category: 'Utilidades'
  },
  {
    id: '4',
    type: 'income',
    title: 'Taxa Extraordinária',
    amount: 800.00,
    date: '10 de Agosto de 2023',
    category: 'Taxa Especial'
  },
  {
    id: '5',
    type: 'expense',
    title: 'Serviços de Jardinagem',
    amount: 275.00,
    date: '05 de Agosto de 2023',
    category: 'Áreas Verdes'
  },
  {
    id: '6',
    type: 'expense',
    title: 'Atualização do Sistema de Segurança',
    amount: 1200.00,
    date: '28 de Julho de 2023',
    category: 'Segurança'
  },
  {
    id: '7',
    type: 'income',
    title: 'Pagamento de Multa por Atraso',
    amount: 50.00,
    date: '25 de Julho de 2023',
    category: 'Multas'
  }
];

export const mockNotifications = [
  {
    id: '1',
    type: 'payment',
    title: 'Pagamento Recebido',
    message: 'Pagamento da taxa de manutenção mensal de R$ 1.250,00 recebido da Unidade 304.',
    time: 'Há 2 horas',
    isRead: false
  },
  {
    id: '2',
    type: 'alert',
    title: 'Alerta de Orçamento',
    message: 'As despesas de manutenção estão se aproximando do limite orçamentário mensal. Considere revisar os gastos.',
    time: 'Ontem',
    isRead: false,
    actions: true
  },
  {
    id: '3',
    type: 'warning',
    title: 'Pagamento em Atraso',
    message: 'A Unidade 201 está com um pagamento de manutenção em atraso de R$ 1.250,00 há 15 dias.',
    time: 'Há 3 dias',
    isRead: true
  },
  {
    id: '4',
    type: 'alert',
    title: 'Despesa Futura',
    message: 'A manutenção programada do sistema de ar-condicionado está prevista para a próxima semana, com custo estimado de R$ 750,00.',
    time: 'Há 1 semana',
    isRead: true
  },
  {
    id: '5',
    type: 'payment',
    title: 'Nova Fatura',
    message: 'Nova fatura trimestral de água recebida no valor de R$ 2.450,00 com vencimento em 15 de setembro.',
    time: 'Há 1 semana',
    isRead: true
  }
];

export const mockDocuments = [
  {
    id: '1',
    title: 'Relatório Financeiro Anual 2023',
    type: 'pdf',
    date: '15 de Agosto de 2023',
    size: '4,2 MB'
  },
  {
    id: '2',
    title: 'Contrato de Manutenção - Elite Encanamento',
    type: 'doc',
    date: '28 de Julho de 2023',
    size: '1,8 MB'
  },
  {
    id: '3',
    title: 'Análise Orçamentária do 2º Trimestre',
    type: 'xlsx',
    date: '10 de Julho de 2023',
    size: '3,5 MB'
  },
  {
    id: '4',
    title: 'Ata da Reunião do Conselho - Julho 2023',
    type: 'pdf',
    date: '05 de Julho de 2023',
    size: '2,1 MB'
  },
  {
    id: '5',
    title: 'Renovação da Apólice de Seguro 2023-2024',
    type: 'pdf',
    date: '22 de Junho de 2023',
    size: '5,7 MB'
  },
  {
    id: '6',
    title: 'Notificação de Taxa Extraordinária',
    type: 'doc',
    date: '15 de Junho de 2023',
    size: '1,2 MB'
  },
  {
    id: '7',
    title: 'Estudo do Fundo de Reserva',
    type: 'pdf',
    date: '30 de Maio de 2023',
    size: '8,4 MB'
  }
];

export const fetchDashboardData = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: 125750.42,
        income: 15250.00,
        expenses: 8790.00,
        pendingPayments: 3500.00,
        recentTransactions: mockTransactions.slice(0, 3)
      });
    }, 1000);
  });
};
