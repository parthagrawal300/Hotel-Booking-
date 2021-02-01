import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH} from '../../../utils/index';
import {SpacingGranularPresets, color, spacing} from '../../../theme/index';

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    alignItems: 'center',
  },

  main: {
    paddingBottom: SpacingGranularPresets.medium,
    paddingHorizontal: SpacingGranularPresets.mediumPlus,
    paddingTop: SpacingGranularPresets.mediumPlus,
    marginTop: SpacingGranularPresets.huge,
  },

  loginButtonContainerStyle: {
    width: DEVICE_WIDTH - 2 * SpacingGranularPresets.mediumPlus, // device width - 2* padding horizontal of parent
    alignSelf: 'center',
    paddingTop: SpacingGranularPresets.large,
  },

  loginButtonStyle: {
    backgroundColor: color.primaryButtonColor,
    paddingBottom: spacing[1],
  },

  cardItemContainerStyle: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: color.palette.grey4,
  },

  itemOptionTextStyle: {
    paddingVertical: 16,
    color: color.palette.grey8,
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: 0.5,
  },

  itemIconStyle: {
    paddingVertical: 16,
  },

  screenHeadingTextStyle: {
    color: color.palette.grey8,
    marginTop: 20,
    fontSize: 29,
    fontWeight: '700',
  },

  screenSubHeaderTextStyle: {
    color: color.palette.grey8,
    fontSize: 17,
    lineHeight: 17,
    paddingTop: 8,
  },

  buttonTextStyle: {
    color: color.palette.warmWhite,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default styles;
