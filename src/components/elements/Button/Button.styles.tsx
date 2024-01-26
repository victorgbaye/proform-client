import styled from 'styled-components'

export const Button = styled.button`
    /* Style */
    background: var(--Base-2-Primary, #5D55F7);
    color: var(--Base-2-Highlight, #EDF1FF);
    padding: 0px var(--SM, 16px);
    border-radius: var(--XS, 8px);
    border: 1px solid #5D55F7;
    display: flex;
    height: 36px;
    justify-content: center;
    align-items: center;
    gap: var(--SM, 16px);
    cursor: pointer;
`;