import Typography from 'typography'
//import fairyGatesTheme from 'typography-theme-fairy-gates';
import doelger from 'typography-theme-doelger';

doelger.baseFontSize = '16px';
doelger.baseLineHeight = '24px';

doelger.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

const typography = new Typography(doelger);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
