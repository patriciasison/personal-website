import { Viewport } from "../providers"

const theme = {
  breakpoint: {
    [Viewport.MOBILE]: {
      media: 360,
      width: 300,
      minHeight: 568,
      maxHeight: 812,
    },
    [Viewport.TABLET]: {
      media: 768,
      width: 680,
      minHeight: 670,
      maxHeight: 1366,
    },
    [Viewport.LAPTOP]: {
      media: 1024,
      width: 930,
      minHeight: 570,
      maxHeight: 720,
    },
    [Viewport.DESKTOP]: {
      media: 1280,
      width: 1200,
      minHeight: 770,
      maxHeight: 1440,
    },
  },
  color: {
    white: {
      norm: "#FFFFFF",
      dark: "#F6F6F6",
      xdark: "#DFE7EC",
    },
    black: {
      norm: "#000000",
      light: "#212121",
      xlight: "#3D3D3D",
    },
    gray: {
      dark: "#575757",
      norm: "#797979",
      light: "#A3A3A3",
    },
    blue: {
      xdark: "#006D96",
      dark: "#008AB4",
      norm: "#009DD8",
      light: "#00D0F9",
    },
    red: {
      norm: "#D66363",
    },
    yellow: {
      norm: "#E3D65A",
      light: "#FAF6CD",
    },
    green: {
      norm: "#72BF93",
      light: "#D5EEDF",
    },
    purple: {
      norm: "#4A0A9E",
      light: "#E1E0FF",
    },
  },

  spacing: {
    xxsmall: "0.25rem",
    xsmall: "0.5rem",
    small: "0.75rem",
    mid: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
    xxlarge: "3rem",
    xxxlarge: "5rem",
    xxxxlarge: "8rem",
  },

  size: {
    xxxsmall: "1.25rem",
    xxsmall: "1.5rem",
    xsmall: "1.75rem",
    small: "2rem",
    mid: "2.25rem",
    large: "2.5rem",
    xlarge: "2.75rem",
    xxlarge: "3rem",
    xxxlarge: "4rem",
    xxxxlarge: "6rem",
  },
}

export default theme
