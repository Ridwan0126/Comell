import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets';
import {FoodCard, Gap} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'red'}} />;

const initialLayout = {width: Dimensions.get('window').width};

const Home = () => {
  // const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: FirstRoute,
  });

  return (
    // <ScrollView>
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>ComelApps</Text>
          <Text style={styles.desc}>Let's get some food</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Gap width={24} />
        <View style={styles.foodCardContainer}>
          <FoodCard image={FoodDummy1} />
          <FoodCard image={FoodDummy2} />
          <FoodCard image={FoodDummy3} />
          <FoodCard image={FoodDummy4} />
        </View>
      </ScrollView>
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
    // </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1, marginTop: -280},
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  tabView: {backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabText: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
  containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});
