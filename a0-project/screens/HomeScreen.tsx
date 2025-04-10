import { useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import Header from '../components/Header';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

export default function HomeScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Career Assistant. I can help you with career advice, resume tips, interview preparation, and more. What would you like to know?",
      isUser: false
    }
  ]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: message.trim(),
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: 'You are a helpful career advisor. Provide concise, practical advice about careers, job searching, resume writing, and interview preparation. Be encouraging and professional.'
            },
            {
              role: 'user',
              content: message.trim()
            }
          ]
        })
      });

      const data = await response.json();
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: data.completion,
        isUser: false
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I had trouble processing your request. Please try again.',
        isUser: false
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      <FlatList
        style={styles.messageList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatMessage text={item.text} isUser={item.isUser} />
        )}
        contentContainerStyle={styles.messageListContent}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#007AFF" />
        </View>
      )}
      <ChatInput
        message={message}
        setMessage={setMessage}
        onSend={sendMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messageList: {
    flex: 1,
  },
  messageListContent: {
    padding: 16,
  },
  loadingContainer: {
    padding: 8,
    alignItems: 'center',
  },
});