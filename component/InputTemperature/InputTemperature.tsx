import { Text, TextInput, View } from "react-native";
import { styles } from "./InputTemperature.style";

interface InputTemperatureProps {
  defaultValue?: string;
  onChangeText?: (text: string) => void;
  unit: "°C" | "°F";
}

export function InputTemperature({
  defaultValue,
  onChangeText,
  unit,
}: InputTemperatureProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tape une température"
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={styles.degreeSymbol}>{unit}</Text>
    </View>
  );
}
