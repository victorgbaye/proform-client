import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    padding-bottom: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Neutral-Base, #FFF);
    width: 595px;
    margin: 0 auto;


    .question{
        border-radius: var(--XS, 8px);
        border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        background: var(--Cod-Gray-Surface, #FAFAFA);
        width: 100%;
        display: flex;
        height: var(--XXL, 40px);
        padding: 10px var(--XS, 8px);
        align-items: center;
        gap: 10px;
        align-self: stretch;
    }
    .question::placeholder{
        color: var(--Cod-Gray-Disabled-Text, #D4D4D4);
        /* Body/4aims.type.body.xs */
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.5px;
    }
`;