const data = require('../db.json')

const totalConsumptionPerDevicePerApartment = (devices, colors, apartmentData) => {
    const consumptionPerDevice = devices.map((d, i) => (
        {
          name: d,
          consumption: apartmentData[d].measurements
            .map(m => Number(m.Consumption))
            .reduce((s, e) => s + e),
          color: colors[i],
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        }
      )
    );

    return consumptionPerDevice
}

const singleDeviceConsumptionPerDayPerApartment = (device, apartmentData) => {
    const consumption = apartmentData[device].measurements.map(m => ({date: m.TimeStamp.split('T')[0], count: Number(m.Consumption)}))
    let consumptionAccumulate = []
    consumption.map(entry => {
      const sameDate = consumptionAccumulate.find(e => e.date == entry.date);
      if (sameDate == undefined){
        consumptionAccumulate = [...consumptionAccumulate, entry]
      } else {
        const index = consumptionAccumulate.indexOf(sameDate)
        consumptionAccumulate[index].count += entry.count
      }
    })
    consumptionAccumulate = consumptionAccumulate.map(e => ({date: e.date, count: Math.round(e.count)})).slice(0, 83)
    return consumptionAccumulate
}

const averageTempPerApartment = (devices, apartmentData) => {
    const averageTemp = devices.map(d => apartmentData[d].measurements.map(m => Number(m.Temp)).reduce((s, e) => s + e)/apartmentData[d].measurements.length)
    return {
        labels: devices,
        datasets: [
        {
            data: averageTemp.map(n => Math.round((n + Number.EPSILON) * 100) / 100)
        }
        ]
    }
}

const getApartment = (apartmentNumber) => {
    return data.houses[0].apartments[apartmentNumber]
}

module.exports = {
    totalConsumptionPerDevicePerApartment,
    singleDeviceConsumptionPerDayPerApartment,
    averageTempPerApartment,
    getApartment
}