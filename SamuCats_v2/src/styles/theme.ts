import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        color: "gray.100",
        bgColor: "#111111",
      },
      body: {
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "6px",
          background: "rgba(255,0,0,0.1)",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#fe7700",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#fe7000",
        },
      },
    },
  },
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
  colors: {
    black: {
      500: "#111111",
    },
    gray: {
      100: "#F2F2F2",
      200: "#C9C9C9",
      300: "#999999",
      400: "#75747E",
      500: "#1c1c1c",
      600: "#2b2b2b",
      700: "#24262F",
    },
    orange: {
      300: "#fe7000",
      400: "#F58401",
      500: "#C76607",
      600: "#b75c14",
    },
    orangeGradient: {
      start: "#F08200",
      end: "#B75C09",
    },
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: "1500 !important",
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1700px",
    "2xl": "1900px",
  },
  components: {
    Select: {
      variants: {
        filled: {
          field: {
            _focus: {
              borderColor: "orange", // Altere para a cor desejada
            },
          },
        },
      },
    },
    Button: {
      baseStyle: {
        color: "gray.100",
        fontWeight: "medium",
        borderRadius: 3,
        transition: "0.3s",
        _hover: {
          filter: "brightness(0.8)",
        },
        _disabled: {
          pointerEvents: "none",
        },
      },
      sizes: {
        sm: {
          fontSize: "xs",
          height: "24px",
          minHeight: 6,
          px: 3,
        },
        md: {
          fontSize: "sm",
          height: "auto",
          minHeight: 9,
          px: 5,
        },
        lg: {
          fontSize: "md",
          height: "auto",
          minHeight: 12,
          px: 10,
        },
      },
      variants: {
        primary: {
          bgGradient: "linear(to-r, orange, red)",
          boxShadow: "-1px 3px 2px rgba(0, 0, 0, 0.19)",
          _active: {
            bgGradient: "linear(to-b, #B75C09, #F08200)",
            boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.24)",
          },
          _hover: {
            bgGadient: "linear(to-b, #B75C09, #F08200)",
          },
        },
        green: {
          button: {
            height: "23px",
            bg: "#1B931B",
            transition: "0.3s",
            _hover: {
              filter: "brightness(0.8)",
            },
            _active: {
              filter: "brightness(0.8)",
            },
          },
        },
        secondary: {
          bg: "gray.400",
          color: "white",
          _active: {
            bgGradient: "linear(to-b, #4B495A, #75747E)",
            boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.24)",
          },
          _disabled: {
            opacity: 0.8,
            cursor: "not-allowed",
          },
        },
        tertiary: {
          color: "#1c1c1c",
          bgColor: "#ffff",
          _active: {
            bgGradient: "linear(to-b, #7A7B7F, #C9C9C9)",
            boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.24)",
          },
        },
        blackFriday: {
          bgColor: "#111111",
          color: "white",
        },
        christmas: {
          bgColor: "#ffaa00",
          color: "#111111",
        },
        blackFridayInverted: {
          bgColor: "white",
          color: "#111111",
        },
        neutral: {
          bgColor: "gray.500",
        },
        ghost: {
          _hover: {
            bgColor: "gray.500",
          },
          _active: {
            bgColor: "gray.500",
            filter: "brightness(0.8)",
          },
        },
      },
    },
    Popover: {
      baseStyle: {
        content: {
          bgColor: "#2b2b2b",
          // Adicione outras estilizações aqui
        },
      },
    },
    Menu: {
      baseStyle: {
        button: {
          transition: "0.3s",
          _hover: {
            filter: "brightness(0.8)",
          },
          _active: {
            filter: "brightness(0.8)",
          },
        },
        list: {
          fontSize: "xs",
          bgColor: "#2b2b2b",
          border: "none",
          borderRadius: "base",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
        },
        item: {
          color: "gray.100",
          fontWeight: "medium",
          bgColor: "rgba(255, 255, 255, 0)",
          _hover: {
            bgColor: "rgba(255, 255, 255, 0.06)",
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            color: "gray.100",
            fontSize: "sm",
            bgColor: "gray.700",
            borderColor: "gray.600",
            px: 2.5,
            "::placeholder": {
              color: "gray.300",
            },
            _hover: {
              borderColor: "#F08200",
            },
          },
        },
        filled: {
          field: {
            color: "#111111",
            bgColor: "white",
            "::placeholder": {
              color: "black",
            },
            _hover: {
              bgColor: "white",
            },
            _focus: {
              bgColor: "white",
            },
          },
        },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          bgColor: "gray.100",
          padding: 0,
          height: 5,
          width: 8,
          boxShadow: "-1px 3px 2px rgba(0, 0, 0, 0.19)",
          _checked: {
            bgGradient: "linear(to-b, #F08200, #B75C09)",
          },
        },
        thumb: {
          bgGradient: "linear(to-b, #F08200, #B75C09)",
          boxSize: 5,
          _checked: {
            bgGradient: "none",
            bgColor: "gray.100",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          color: "gray.100",
          bgColor: "gray.600",
          borderRadius: "10px",
        },
      },
    },
    Modal: {
      parts: ["header"],
      baseStyle: {
        header: {
          lineHeight: "1.6rem",
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "gray.600",
        borderBottomWidth: "2px",
        rounded: "5rem",
      },
    },
    Tabs: {
      baseStyle: {
        tablist: {
          mb: 5,
        },
        tabpanel: {
          padding: 0,
        },
      },
    },
    Progress: {
      variants: {
        primary: {
          track: {
            bgColor: "gray.700",
          },
          filledTrack: {
            bgColor: "orange.400",
          },
        },
        secondary: {
          track: {
            bgColor: "#54555B",
            borderRadius: "32px",
          },
          filledTrack: {
            background: "linear-gradient(180deg, #F08200 0%, #B75C09 100%)",
            borderRadius: "32px 4px 4px 32px",
          },
        },
        terceiro: {
          track: {
            bgColor: "#54555B",
            borderRadius: "32px",
          },
          filledTrack: {
            background:
              "linear-gradient(to right, transparent 0%, #F08200 50%, transparent 100%)",
          },
        },
      },
    },
    Tag: {
      variants: {
        tertiary: {
          container: {
            fontSize: "xs",
            borderRadius: 3,
            color: "#54555B",
            bgGradient: "linear(to-b, #C9C9C9, #7A7B7F)",
            boxShadow: "-1px 3px 2px rgba(0, 0, 0, 0.19)",
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "gray.600",
          color: "gray.100",
        },
      },
      sizes: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
      variants: {
        "side-menu": {
          dialog: {

            maxW: "25%",
            h: "100%",
            top: "0",
            left: "0",
            // py: "10px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "6px",
              background: "gray.600",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#fe7700",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#fe7000",
            },
          },
        },
      },
    },
  },
});
("");


