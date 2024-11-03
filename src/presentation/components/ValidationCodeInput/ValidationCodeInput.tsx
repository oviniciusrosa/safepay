import React from "react";
import { Text, TextInput, View } from "react-native";
import { cn } from "../../lib/utils";

import { CodeField, Cursor } from "react-native-confirmation-code-field";

interface Props {
  className?: string;
  codeSpaces?: number;
  onChangeCode: (code: string) => void;
  onSubmitEditing?: VoidCallback;
}

export function ValidationCodeInput(props: Props) {
  const [validateCode, setValidateCode] = React.useState("");
  const codeSpaces = 4;

  function onChange(code: string) {
    setValidateCode(code);
    props.onChangeCode(code);
  }

  return (
    <View className="flex-row justify-center" style={{ position: "relative" }}>
      <CodeField
        InputComponent={TextInput}
        value={validateCode}
        onChangeText={onChange}
        cellCount={codeSpaces}
        caretHidden={false}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        onSubmitEditing={props.onSubmitEditing}
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            pointerEvents="none"
            className={cn(
              `w-12 h-12 mr-2 border 
            border-t-white dark:border-t-black 
            border-x-white dark:border-x-black 
            border-b-primary-700
            `,
              isFocused ? "border-b-primary" : "",
              props.className
            )}
          >
            <Text className="text-grey-80 dark:text-grey-40 text-center text-4xl font-bold">
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
