import OpenSansRegularWoff2 from './OpenSans-Regular.woff2';
import OpenSansBoldWoff2 from './OpenSans-Bold.woff2';

const fontFaces = `
@font-face {
  font-family: Open Sans;
  src: 
  local('Open Sans Regular'),
  local('OpenSansRegular'),
  url(${OpenSansRegularWoff2}) format('woff2'),
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: Open Sans;
  src: 
  local('Open Sans Bold'),
  local('OpenSansBold'),
  url(${OpenSansBoldWoff2}) format('woff2'),
  font-weight: 700;
  font-style: normal;
}
`;

export default fontFaces;
