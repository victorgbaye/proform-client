import styled from 'styled-components'

export const QuestionFooter = styled.section`
        display: flex;
        justify-content: space-between;
        min-height: 40px;
        width: 595px;
        border-top: 1px solid var(--cod-gray-border-divider, #262626);
        background: var(--Cod-Gray-Surface, #171717);
        margin: 0 auto;
        border-bottom-right-radius:8px;
        border-bottom-left-radius:8px;
        .drag{
            padding: 10px;
            border-right:1px solid #262626;
        }
        .footer-right{
            display:flex;
             align-content:center;

            }
            .items{
               padding: 10px;
                border-left: 1px solid #262626;
            }
            .required{
                display: flex;
                align-items: center;
                gap: 8px;
                p{
                    color: var(--Cod-Gray-Secondary-Text, #D4D4D4);
                    font-family: Quicksand;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 22px; /* 157.143% */
                    letter-spacing: 0.5px;
                }
            }
`;