export const lightTheme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        color: "gray.800",
        bgColor: "#F2F2F2",
      },
      body: {
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "6px",
          background: "rgba(255,0,0,0.1)",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#fe7700",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#fe7000",
        },
      },
    },
  },
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
  colors: {
    black: {
      500: "#111111",
    },
    gray: {
      100: "#1c1c1c",
      200: "#2b2b2b",
      300: "#24262F",
      400: "#999999",
      500: "#C9C9C9",
      600: "#F2F2F2",
      700: "#FFFFFF",
    },
    orange: {
      300: "#fe7000",
      400: "#F58401",
      500: "#C76607",
      600: "#b75c14",
    },
    orangeGradient: {
      start: "#F08200",
      end: "#B75C09",
    },
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: "1500 !important",
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1700px",
    "2xl": "1900px",
  },
  components: {
    PopoverContent: {
      baseStyle: {
        content: {
          bgColor: "#f2f2f2f2"
        }
      }
    },

Box: {
      variants: {
        shimmer: {
          bgGradient: "linear(to-r, #000103 45%, #1e2631 55%, #000103)",
          bgSize: "200% 100%",
          color: "slate.400",
          border: "1px solid",
          borderColor: "slate.800",
          borderRadius: "md",
          fontWeight: "medium",
          px: "6",
          _focus: {
            outline: "none",
            ring: "2",
            ringColor: "slate.400",
            ringOffset: "2",
            ringOffsetColor: "slate.50",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        color: "gray.100",
        fontWeight: "medium",
        borderRadius: 3,
        transition: "0.3s",
        _hover: {
          filter: "brightness(0.8)",
        },
        _disabled: {
          pointerEvents: "none",
        },
      },
      sizes: {
        sm: {
          fontSize: "xs",
          height: "24px",
          minHeight: 6,
          px: 3,
        },
        md: {
          fontSize: "sm",
          height: "auto",
          minHeight: 9,
          px: 5,
        },
        lg: {
          fontSize: "md",
          height: "auto",
          minHeight: 12,
          px: 10,
        },
      },

      variants: {



        primary: {
          bgGradient: "linear(to-r, orange, red)",
          boxShadow: "-1px 3px 2px rgba(0, 0, 0, 0.19)",
          _active: {
            bgGradient: "linear(to-b, #B75C09, #F08200)",
            boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.24)",
          },
          _hover: {
            bgGadient: "linear(to-b, #B75C09, #F08200)",
          },
        },
        secondary: {
          bg: "gray.600",
          color: "black",
        },
        tertiary: {
          color: "white",
          bgColor: "black",
        },
        blackFriday: {
          bgColor: "white",
          color: "black",
        },
        christmas: {
          bgColor: "#ffaa00",
          color: "black",
        },
        blackFridayInverted: {
          bgColor: "black",
          color: "white",
        },
        neutral: {
          bgColor: "gray.500",
        },
        ghost: {
          _hover: {
            //bgColor: "gray.500",
          },
          _active: {
            //bgColor: "gray.500",
            filter: "brightness(0.8)",
          },
        },

      },
    },
    Menu: {
      baseStyle: {
        list: {
          fontSize: "xs",
          bgColor: "gray.200",
          border: "none",
          borderRadius: "base",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
        },
        item: {
          color: "gray.800",
          fontWeight: "medium",
          bgColor: "rgba(255, 255, 255, 0)",
          _hover: {
            bgColor: "rgba(255, 255, 255, 0.06)",
          },
        },
      },
    },
    Link: {
      variants: {
        hover: {
          _hover: {
            bgGradient: "linear(to-r, orange, red)",
            bgClip: "text"
          }
        }
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            color: "gray.100",
            fontSize: "sm",
            bgColor: "gray.600",
            borderColor: "gray.400",
            px: 2.5,
            "::placeholder": {
              color: "gray.300",
            },
            _hover: {
              borderColor: "#F08200",
            },
          },
        },
        filled: {
          field: {
            color: "gray.800",
            bgColor: "gray.100",
            "::placeholder": {
              color: "black",
            },
            _hover: {
              bgColor: "gray.200",
            },
            _focus: {
              bgColor: "gray.200",
            },
          },
        },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          bgColor: "gray.300",
          padding: 0,
          height: 5,
          width: 8,
          boxShadow: "-1px 3px 2px rgba(0, 0, 0, 0.19)",
          _checked: {
            bgGradient: "linear(to-b, #F08200, #B75C09)",
          },
        },
        thumb: {
          bgGradient: "linear(to-b, #F08200, #B75C09)",
          boxSize: 5,
          _checked: {
            bgGradient: "none",
            bgColor: "gray.800",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          color: "gray.800",
          bgColor: "gray.100",
          borderRadius: "10px",

        },
      },
    },
    Modal: {
      parts: ["header"],
      baseStyle: {
        header: {
          color: "gray.800",
          lineHeight: "1.6rem",
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "gray.400",
        borderBottomWidth: "2px",
        rounded: "5rem",
      },
    },
    Tabs: {
      baseStyle: {
        tablist: {
          color: "gray.800",
          mb: 5,
        },
        tabpanel: {
          padding: 0,
        }
      },
    },
    Progress: {
      variants: {
        primary: {
          track: {
            bgColor: "gray.300",
          },
          filledTrack: {
            bgColor: "orange.400",
          },
        },
        secondary: {
          track: {
            bgColor: "gray.300",
            borderRadius: "32px",
          },
          filledTrack: {
            background: "linear-gradient(180deg, #F08200 0%, #B75C09 100%)",
            borderRadius: "32px 4px 4px 32px",
          },
        },
        terceiro: {
          track: {
            bgColor: "gray.300",
            borderRadius: "32px",
          },
          filledTrack: {
            background:
              "linear-gradient(to right, transparent 0%, #F08200 50%, transparent 100%)",
          },
        },
      },
    },
    Tag: {
      variants: {
        tertiary: {
          container: {
            fontSize: "xs",
            borderRadius: 3,
            color: "gray.800",
            bgGradient: "linear(to-b, #C9C9C9, #7A7B7F)",
            boxShadow: "-1px 3px 2px rgba(0, 0, 0, 0.19)",
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "gray.100",
          color: "gray.800",
          maxW: "25%",
          h: "100%",
          top: "0",
          left: "0",
          // py: "10px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "6px",
            background: "gray.600",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#fe7700",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#fe7000",
          },
        },
      },
    },
  },
});



