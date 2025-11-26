import { View, Text, ScrollView } from "react-native";
import { Stack, useLocalSearchParams, router } from "expo-router";
import { books } from "../data/data";
import { Ionicons } from "@expo/vector-icons";

export default function Information() {
  const { index, title } = useLocalSearchParams();
  const bookIndex = parseInt(index as string);
  const book = books[bookIndex];

  return (
    <>
      <Stack.Screen
        options={{
          title: title as string,
          presentation: "modal",
          headerLeft: () => (
            <Ionicons
              name="close"
              size={28}
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            />
          )
        }}
      />

      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16, fontFamily: "StackSansText-ExtraLight" }}>
          {book.title}
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8, fontFamily: "StackSansText-ExtraLight" }}>
          <Text style={{ fontWeight: "bold", fontFamily: "StackSansText-ExtraLight" }}>Writer:</Text> {book.writer}
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8, fontFamily: "StackSansText-ExtraLight" }}>
          <Text style={{ fontWeight: "bold", fontFamily: "StackSansText-ExtraLight" }}>Release Date:</Text> {book.release_date}
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8, fontFamily: "StackSansText-ExtraLight" }}>
          <Text style={{ fontWeight: "bold", fontFamily: "StackSansText-ExtraLight" }}>Publisher:</Text> {book.publisher}
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 16, fontFamily: "StackSansText-ExtraLight" }}>
          <Text style={{ fontWeight: "bold", fontFamily: "StackSansText-ExtraLight" }}>Rating:</Text> {book.rating}
        </Text>

        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8, fontFamily: "StackSansText-ExtraLight" }}>
          Synopsis:
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 24, fontFamily: "StackSansText-ExtraLight" }}>
          {book.synopsis}
        </Text>
      </ScrollView>
    </>
  );
}