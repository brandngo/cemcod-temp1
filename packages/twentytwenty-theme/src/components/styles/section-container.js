import { styled } from "frontity";

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 2rem);
  max-width: ${getMaxWidth};

  @media (min-width: 1000px) {
    width: calc(100% - 4rem);
  }
`;

export default SectionContainer;
