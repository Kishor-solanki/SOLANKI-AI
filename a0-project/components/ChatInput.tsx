import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ChatInputProps {
  message: string;
  setMessage: (text: string) => void;
  onSend: () => void;
}

export default function ChatInput({ message, setMessage, onSend }: ChatInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Ask about career advice..."
        placeholderTextColor="#666"
        multiline
      />
      <TouchableOpacity 
        style={styles.sendButton} 
        onPress={onSend}
        disabled={!message.trim()}
      >
        <Ionicons 
          name="send" 
          size={24} 
          color={message.trim() ? "#007AFF" : "#A0A0A0"} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    padding: 8,
  },
});