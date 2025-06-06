import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { ChevronRight, Lock, Bell, FileText, HelpCircle, LogOut, User } from 'lucide-react-native';
import Header from '@/components/Header';
import Card from '@/components/Card';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  
  return (
    <View style={styles.container}>
      <Header title="Settings" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitials}>JD</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileRole}>Administrator</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Account</Text>
        </View>
        
        <Card style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#E0F2F1' }]}>
                <User size={18} color="#0F766E" />
              </View>
              <Text style={styles.settingsItemText}>Personal Information</Text>
            </View>
            <ChevronRight size={18} color="#64748B" />
          </TouchableOpacity>
          
          <View style={styles.settingsDivider} />
          
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#FEF3C7' }]}>
                <Lock size={18} color="#D97706" />
              </View>
              <Text style={styles.settingsItemText}>Security</Text>
            </View>
            <ChevronRight size={18} color="#64748B" />
          </TouchableOpacity>
        </Card>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Preferences</Text>
        </View>
        
        <Card style={styles.settingsCard}>
          <View style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#E0F2F1' }]}>
                <Bell size={18} color="#0F766E" />
              </View>
              <Text style={styles.settingsItemText}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#E2E8F0', true: '#0F766E' }}
              thumbColor="#FFFFFF"
            />
          </View>
          
          <View style={styles.settingsDivider} />
          
          <View style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#EDE9FE' }]}>
                <Lock size={18} color="#7C3AED" />
              </View>
              <Text style={styles.settingsItemText}>Biometric Authentication</Text>
            </View>
            <Switch
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
              trackColor={{ false: '#E2E8F0', true: '#0F766E' }}
              thumbColor="#FFFFFF"
            />
          </View>
          
          <View style={styles.settingsDivider} />
          
          <View style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#F1F5F9' }]}>
                <FileText size={18} color="#334155" />
              </View>
              <Text style={styles.settingsItemText}>Dark Mode</Text>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#E2E8F0', true: '#0F766E' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </Card>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Support</Text>
        </View>
        
        <Card style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#E0F2F1' }]}>
                <HelpCircle size={18} color="#0F766E" />
              </View>
              <Text style={styles.settingsItemText}>Help & Support</Text>
            </View>
            <ChevronRight size={18} color="#64748B" />
          </TouchableOpacity>
          
          <View style={styles.settingsDivider} />
          
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <View style={[styles.settingsIcon, { backgroundColor: '#FEE2E2' }]}>
                <LogOut size={18} color="#EF4444" />
              </View>
              <Text style={[styles.settingsItemText, { color: '#EF4444' }]}>Logout</Text>
            </View>
          </TouchableOpacity>
        </Card>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
        
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 14,
    color: '#64748B',
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
  },
  editButtonText: {
    fontSize: 14,
    color: '#0F172A',
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  settingsCard: {
    padding: 0,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingsItemText: {
    fontSize: 16,
    color: '#0F172A',
  },
  settingsDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 16,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 24,
  },
  footer: {
    height: 40,
  },
});