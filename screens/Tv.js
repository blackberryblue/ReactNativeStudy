import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

const dataList = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '4'},
  {key: '5'},
  {key: '6'},
  {key: '7'},
  {key: '8'},
];

const numColumns = 3;
const WIDTH = Dimensions.get('window').width;

const formatData = (dataList, numColumns) => {
  const totalRows = Math.floor(dataList.length / numColumns);
  let totalLastRow = dataList.length - totalRows * numColumns;

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    dataList.push({key: 'blank', empty: true});
    totalLastRow++;
  }
  return dataList;
};

const _renderItem = ({item, index}) => {
  if (item.empty) {
    return <View style={styles.itemStyle} />;
  }
  return (
    <View style={styles.itemStyle}>
      <Text style={styles.itemtext}>{item.key}</Text>
    </View>
  );
};

const Tv = () => (
  <View style={styles.container}>
    <FlatList
      data={formatData(dataList, numColumns)}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
    />
  </View>
);

export default Tv;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  itemStyle: {
    backgroundColor: '#3232ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    margin: 1,
    width: WIDTH / numColumns,
  },
  itemtext: {fontSize: 30, color: '#fff'},
});
