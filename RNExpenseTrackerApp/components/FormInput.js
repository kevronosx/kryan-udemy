import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../utils/colors';

export const FormInput = ({ label, style, textInputConfig, invalid }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.label,
          invalid && { color: GlobalStyles.colors.error50 },
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[inputStyles, invalid && styles.invlaid]}
        {...textInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  invlaid: {
    borderWidth: 2,
    borderColor: GlobalStyles.colors.error500,
    backgroundColor: GlobalStyles.colors.error50,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
