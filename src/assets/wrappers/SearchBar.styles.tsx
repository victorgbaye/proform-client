import styled from "styled-components";

export const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 16px;
    max-height: var(--XXL, 40px);
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Cod-Gray-Surface, #FAFAFA);
    padding: 10px var(--LG, 16px);
    width: 326px;

    input{
        border: none;
        outline: none;
        display: flex;
        flex: 1;
        /* font-family: Quicksand; */
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.5px;
        background: none;
    }
    input::placeholder{
        color: var(--Cod-Gray-Disabled-Text, #D4D4D4);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.5px;
    }
`;