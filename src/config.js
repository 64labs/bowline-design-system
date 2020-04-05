const grid = 4

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
  foreground: baseColors,
  background: baseColors,
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

  grid,

  screens: {
    sm: 480,
    md: 960,
    lg: 1280,
  },

  contentWidth: {
    medium: 640,
    large: 960,
    max: 1280,
  },

  fontScale: {
    text: {
      descenderHeightScale: 0.1155,
      capHeight: 0.725,
    },
    heading: {
      descenderHeightScale: 0.1155,
      capHeight: 0.725,
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

  textSizes: {
    xsmall: {
      default: {
        size: 12,
        rows: 4,
      },
      sm: {
        size: 12,
        rows: 4,
      },
    },
    small: {
      default: {
        size: 14,
        rows: 5,
      },
      sm: {
        size: 14,
        rows: 5,
      },
    },
    standard: {
      default: {
        size: 16,
        rows: 6,
      },
      sm: {
        size: 16,
        rows: 6,
      },
    },
    large: {
      default: {
        size: 18,
        rows: 8,
      },
      sm: {
        size: 18,
        rows: 8,
      },
    },
    xlarge: {
      default: {
        size: 22,
        rows: 8,
      },
      sm: {
        size: 22,
        rows: 8,
      },
    },
  },

  headingSizes: {
    xsmall: {
      default: {
        size: 14,
        rows: 5,
      },
      sm: {
        size: 14,
        rows: 5,
      },
    },
    small: {
      default: {
        size: 15,
        rows: 5,
      },
      sm: {
        size: 15,
        rows: 5,
      },
    },
    standard: {
      default: {
        size: 18,
        rows: 6,
      },
      sm: {
        size: 21,
        rows: 6,
      },
    },
    large: {
      default: {
        size: 21,
        rows: 7,
      },
      sm: {
        size: 28,
        rows: 8,
      },
    },
    xlarge: {
      default: {
        size: 22,
        rows: 7,
      },
      sm: {
        size: 34,
        rows: 9,
      },
    },
  },

  letterSpacing: {
    small: '0.025em',
    medium: '0.05em',
    large: '0.075em',
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
      half: '50%',
    },
    style: {
      none: 0,
      standard: '1px solid',
      double: '2px solid',
    },
  },

  components: {
    Button: {
      variants: {
        example: {
          weight: 'weak',
        },
      },
    },
  },
}
