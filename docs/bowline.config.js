const grid = 4

const baseColors = {
  brand: "#54494B",
  brandAccent: "#7F6A93",
  brandLight: "#D3D5D4",
  brandAccentAccessible: "#ce0c80",
  formAccent: "#4F83A3",
  white: "#fff",
  focus: "rebeccapurple",
  positive: "#A2C5AC",
  positiveLight: "#EEF4EF",
  critical: "#f44336",
  info: "#9DB5B2",
  infoLight: "#1e468c",
  promote: "#7F6A93",
  promoteLight: "#efeaf3",
  neutral: "#1c1c1c",
  neutralInverted: "#ffffff",
  black: "#1c1c1c",
  link: "rebeccapurple",
  linkVisited: "rebeccapurple",
  secondary: "#878E99",
  secondaryInverted: "#ffffff",
  subtle: "#eee",
  featureSlider: "#0093b4",
  gray: "#D3D5D4",
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
    large: 720,
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
    half: "50%",
    full: "100%",
    fullvh: "100vh",
    fullvw: "100vw",
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

  shadows: {
    borderStandard: {
      style: `0px 0px 0px 2px inset`,
      color: colors.background.promoteLight,
      colorInverted: "white",
    },
  },

  border: {
    radius: {
      standard: "3px",
      medium: "6px",
      large: "9px",
      half: "50%",
    },
    style: {
      none: 0,
      standard: "1px solid",
      double: "2px solid",
    },
  },
}
