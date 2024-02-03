import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 200px;
    width: 238px;
    min-width: 240px;
    max-width: 240px;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);

    .form-card-thumbnail{
        background-color: #5D55F7;
        width: 100%;
        height: 138px;
        cursor: pointer;
    }
    .form-card-details-container{
        border-top: 1px solid var(--cod-gray-border-divider, #E5E5E5);
        /* background: var(--Neutral-Base, #FFF); */
        display: flex;
        padding: var(--SM, 16px);
        padding-right: 8px;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;

        .form-card-details{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .form-card-title{
                color: var(--Cod-Gray-Primary-Text, #171717);
                font-family: 'Quicksand';
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 22px;
                letter-spacing: 0.5px;
            }
            .form-card-description{
                color: var(--Cod-Gray-Secondary-Text, #404040);
                font-family: 'Quicksand';
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: 18px; 
                letter-spacing: 0.5px;
            }
        }
        .form-card-ellipsis{
            position: relative;
            .ellipsis{
                border: 1px solid red;
                border: 1px solid white;
                padding: 8px;
            }
            .ellipsis:hover{
                /* padding: 8px; */
                cursor: pointer;
                border-radius: 8px;
                background:  #e7e7e7;
            }
        }
    }
`;