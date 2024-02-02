import styled from 'styled-components'

export const PageHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    max-height: 60px;
    min-height: 60px;
    padding: 0px var(--LG, 24px);
    border-bottom: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Neutral-Base, #FFF);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;