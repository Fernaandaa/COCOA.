import Styled, { css } from 'styled-components'

const Banner  = Styled.div`
    background-image: url(${props => props.background});
    background-repeat : no-repeat;
    background-size: cover;
    display: flex;
`;
  



const Subtitle = Styled.h2`

    color : green;


`;

export {Banner,Subtitle}
