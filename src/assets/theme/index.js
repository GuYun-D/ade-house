const theme = {
  color: {
    primaryColor: "#ff385c",
    secondDaryColor: "#00848a",
  },
  text: {
    primaryColor: "#484848",
    secondDaryColor: "#22222",
  },
  mixin: {
    boxShadow: `
    transition: all 200ms ease-in;
    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
  `,
  },
};

export default theme;
