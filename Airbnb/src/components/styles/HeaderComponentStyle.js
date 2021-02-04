import {StyleSheet} from 'react-native';
//import {AppColors, typography} from '../theme';

const styles = StyleSheet.create({
  container: {
    //backgroundColor: AppColors.palette.white,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    //paddingVertical: 21,
    paddingHorizontal: 24,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
  },
  textHeader: {
    //   fontFamily: typography.SFCompactDisplayMedium,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    textAlign: 'left',
    // color: AppColors.palette.black,
  },
  textSub: {
    // fontFamily,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'right',
    // color: AppColors.palette.purple,
  },
  rightSubContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  leftIcon: {
    height: 18,
    width: 10,
    marginRight: 23,
  },
  buttonConatiner: {
    height: 30,
    width: 81,
    paddingVertical: 6,
    borderRadius: 3,
  },
});

export default styles;
