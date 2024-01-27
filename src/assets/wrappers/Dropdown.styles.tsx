import styled from "styled-components";

export const Dropdown = styled.div<{ isopen: boolean }>`
    display: ${({ isopen }) => (isopen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    width: 190px;
    height: auto;
    padding: var(--XS, 8px);
    align-items: flex-start;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Neutral-Base, #FFF);
    box-shadow: -2px 2px 12.1px 0px rgba(0, 0, 0, 0.05);

    span{
        display: flex;
        padding: var(--XS, 8px);
        align-items: center;
        gap: var(--XS, 8px);
        align-self: stretch;
        cursor: pointer;


        p{
            color: var(--Cod-Gray-Secondary-Text, #404040);
            font-family: Quicksand;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 157.143% */
            letter-spacing: 0.5px;
        }
    }
    span:hover{
        border-radius: var(--XXS, 4px);
        background: var(--Base-2-Highlight, #EDF1FF);
    }
`;