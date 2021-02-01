import {palette} from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPU.
   */
  transparent: 'rgba(0, 0, 0, 0)',

  /***
   *  Button Colors
   */

  primaryButtonColor: 'rgb(229, 12, 96)',
  /**
   * The screen background.
   */
  backgroundLight: palette.white,
  deviceSliderStartColor: '#B2C0D9',
  deviceSliderEndColor: '#a38175',
  dimmerSliderInactiveColor: '#B2C0DA',
  dimmerSliderMiddleColor: '#FFD1BC',
  dimmerSliderActiveColor: '#FFE2C1',

  scrollBarColor: '#f9f4ef',
  linkColor: '#758ebd',

  statusBarSplash: 'rgba(0,0,0,0.1)',
  searchBarBackground: 'rgba(142, 142, 147, 0.12)',
  activeOtpBorderColor: 'rgba(255, 190, 116, 1)',
  inActiveOtpBorderColor: 'rgba(255, 190, 116, 0.5)',
  transparentCloseBackgroundColor: 'rgba(164, 164, 164, 0.6)',
  skipBackgroundColor: 'rgba(45, 39, 73, 0.4)',
};
