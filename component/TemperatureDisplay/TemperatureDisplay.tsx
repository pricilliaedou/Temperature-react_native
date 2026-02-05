import { Text } from "react-native";
import { styles } from "./TemperatureDisplay.style";

interface TemperatureDisplayProps {
  value?: number|string;
  unit?: "°C" | "°F";
}

export function TemperatureDisplay({ value, unit }: TemperatureDisplayProps) {
  return (
    <>
      <Text style={styles.text} numberOfLines={1}>
        {value} {unit}
      </Text>
    </>
  );
}
