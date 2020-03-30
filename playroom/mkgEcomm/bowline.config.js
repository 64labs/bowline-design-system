const grid = 4

const baseColors = {
  brand: '#111',
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
  foreground: baseColors,
  background: baseColors,
}

module.exports = {
  fontFamily: {
    text:
      '-apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
    heading:
      '-apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    strong: 600,
  },

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
      descenderHeightScale: 0.1122,
      capHeight: 0.75,
    },
    heading: {
      descenderHeightScale: 0.1122,
      capHeight: 0.75,
    },
  },

  spacing: {
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
    half: '50%',
    full: '100%',
    fullvh: '100vh',
    fullvw: '100vw',
  },

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
      color: colors.background.brand,
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
