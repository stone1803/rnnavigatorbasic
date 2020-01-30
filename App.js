import React from "react";
import { View, Text, Button, ImageBackground,Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const img = "https://source.unsplash.com/user/erondu/1600x900";
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "VẤN THIÊN",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Image source={require('./img/bg.jpg')} style={{width:100,height:100}}/>

        <Text>MA HA KA RU NA ĐA RA NI</Text>

        <Button
          title="VIỆC CẦN HỎI "
          onPress={() => {
            this.props.navigation.navigate("Details", {
              itemId: Math.floor(Math.random() * 100),
              otherParam: "anything you want here"
            });
          }}
        />
      </View>

    );
  }
}
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "MỌI THỨ RỒI SẼ TỐT THÔI",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ alignItems: "center", padding: 10 }}>
          Nam mô rát na tra da da. Na ma a ria va lô ki tê soa ra da, bô đi sát
          toa da, ma ha sát toa da, ma ha ka ru ni ka da. Om, sa va, ra ba da,
          su đa na đa siê. Na más, kri toa, i mam, a ria ya va lô ki tê soa ra,
          ram đa va. Nam mô na ra kin đi, ha ra dê, ma ha va đa sa mê. Sa va, a
          tha đu, su bam, a jê yam, sa va sát toa, na ma va sát toa. Nam mô va
          ka, ma ra đa tu. Ta đi ya tha: Om, a va lô kê, lô ka tê, ka ra tê, ê
          hi rê, ma ha bô đi sát toa, sa va sa va, ma la ma la, ma hê ma hi rê
          đa yam, ku ru ku ru, ka mum, đu ru đu ru, vi ja da tê, ma ha vi ja da
          tê, đa ra đa ra, đi ri ni, soa ra da, cha la cha la, ma ma, va ma ra,
          múc tê lê, ê hê ê hê, chin đa chin đa, a ra sam, pra cha li, va sa va
          sam, pra sa da, hu ru hu ru, ma ra, hu ru hu ru hi ri, sa ra sa ra, si
          ri si ri, su ru su ru, bô đi da, bô đi da, bô đa da, bô đa da, mai tri
          da, na ra kin đi. Đa si ni na, pa da ma na, soa ha. Sít đa da, soa ha.
          Ma ha sít đa da, soa ha. Sít đa dô gê, soa ra da, soa ha. Na ra kin
          đi, soa ha. Ma ra na ra, soa ha. Si ra sam, a mu kha da, soa ha. Sa
          va, ma ha a sít đa da, soa ha. Chác ra, a sít đa da, soa ha. Pát ma
          kás ta da, soa ha. Na ra kin đi, va ga ra da, soa ha. Ma va ri, san
          kha ra da, soa ha. Na ma rát na tra da da. Nam mô a ri ya va lô ki tê
          soa ra da, soa ha. Om, sít đa yăn tu, man tra, pa đa da, soa ha.
        </Text>
        <Text>
          QUẺ DỊCH BẠN LÀ :{JSON.stringify(navigation.getParam("itemId", "NO-ID"))}
        </Text>
        <Button
          title="HỎI LẠI 1 LẦN NỮA"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
