import { mockTransactions } from '@/data/mockData';

// This is a mock API service that would be replaced with real API calls
// in a production application

export const fetchDashboardData = async () => {
  // Simulate API call delay
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

export const fetchTransactions = async (period = 'month') => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 800);
  });
};

export const login = async (email: string, password: string) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'demo@example.com' && password === 'password') {
        resolve({
          user: {
            id: '1',
            name: 'João',
            email: 'exemplo@examplo.com',
            role: 'admin'
          },
          token: 'mock-jwt-token'
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const register = async (name: string, email: string, password: string) => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '2',
          name,
          email,
          role: 'user'
        },
        token: 'mock-jwt-token'
      });
    }, 1000);
  });
};

export const resetPassword = async (email: string) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};
