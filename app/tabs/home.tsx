import { Text, View, ScrollView, Pressable, useWindowDimensions, Image } from "react-native";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { books } from "../data/data";

export default function Home() {
  const { height, width } = useWindowDimensions();

  const cardHeight = height * 0.78;
  const cardWidth = width * 0.9;

  return (
    <>
      <Stack.Screen options={{ title: "Perpustakaan Online" }} />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {books.map((book, i) => (
          <View
            key={i}
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 16,
            }}
          >
            <View
              style={{
                width: cardWidth,
                height: cardHeight,
                backgroundColor: "transparent",
                justifyContent: "flex-end",
                overflow: "hidden",

              }}
            >
              <Image
                source={book.image}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                }}
                resizeMode="cover"
              />

              <View
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      flex: 1,
                      marginRight: 8,
                      color: "white",
                      fontFamily: "StackSansText-Regular",
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {book.title}
                  </Text>

                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: "/tabs/information",
                        params: { index: i, title: book.title },
                      })
                    }
                    style={{
                      width: 32,
                      height: 32,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="search-outline" size={32} color="white" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}