import React from "react";
import Swiper from "react-native-swiper";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: Constants.statusBarHeight,
          backgroundColor: "#212121"
        }}
      >
        <StatusBar style="light" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#569751",
          paddingVertical: 10,
          paddingHorizontal: 15,
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity
          onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
        >
          <Entypo name="menu" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={{ paddingLeft: 20 }}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
            HOME
          </Text>
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <Image
            source={require("../images/app-icon.png")}
            style={{
              resizeMode: "contain",
              width: 30,
              height: 30,
              alignSelf: "center"
            }}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          किसान सूचीकरण व्यवस्थापन प्रणाली
        </Text>
      </View>
      <ScrollView>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View>
            <Image
              style={{
                width: "100%",
                height: "100%",

                resizeMode: "cover"
              }}
              source={require("../images/main-banner.png")}
            />
          </View>
          <View>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={require("../images/banner-1.jpg")}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={require("../images/banner-2.jpg")}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={require("../images/banner-3.jpg")}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={require("../images/banner-4.jpg")}
            />
          </View>
        </Swiper>
        <View style={{ padding: 10, backgroundColor: "#fff" }}>
          <Text style={{ color: "#212121", fontSize: 18, fontWeight: "600" }}>
            किसान परिचय पत्र
          </Text>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>किसान दर्ता</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>परिवार विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>खेत/ बारी विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText} style={styles.buttonText}>
                  Click Me
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>जमिन भाडा/करारमा लिएको विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>जमिन भाडा/करारमा दिएको विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>कृषि व्यवसाय/फर्म सम्बन्धी विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>आय / खर्च विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>बाली उत्पादन सम्बन्धी विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>बालीको बजारीकरण विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>
                कृषि मेशिनरी प्रयोग सम्बन्धी विवरण
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>
                कृषि/पशुपालन संरचना सम्बन्धी विवरण
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>
                पशुपालन मेशिनरी प्रयोग सम्बन्धी विवरण
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>
                ह्याचरी तथा मत्स्यपालन संरचना सम्बन्धी विवरण
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>
                मत्स्यपालन मेशिनरी सम्बन्धी विवरण
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  marginBottom: 10
                }}
              />
              <Text style={styles.title}>
                पशुपन्छी/ मत्स्यपालन सम्बन्धी विवरण
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>पशुपन्छी/मत्स्यको बजारीकरण विवरण</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../images/app-icon.png")}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.title}>
                अनलाइन प्रमाणीकरणको लागि आवश्यक कागजात अपलोड गर्नुपर्नेछ
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("http://farmer.moald.gov.np/")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Click Me</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  wrapper: {
    height: 300,
    marginBottom: 20
  },
  item: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "dotted",
    borderRadius: 1,
    alignSelf: "center",
    minHeight: 150,
    justifyContent: "center",
    margin: 2,
    padding: 10,
    width: "48%",
    backgroundColor: "#fff"
  },
  title: {
    textAlign: "center",
    fontSize: 15
  },
  button: {
    backgroundColor: "#17a2b8",
    textAlign: "center",
    padding: 6,
    borderRadius: 4,
    marginTop: 5
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 13
  }
});

export default Home;
