import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FileText, Download, FileIcon } from 'lucide-react-native';

interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
  size: string;
}

interface DocumentItemProps {
  document: Document;
  onPress?: () => void;
}

export default function DocumentItem({ document, onPress }: DocumentItemProps) {
  const getIconColor = () => {
    switch (document.type.toLowerCase()) {
      case 'pdf':
        return '#EF4444';
      case 'doc':
      case 'docx':
        return '#3B82F6';
      case 'xls':
      case 'xlsx':
        return '#10B981';
      default:
        return '#64748B';
    }
  };
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <View style={[
        styles.iconContainer,
        { backgroundColor: `${getIconColor()}20` }
      ]}>
        <FileIcon size={24} color={getIconColor()} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{document.title}</Text>
        <View style={styles.details}>
          <Text style={styles.type}>{document.type.toUpperCase()}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.date}>{document.date}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.size}>{document.size}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.downloadButton}>
        <Download size={18} color="#0F766E" />
      </TouchableOpacity>
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
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
    marginBottom: 4,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  dot: {
    fontSize: 12,
    color: '#94A3B8',
    marginHorizontal: 4,
  },
  date: {
    fontSize: 12,
    color: '#64748B',
  },
  size: {
    fontSize: 12,
    color: '#64748B',
  },
  downloadButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});