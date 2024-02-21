import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    /* padding-bottom: 0; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Neutral-Base, #FFF);
    width: 595px;
    margin: 0 auto;
    border-bottom-right-radius:0px;
    border-bottom-left-radius:0px;



    .container{
        background: black;
    }
    
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
        margin-bottom: 16px;

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
    .question-footer{
        min-height: 40px;
        width: 100%;
        border-top: 1px solid var(--cod-gray-border-divider, #262626);
        background: var(--Cod-Gray-Surface, #171717);
    }
    &:hover {
        border-color: #5D55F7; /* For example, change the border color to red on hover */
    }
`;