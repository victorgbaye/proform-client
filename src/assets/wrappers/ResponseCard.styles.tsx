import styled from 'styled-components'

export const ResponseCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--SM, 16px);
    max-width:1245px;
    width: 100%;
    margin: 0 auto;
    .response-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .card{
        padding: 10px 16px;
        width: 100%;
        border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        background: var(--Neutral-Transparent, rgba(255, 255, 255, 0.00));
        box-shadow: 0px 2px 4.8px 0px rgba(0, 0, 0, 0.05);
        border-radius: var(--XS, 8px);
        display: flex;
        align-items: center;
        justify-content: space-between;



    }
    .card:hover{
        cursor: pointer;
        border: 1px solid var(--Base-2-Primary, #5D55F7);
        background: var(--Base-2-Highlight, #EDF1FF);
        box-shadow: 0px 2px 4.8px 0px rgba(0, 0, 0, 0.05);
    }
    .date-and-time{
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--Cod-Gray-Secondary-Text, #404040);
        font-family: 'Quicksand';
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 150% */
        letter-spacing: 0.5px;
    }
    h6{
        color: var(--Cod-Gray-Primary-Text, #171717);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.5px;
    }
    .card .favourite-view{
        display: flex;
        align-items: flex-start;
        gap: 16px;
        height: var(--XL, 36px);
        justify-content: center;
        align-items: center;

        p{
            display: flex;
            height: var(--XL, 36px);
            justify-content: center;
            align-items: center;
            color: var(--Interactive-Primary, #5D55F7);
            font-family: 'Quicksand';
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
        }
    }
    /* .card:hover .favourite-view{
        display: flex;
    } */
`;