import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Sample flashcards data
const flashcards = [
  { question: "What is React Native?", answer: "A framework for building native apps using React" },
  { question: "What is Expo?", answer: "A framework and platform for universal React applications" },
  { question: "What is a component?", answer: "A reusable piece of UI that can contain its own logic and state" },
];

const FlashcardItem = ({ item, colors }: { item: { question: string; answer: string }, colors: any }) => (
  <View style={[styles.card, { backgroundColor: colors.card }]}>
    <Text style={[styles.question, { color: colors.text }]}>{item.question}</Text>
    <Text style={[styles.answer, { color: colors.text }]}>{item.answer}</Text>
  </View>
);

export default function StorageScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>My Flashcards</Text>
        <FlatList
          data={flashcards}
          renderItem={({ item }) => <FlashcardItem item={item} colors={colors} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    opacity: 0.8,
  },
}); 