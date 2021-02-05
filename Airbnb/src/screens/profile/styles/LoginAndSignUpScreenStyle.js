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
    marginLeft: 58,
    textAlign: 'left',
  },

  loginButtonContainerStyle: {
    alignSelf: 'center',
    paddingTop: SpacingGranularPresets.large,
    width: DEVICE_WIDTH - 2 * SpacingGranularPresets.mediumPlus, // device width - 2* padding horizontal of parent
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

  phoneCodeContainerStyle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    height: 56,
  },

  phoneNumberInputStyle: {
    borderColor: 'gray',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 1,
    fontSize: 20,
    height: 56,
    paddingHorizontal: 12,
  },

  orLineStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
  },

  orBorderLineStyle: {
    backgroundColor: 'gray',
    height: 1,
    width: '42%',
  },

  orTextStyle: {
    alignSelf: 'baseline',
    paddingHorizontal: '5%',
  },

  headerTextStyle: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 16,
  },

  buttonContainerStyle: {
    paddingVertical: 8,
  },

  topPlaceholderStyle: {
    color: '#000',
    fontSize: 14,
    left: 0,
    marginHorizontal: 12,
    position: 'absolute',
    top: 68,
  },
});

export default styles;
