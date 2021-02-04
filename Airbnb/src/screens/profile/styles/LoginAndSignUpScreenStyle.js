import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH} from '../../../utils/index';
import {SpacingGranularPresets, color, spacing} from '../../../theme/index';

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.palette.warmWhite,
    flex: 1,
    paddingTop: SpacingGranularPresets.huge,
  },

  main: {
    paddingBottom: SpacingGranularPresets.medium,
    paddingHorizontal: SpacingGranularPresets.mediumPlus,
    paddingTop: SpacingGranularPresets.mediumPlus,
  },

  socialLoginButtonStyle: {
    backgroundColor: color.palette.warmWhite,
    borderWidth: 1,
    borderColor: color.palette.black,
    paddingBottom: spacing[1],
  },

  socialLoginButtonTextStyle: {
    color: color.palette.grey8,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'left',
    marginLeft: 58,
  },

  loginButtonContainerStyle: {
    width: DEVICE_WIDTH - 2 * SpacingGranularPresets.mediumPlus, // device width - 2* padding horizontal of parent
    alignSelf: 'center',
    paddingTop: SpacingGranularPresets.large,
  },

  loginButtonStyle: {
    backgroundColor: color.primaryButtonColor,
    paddingVertical: spacing[1],
  },

  buttonTextStyle: {
    color: color.palette.warmWhite,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default styles;
