import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "../App.style";
import { ButtonConvert } from "../component/ButtonConvert/ButtonConvert";
import { InputTemperature } from "../component/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "../component/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, type Unit } from "../constant";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "../services/temperature-service";

import coldBackground from "../assets/images/cold.png";
import hotBackground from "../assets/images/hot.png";

// const hotBackground = require("../assets/images/hot.png");

export default function Index() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState<Unit>(DEFAULT_UNIT);
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] =
    useState<number>(hotBackground);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature({
        value: temperatureAsFloat,
        unit: currentUnit,
      });
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]);

  return (
    <ImageBackground source={currentBackground} style={styles.container}>
      <View style={styles.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />

        <View>
          <ButtonConvert
            unit={currentUnit}
            onPress={() => setCurrentUnit(oppositeUnit)}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
