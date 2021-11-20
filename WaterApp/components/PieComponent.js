import React from 'react';
import {
  View,
  Dimensions,
  Text,
} from 'react-native';

import {
  PieChart,
} from 'react-native-chart-kit';

const PieComponent = ({ data, styles }) => {
  const chartConfig = {
    backgroundGradientFrom: '#2b2d42',
    backgroundGradientTo: '#414463',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
    return (
      <View>
        <Text style={styles.sectionTitle}>Water Consumption per Device, L</Text>
        <PieChart
          data={data}
          width={Dimensions.get('window').width}
          height={300}
          chartConfig={chartConfig}
          accessor={'consumption'}
          paddingLeft={"15"}
          center={[5, 20]}
          hasLegend={true}
          absolute={false}
          backgroundColor={'#2b2d42'}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
    </View>
    )
}

export default PieComponent