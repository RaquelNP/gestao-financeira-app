import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, Check, Circle as XCircle } from 'lucide-react-native';
import Header from '@/components/Header';
import { mockNotifications } from '@/data/mockData';

const NotificationItem = ({ notification }) => {
  const [isRead, setIsRead] = useState(notification.isRead);

  const getIconColor = () => {
    switch (notification.type) {
      case 'payment':
        return '#10B981';
      case 'alert':
        return '#F59E0B';
      case 'warning':
        return '#EF4444';
      default:
        return '#0F766E';
    }
  };

  return (
    <TouchableOpacity
      style={[styles.notificationItem, isRead && styles.notificationRead]}
      onPress={() => setIsRead(true)}
    >
      <View style={[styles.notificationIcon, { backgroundColor: getIconColor() }]}>
        <Bell size={18} color="#FFFFFF" />
      </View>

      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>

        <Text style={styles.notificationMessage}>{notification.message}</Text>

        {notification.actions && (
          <View style={styles.notificationActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Check size={16} color="#10B981" />
              <Text style={[styles.actionText, { color: '#10B981' }]}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <XCircle size={16} color="#EF4444" />
              <Text style={[styles.actionText, { color: '#EF4444' }]}>Decline</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // In a real app, fetch notifications from an API
    setNotifications(mockNotifications);
  }, []);

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    return notification.type === filter;
  });

  const filters = [
    { id: 'all', label: 'Tudo' },
    { id: 'payment', label: 'Pagamentos' },
    { id: 'alert', label: 'Alertas' },
    { id: 'warning', label: 'Pendente' }
  ];

  return (
    <View style={styles.container}>
      <Header title="Notificações" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.filterChip,
              filter === item.id && styles.filterChipSelected
            ]}
            onPress={() => setFilter(item.id)}
          >
            <Text
              style={[
                styles.filterText,
                filter === item.id && styles.filterTextSelected
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {filteredNotifications.length > 0 ? (
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {filteredNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
          <View style={styles.footer} />
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Bell size={48} color="#94A3B8" />
          <Text style={styles.emptyTitle}>No notifications</Text>
          <Text style={styles.emptyText}>
            You don't have any notifications in this category.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  filtersContainer: {
    maxHeight: 60,
    paddingLeft: 16,
  },
  filtersContent: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#F1F5F9',
  },
  filterChipSelected: {
    backgroundColor: '#0F766E',
  },
  filterText: {
    fontSize: 14,
    color: '#334155',
  },
  filterTextSelected: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#0F766E',
  },
  notificationRead: {
    borderLeftWidth: 0,
    opacity: 0.7,
  },
  notificationIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  notificationTime: {
    fontSize: 12,
    color: '#64748B',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  notificationActions: {
    flexDirection: 'row',
    marginTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    height: 40,
  },
});
