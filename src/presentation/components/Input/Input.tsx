import { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import * as Moti from "moti";

import { cn } from "../../lib/utils";
import { useFocusedInput } from "@/src/core/store/focused-input";
import { EyeIcon } from "../../icons/Eye";
import { EyeClosedIcon } from "../../icons/EyeClosed";
import { LoginPasswordIcon } from "../../icons/LoginPassword";
import { LoginEmailIcon } from "../../icons/LoginEmail";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  name?: string;
  labelClasses?: string;
  inputClasses?: string;
  lockField?: boolean;
  enableEditingWhenLock?: boolean;
  isPassword?: boolean;
  TrailingIcon?: React.ReactElement;
}

function Input(props: InputProps) {
  const focusController = useFocusedInput();

  const inputRef = useRef<TextInput>(null);
  const [text, setText] = useState(props.value ?? "");
  const [showPassword, setShowPassword] = useState(!props.isPassword);
  const [isLocked, setIsLocked] = useState(props.lockField);

  const fieldName = props.name ?? props.label;
  const focused = focusController.focusedField === fieldName;

  const activeLabel = text?.length > 0 || focused;

  const placeholder = useMemo(() => {
    if (!props.label) return props.placeholder;

    return focused ? props.placeholder : "";
  }, [focused, props.label, props.placeholder]);

  function updateText(text: string) {
    setText(text);
    props.onChangeText?.(text);
  }

  function onChangeTextInterceptor(text: string) {
    if (isLocked) return;
    updateText(text);
  }

  function enableEditing() {
    setIsLocked(false);
    updateText("");
    requestFocus();
  }

  function togglePassword() {
    setShowPassword((v) => !v);
  }

  function removeFocus() {
    inputRef.current?.blur();
    focusController.blur();
  }

  function requestFocus() {
    inputRef.current?.focus();
    focusController.focus(fieldName);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidHide",
      removeFocus
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      <View
        className={cn(
          "h-14 flex flex-col border rounded-lg justify-center px-4",
          focused ? "border-primary-700" : "border-grey-60",
          isLocked ? "bg-grey-40 dark:bg-grey-40" : "bg-white dark:bg-grey-0",
          props.className
        )}
      >
        <View className="flex-1 flex-row items-center justify-between">
          {props.TrailingIcon && (
            <View className="h-9 w-9 mr-4">{props.TrailingIcon}</View>
          )}

          <View className="flex-1 h-full">
            {props.label && (
              <Moti.Text
                className={cn(
                  "text-[16px] flex-1 absolute",
                  activeLabel ? "text-primary-700" : "text-grey-60",
                  props.labelClasses
                )}
                animate={{
                  // @ts-ignore
                  fontSize: activeLabel ? 10 : 14,
                  top: activeLabel ? 2 : 14,
                }}
                transition={{ type: "timing", duration: 150 }}
              >
                {props.label}
              </Moti.Text>
            )}

            <TextInput
              {...props}
              ref={inputRef}
              className={(cn(props.inputClasses), "flex-1 text-sm")}
              placeholderTextColor={"#71767E"}
              placeholder={placeholder}
              onFocus={requestFocus}
              value={text}
              onChangeText={onChangeTextInterceptor}
              secureTextEntry={!showPassword}
              editable={!isLocked}
            />
          </View>

          {!props.isPassword && isLocked && props.enableEditingWhenLock && (
            <TouchableOpacity
              className="self-center"
              onPress={enableEditing}
              activeOpacity={0.7}
            >
              <Text className="text-xs color-secondary-700">Alterar</Text>
            </TouchableOpacity>
          )}

          {props.isPassword && (
            <TouchableOpacity
              className="self-center"
              onPress={togglePassword}
              activeOpacity={0.7}
            >
              {showPassword ? (
                <EyeClosedIcon size={24} color="#71767E" />
              ) : (
                <EyeIcon size={24} color="#71767E" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}

Input.Password = (props: InputProps) => (
  <Input {...props} TrailingIcon={<LoginPasswordIcon />} isPassword />
);

Input.Email = (props: InputProps) => (
  <Input
    {...props}
    TrailingIcon={<LoginEmailIcon />}
    keyboardType="email-address"
    autoCapitalize="none"
  />
);

export { Input };
