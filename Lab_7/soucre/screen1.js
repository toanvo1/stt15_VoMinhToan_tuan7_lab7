import { Pressable, StyleSheet, Text, View, Image, } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const screen1 = ({ navigation }) => {
  const uri = "https://65465bfefe036a2fa9558ece.mockapi.io/Donut/Donut_lab7";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(uri)
      .then((respone) => respone.json())
      .then((json) => {
        console.log(data);
        setData(json);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              height: "30px",
              width: "206px",
              top: "10px",
              left: "17px",
              color: "rgba(0, 0, 0, 0.65)",
              fontWeight: "bold",
              lineHeight: "18,75px",
              fontSize: "16px",
            }}
          >
            Welcome, Jala!
          </Text>
          <Text
            style={{
              width: "206px",
              top: "5px",
              height: "35px",
              left: "17px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Choice you Best food
          </Text>
        </View>
        <View style={{ flex: 1, margin: 10 }}>
          <View
            style={{
              width: "266px",
              height: "50px",
              border: "1px solid  rgba(196, 196, 196, 1)",
              left: "10px",
            }}
          >
            <Pressable
              style={{
                left: "7px",
                fontSize: "16px",
                color: "rgba(196, 196, 196, 1)",
                top: "10px",
              }}
            >
              Search Food
            </Pressable>
          </View>
        </View>

        <View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                width: "101px",
                height: "35px",
                border: "1px solid rgba(12, 6, 6, 1)",
                borderRadius: "5px",
                backgroundColor: "rgba(241, 176, 0, 1)",
                left: "10px",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>Donut</Text>
            </Pressable>
            <Pressable
              style={{
                width: "101px",
                height: "35px",
                border: "1px solid rgba(12, 6, 6, 1)",
                borderRadius: "5px",
                fontWeight: "bold",
                left: "4px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {" "}
                Pink Donut
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: "120px",
                height: "35px",
                border: "1px solid rgba(12, 6, 6, 1)",
                borderRadius: "5px",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>
                Floating
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ marginTop: "10px" }}>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  flex: 7,
                  flexDirection: "row",
                  backgroundColor: "pink",
                  marginVertical: "10px",
                  borderRadius: "10px",
                  width: "362px",
                  height: "300px",
                  marginLeft: "15px",
                }}
              >
                <View style={{ flex: 2, justifyContent: "center" }}>
                  <Image
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "10px",
                    }}
                    source={{ uri: item.Img }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      right: "38px",
                      margin: 4,
                    }}
                  >
                    {item.Name}
                  </Text>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      right: "38px",
                      color: "rgba(0, 0, 0, 0.54)",
                      margin: 2,
                    }}
                  >
                    {item.Note}
                  </Text>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      right: "38px",
                      color: "rgba(0, 0, 0, 1)",
                      margin: 2,
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
                <Pressable 
                key={index}
                onPress={() => {
                  navigation.navigate("screen2", {
                    
                    image: item.Img,
                    name: item.Name,
                    price: item.price,
                    
                  });
                }}
                >
                  <Image
                    source={require("../assets/1.png")}
                    style={{ width: "44px", height: "44px" }}
                  ></Image>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default screen1;

const styles = StyleSheet.create({});
