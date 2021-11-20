import React from 'react';
import {
  View,
  Dimensions,
  Text,
} from 'react-native';

import {
  BarChart,
} from 'react-native-chart-kit';

const BarComponent = ({ data, styles }) => {
  const chartConfig = {
    backgroundGradientFrom: '#2b2d42',
    backgroundGradientTo: '#414463',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      marginVertical: 8,
    },
  };

  const graphStyle = {
    borderRadius: 16,
    marginVertical: 15,
  }
    return (
      <View>
        <Text style={styles.sectionTitle}>Average Temperature Water per Device, °C</Text>
        <BarChart
          style={graphStyle}
          data={data}
          width={Dimensions.get('window').width}
          height={300}
          yAxisSuffix="°C"
          chartConfig={chartConfig}
          verticalLabelRotation={10}
          showValuesOnTopOfBars={true}
        />
    </View>
    )
}

export default BarComponent