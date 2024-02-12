import styled from 'styled-components'

export const CopyLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 560px;
    .description{
        color: var(--Neutral-Secondary-Text, #666);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; 
        letter-spacing: 0.5px;
    }
    .copy-link{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px var(--LG, 16px);
        align-self: stretch;
        border-radius: var(--XS, 8px);
        border: 1px solid var(--general-border-divider, #F5F5F5);
        background: var(--Transparent-Transparent, rgba(255, 255, 255, 0.00));
        width: 100%;

        p{
            color: var(--Text-Primary-Text, #171717);
            font-family: 'Quicksand';
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 157.143% */
            letter-spacing: 0.5px;
        }
    }
`;

export const EmbedLinkContainer = styled(CopyLinkContainer)`
    max-width: 560px;
    .copy-link{
        align-items: flex-end;
        p{
            width: 419px;
        }
    }
`