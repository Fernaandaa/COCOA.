import Styled, { css } from 'styled-components'

const Banner  = Styled.div`
    background-image: url(${props => props.background});
    background-repeat : no-repeat;
    background-size: cover;
    height: 100%;
`;
  



const Subtitle = Styled.h2`

    color : green;


`;

export {Banner,Subtitle}
