import styled from "styled-components";

export const FormViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .question-card{
        display: flex;
        width: 595px;
        padding-top: var(--SM, 16px);
        flex-direction: column;
        align-items: flex-start;
        border-radius: var(--XS, 8px);
        border: 1px solid var(--general-border-divider, #F5F5F5);
        background: var(--General-Background, #FFF);
    }
    .question{
        display: flex;
        margin: var(--SM, 16px);
        padding-bottom: 16px;
        margin-bottom: 0;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        padding-top: 0px;
        border-bottom: 1px solid #F5F5F5;
        color: #000;
        font-family: 'Quicksand';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.5px;
    }
    .question-response{
        display: flex;
        padding: var(--SM, 16px);
        flex-direction: column;
        align-items: flex-start;
        gap: var(--XS, 8px);
        align-self: stretch;
        color: var(--Text-Secondary-Text, #404040);
        font-family: 'Quicksand';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        letter-spacing: 0.5px;
    }
`;