import STYLES_CONSTANTS from './styles.constants'

/**
 * @function getHeaderStylesAndSetTitle
 * @desc Gets header title and constructs object for header title to be
 * used.
 */
function getHeaderStylesAndSetTitle(title = 'No Title Set') {
  return {
    title: title,
    headerTintColor: STYLES_CONSTANTS.headerStyle.headerTintColor,
    headerStyle: {
      backgroundColor: STYLES_CONSTANTS.headerStyle.backgoundColorPrimary
    }
  }
}

export default getHeaderStylesAndSetTitle;
