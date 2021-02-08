import {StyleSheet} from 'react-native';
import {SpacingGranularPresets, color} from '../../../../theme/index';

const styles = StyleSheet.create({
  phoneCodeCardContainerStyle: {
    borderBottomColor: color.palette.grey5,
    borderBottomWidth: 1,
    padding: SpacingGranularPresets.tiny,
  },

  phoneCodeTextStyle: {
    fontSize: 18,
  },
});

export default styles;
