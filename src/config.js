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

  typography: {
    default: {
      family: '"Open Sans", -apple-system, system-ui, sans-serif',
      metrics: {
        capHeight: 1580,
        ascent: 2189,
        descent: -600,
        lineGap: 0,
        unitsPerEm: 2048,
      },
      scale: {
        supertiny: {
          size: 10,
          rows: 3,
        },
        xsmall: {
          size: 12,
          rows: 4,
        },
        small: {
          size: 14,
          rows: 5,
        },
        standard: {
          size: 15,
          rows: 6,
        },
        large: {
          size: 18,
          rows: 7,
        },
        xlarge: {
          size: 20,
          rows: 8,
        },
      },
      weights: {
        regular: 400,
        medium: 600,
        strong: 700,
      },
    },
    heading: {
      family: '"Abril Fatface", -apple-system, system-ui, sans-serif',
      metrics: {
        capHeight: 700,
        ascent: 1058,
        descent: -291,
        lineGap: 0,
        unitsPerEm: 1000,
      },
      scale: {
        xsmall: {
          size: 12,
          rows: 4,
        },
        small: {
          size: 14,
          rows: 5,
        },
        standard: {
          size: 15,
          rows: 6,
        },
        large: {
          size: 32,
          rows: 8,
        },
        xlarge: {
          size: 48,
          rows: 12,
        },
      },
      weights: {
        regular: 400,
      },
    },
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
