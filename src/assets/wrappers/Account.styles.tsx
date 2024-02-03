import styled from "styled-components";

export const AccountWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    place-content: center;
    place-items: center;
    margin: 0 auto;
    margin-top: 80px;
    gap: 20px;
    width: 595px;

    nav{
        display: flex;
        width: 595px;
        padding: var(--SM, 16px) var(--MD, 20px);
        align-items: center;
        gap: 8px;
        border-radius: var(--XS, 8px);
        border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        background: var(--Neutral-Base, #FFF);
        p{
            color: var(--Cod-Gray-Secondary-Text, #404040);
            font-family: 'Quicksand';
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px; /* 150% */
        }
    }
    header{
        display: flex;
        width: 595px;
        padding: var(--SM, 16px);
        /* flex-direction: column; */
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
        border-radius: var(--XS, 8px);
        border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        background: var(--Neutral-Base, #FFF);
        color: var(--Cod-Gray-Primary-Text, #171717);
        font-family: 'Quicksand';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 150% */
        letter-spacing: 0.15px;
    }
    main{
        display: flex;
        width: 100%;
        padding: var(--MD, 20px);
        flex-direction: column;
        align-items: flex-start;
        gap: var(--MD, 20px);
        border-radius: var(--XS, 8px);
        border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        background: var(--Neutral-Base, #FFF);

    }
    .input-container{
        width: 100%;
    }
    label{
        color: var(--Cod-Gray-Secondary-Text, #404040);
        font-family: 'Quicksand';
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 150% */
        letter-spacing: 0.5px;
    }
    input{
        border-radius: var(--XS, 8px);
        border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        background: var(--Neutral-Transparent, rgba(255, 255, 255, 0.00));
        width: 100%;
        display: flex;
        height: var(--XXL, 40px);
        padding: 10px var(--LG, 16px);
        align-items: center;
        gap: 16px;
        align-self: stretch;
        color: var(--Cod-Gray-Primary-Text, #171717);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.5px;
    }
    .change-password{
        display: flex;
        align-items: flex-end;
        gap: 10px;
        width: 100%;
        input{
            flex: 1;
        }

    }
`;