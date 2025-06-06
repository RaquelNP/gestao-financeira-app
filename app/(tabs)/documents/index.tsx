import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Search, Plus, Filter, FolderOpen } from 'lucide-react-native';
import Header from '@/components/Header';
import Card from '@/components/Card';
import DocumentItem from '@/components/DocumentItem';
import { mockDocuments } from '@/data/mockData';

export default function DocumentsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tudo');

  const categories = ['Tudo', 'Financeiro', 'Contratos', 'Relatorios', 'Pedidos'];

  return (
    <View style={styles.container}>
      <Header title="Documents" rightComponent={
        <TouchableOpacity style={styles.addButton}>
          <Plus size={22} color="#FFFFFF" />
        </TouchableOpacity>
      } />

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#64748B" />
          <Text style={styles.searchText}>Search documents...</Text>
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Filter size={18} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipSelected
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextSelected
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Documents</Text>
        </View>

        {mockDocuments.slice(0, 3).map((document) => (
          <DocumentItem
            key={document.id}
            document={document}
          />
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Document Folders</Text>
        </View>

        <View style={styles.foldersGrid}>
          {['Relatórios Financeiros', 'Contratos', 'Pedidos', 'Meeting Minutes'].map((folder) => (
            <TouchableOpacity key={folder} style={styles.folderItem}>
              <View style={styles.folderIconContainer}>
                <FolderOpen size={24} color="#0F766E" />
              </View>
              <Text style={styles.folderName}>{folder}</Text>
              <Text style={styles.folderCount}>
                {folder === 'Relatórios Financeiros' ? '12 files' :
                  folder === 'Contratos' ? '8 files' :
                    folder === 'Pedidos' ? '23 files' : '5 files'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Todos doscumentos</Text>
        </View>

        {mockDocuments.map((document) => (
          <DocumentItem
            key={document.id}
            document={document}
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
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchText: {
    fontSize: 14,
    color: '#94A3B8',
    marginLeft: 8,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categoriesContainer: {
    maxHeight: 50,
    paddingLeft: 16,
  },
  categoriesContent: {
    paddingRight: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#F1F5F9',
  },
  categoryChipSelected: {
    backgroundColor: '#0F766E',
  },
  categoryText: {
    fontSize: 14,
    color: '#334155',
  },
  categoryTextSelected: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  foldersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  folderItem: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  folderIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  folderName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  folderCount: {
    fontSize: 12,
    color: '#64748B',
  },
  footer: {
    height: 40,
  },
});
