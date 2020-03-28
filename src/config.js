const grid = 4
const spacingKeys = [
  'none',
  'xxsmall',
  'xsmall',
  'small',
  'gutter',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]
const spacingMap = {
  none: 0,
  xxsmall: grid * 1,
  xsmall: grid * 2,
  smallish: grid * 3,
  small: grid * 4,
  gutter: grid * 6,
  medium: grid * 8,
  large: grid * 9,
  largeish: grid * 10,
  xlarge: grid * 12,
  xxlarge: grid * 16,
}

const baseColors = {
  brand: '#445560',
  brandAccent: '#d80a86',
  brandLight: '#fff8fc',
  brandAccentAccessible: '#ce0c80',
  formAccent: '#d80a86',
  white: '#fff',
  focus: 'rebeccapurple',
  positive: '#138a08',
  critical: '#f44336',
  info: '#1e468c',
  infoLight: '#1e468c',
  promote: 'orange',
  neutral: '#1c1c1c',
  neutralInverted: '#ffffff',
  black: '#1c1c1c',
  link: 'rebeccapurple',
  linkVisited: 'rebeccapurple',
  secondary: '#a0a0a0',
  secondaryInverted: '#ffffff',
  subtle: '#eee',
  featureSlider: '#0093b4',
  gray: '#f5f5f5',
}

const colors = {
  foreground: {
    link: baseColors.link,
    linkHover: baseColors.link,
    linkVisited: baseColors.linkVisited,
    neutral: baseColors.neutral,
    neutralInverted: baseColors.white,
    formAccent: baseColors.formAccent,
    critical: baseColors.critical,
    info: baseColors.info,
    promote: baseColors.promote,
    positive: baseColors.positive,
    secondary: baseColors.secondary,
    secondaryInverted: baseColors.secondaryInverted,
    subtle: baseColors.subtle,
  },
  background: {
    body: '#eee',
    brand: baseColors.brand,
    input: baseColors.white,
    inputDisabled: '#eee',
    brandAccent: baseColors.brandAccent,
    formAccent: baseColors.formAccent,
    formAccentDisabled: '#ccc',
    selection: '#f1f7ff',
    card: baseColors.white,
    critical: baseColors.critical,
    info: baseColors.info,
    promote: baseColors.promote,
    positive: baseColors.positive,
    neutral: baseColors.neutral,
    subtle: baseColors.subtle,
  },
}

module.exports = {
  fontFamily: {
    text:
      '"Open Sans", -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
    heading:
      '"Open Sans", -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  },

  fontWeights: {
    regular: 400,
    medium: 600,
    strong: 700,
  },

  'thin-font-weight': 100,
  'extra-light-font-weight': 200,
  'light-font-weight': 300,
  'regular-font-weight': 400,
  'medium-font-weight': 500,
  'semi-bold-font-weight': 600,
  'bold-font-weight': 700,

  grid,

  breakpoints: {
    1: 480,
    2: 960,
    3: 1280,
  },

  contentWidth: {
    medium: 640,
    large: 960,
    max: 1280,
  },

  'font-scale': {
    text: {
      descenderHeightScale: 0.1155,
      capHeight: 0.725,
    },
    heading: {
      descenderHeightScale: 0.1155,
      capHeight: 0.725,
    },
  },

  spacingKeys,
  spacingMap,
  spacing: {
    ...spacingMap,
    half: '50%',
    full: '100%',
    fullvh: '100vh',
    fullvw: '100vw',
  },

  'space-none': 0,
  'space-xxsmall': spacingMap.xxsmall,
  'space-xsmall': spacingMap.xsmall,
  'space-smallish': spacingMap.smallish,
  'space-small': spacingMap.small,
  'space-gutter': spacingMap.gutter,
  'space-medium': spacingMap.medium,
  'space-large': spacingMap.large,
  'space-largeish': spacingMap.largeish,
  'space-xlarge': spacingMap.xlarge,
  'space-xxlarge': spacingMap.xxlarge,

  'base-colors': baseColors,
  colors,
  foregroundColors: colors.foreground,
  backgroundColors: colors.background,

  textSizes: {
    xsmall: {
      mobile: {
        size: 12,
        rows: 4,
      },
      tablet: {
        size: 12,
        rows: 4,
      },
    },
    small: {
      mobile: {
        size: 14,
        rows: 5,
      },
      tablet: {
        size: 14,
        rows: 5,
      },
    },
    standard: {
      mobile: {
        size: 16,
        rows: 6,
      },
      tablet: {
        size: 16,
        rows: 6,
      },
    },
    large: {
      mobile: {
        size: 18,
        rows: 8,
      },
      tablet: {
        size: 18,
        rows: 8,
      },
    },
    xlarge: {
      mobile: {
        size: 22,
        rows: 8,
      },
      tablet: {
        size: 22,
        rows: 8,
      },
    },
  },

  headingSizes: {
    xsmall: {
      mobile: {
        size: 14,
        rows: 5,
      },
      tablet: {
        size: 14,
        rows: 5,
      },
    },
    small: {
      mobile: {
        size: 15,
        rows: 5,
      },
      tablet: {
        size: 15,
        rows: 5,
      },
    },
    standard: {
      mobile: {
        size: 18,
        rows: 6,
      },
      tablet: {
        size: 21,
        rows: 6,
      },
    },
    large: {
      mobile: {
        size: 21,
        rows: 7,
      },
      tablet: {
        size: 28,
        rows: 8,
      },
    },
    xlarge: {
      mobile: {
        size: 22,
        rows: 7,
      },
      tablet: {
        size: 34,
        rows: 9,
      },
    },
  },

  shadows: {
    borderStandard: {
      style: `0px 0px 0px 2px inset`,
      color: baseColors.brand,
      colorInverted: 'white',
    },
  },

  border: {
    radius: {
      standard: '3px',
      medium: '6px',
      large: '9px',
    },
    style: {
      none: 0,
      standard: '1px solid',
      double: '2px solid',
    },
  },
}
