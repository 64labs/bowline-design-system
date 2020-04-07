const grid = 4

const colors = {
  brand: '#54494B',
  brandLight: '#D3D5D4',
  brandAccent: '#7F6A93',
  positive: 'green',
  positiveLight: '#EEF4EF',
  critical: '#f44336',
  info: '#9DB5B2',
  infoLight: '#1e468c',
  promote: '#7F6A93',
  promoteLight: '#efeaf3',
  neutral: '#1c1c1c',
  neutralInverted: '#ffffff',
  secondary: '#878E99',
  secondaryInverted: '#ffffff',
  subtle: '#eee',
  black: '#1c1c1c',
  white: '#fff',

  // applied colors
  formAccent: '#4F83A3',
  focus: 'rebeccapurple',
  link: 'rebeccapurple',
  linkVisited: 'rebeccapurple',
}

export default {
  grid,

  screens: {
    sm: 480,
    md: 960,
    lg: 1280,
  },

  fontFamily: {
    text: '"Open Sans", -apple-system, system-ui, sans-serif',
    heading: '"Open Sans", -apple-system, system-ui, sans-serif',
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

  fontWeights: {
    regular: 400,
    medium: 600,
    strong: 700,
  },

  contentWidth: {
    medium: 640,
    large: 720,
    max: 1280,
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
        size: 13,
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
        rows: 7,
      },
      sm: {
        size: 18,
        rows: 7,
      },
    },
    xlarge: {
      default: {
        size: 20,
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
        size: 16,
        rows: 5,
      },
      sm: {
        size: 16,
        rows: 5,
      },
    },
    standard: {
      default: {
        size: 23,
        rows: 6,
      },
      sm: {
        size: 23,
        rows: 6,
      },
    },
    large: {
      default: {
        size: 24,
        rows: 7,
      },
      sm: {
        size: 26,
        rows: 9,
      },
    },
    xlarge: {
      default: {
        size: 32,
        rows: 9,
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
      color: colors.promoteLight,
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
