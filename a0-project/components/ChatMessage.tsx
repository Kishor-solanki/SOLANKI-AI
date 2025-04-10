import { View, Text, StyleSheet } from 'react-native';

interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

export default function ChatMessage({ text, isUser }: ChatMessageProps) {
  return (
    <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.botMessage]}>
      <Text style={[styles.messageText, isUser ? styles.userText : styles.botText]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F0F0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#FFFFFF',
  },
  botText: {
    color: '#000000',
  },
});