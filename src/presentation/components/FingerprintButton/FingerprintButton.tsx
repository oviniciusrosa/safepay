import React from "react";
import { TouchableOpacity } from "react-native";
import { FingerprintIcon } from "../../icons/Fingerprint";

interface Props {
  className?: string;
}

export function FingerprintButton(props: Props) {
  return (
    <TouchableOpacity
      className={props.className}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <FingerprintIcon />
    </TouchableOpacity>
  );
}
