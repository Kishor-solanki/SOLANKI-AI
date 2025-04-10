import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Text style={styles.logoText}>CB</Text>
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.title}>SOLANKI AI</Text>
          <Text style={styles.subtitle}>dev.a0.apps.solankiai</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>Online</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBackground: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#2ECC71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  titleSection: {
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2ECC71',
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: '#2ECC71',
    fontWeight: '500',
  },
});