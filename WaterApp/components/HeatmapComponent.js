import React from 'react';
import {
    View,
    Dimensions,
    Text,
  } from 'react-native';

import {
    ContributionGraph,
  } from 'react-native-chart-kit';

  const HeatmapComponent = ({ data, device, styles }) => {
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

    const firstDate = new Date(data[0].date)
    const lastDate = new Date(data.slice(-1)[0].date)

    const timeDiff = lastDate.getTime() - firstDate.getTime();
  
    // To calculate the no. of days between two dates
    const days = timeDiff / (1000 * 3600 * 24);
    console.log(days)



    return (
      <View>
        <Text style={styles.sectionTitle}>Water Consumption Pattern by {device}</Text>
        <ContributionGraph
          values={data}
          endDate={lastDate}
          numDays={days}
          width={0.9*Dimensions.get('window').width}
          height={300}
          chartConfig={chartConfig}
          style={{
            marginHorizontal: 0.05*Dimensions.get('window').width,
            marginVertical: 8,
          }}
        />
      </View>
    )
  }

  export default HeatmapComponent