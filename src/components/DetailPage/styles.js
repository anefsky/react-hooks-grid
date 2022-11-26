import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 800px;
    display: flex;
    justify-content: center;
 `;

 export const Contents = styled.div`
    display: flex;
    justify-content: space-between;
`;

 export const LeftPanel = styled.div`
    margin: 0 25px;
 `;

 export const RightPanel = styled.div`
    margin: 0 25px;
    position: relative;
 `;

 export const Entry = styled.div`
    margin-bottom: 25px;
    &:first-of-type {
        font-weight: bold;
    }
 `;
 
 export const LinkWrap = styled.div`
    position: absolute;
    bottom: 0;
    &>* {
        color: blue;
    }
 `;

