import styled from 'styled-components'
interface LinkProps {
    editMode: boolean;
}
export const LinkResponse = styled.input<LinkProps>`
    display: flex;
    height: var(--XXL, 40px);
    padding: 10px var(--SM, 16px);
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--cod-gray-border-divider, #E5E5E5);
    width: 100%;
    background:${props => props.editMode ? 'var(--cod-gray-border-divider, #E5E5E5)' : 'white'}; ;


    ::placeholder{
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

// SHORT TEXT 
interface ShortTextProps {
    editMode: boolean;
}
export const ShortTextResponse = styled.input<ShortTextProps>`
    display: flex;
    height: var(--XXL, 40px);
    padding: 10px var(--SM, 16px);
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background:${props => props.editMode ? 'var(--cod-gray-border-divider, #E5E5E5)' : 'white'}; ;

    ::placeholder{
        color: var(--Cod-Gray-Disabled-Text, #D4D4D4);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.5px;
    }
`;

// LONG TEXT
interface LongTextProps {
    editMode: boolean;
}

export const LongTextResponse = styled.textarea<LongTextProps>`
    display: flex;
    height: 140px;
    padding: 10px var(--SM, 16px);
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background:${props => props.editMode ? 'var(--cod-gray-border-divider, #E5E5E5)' : 'white'}; ;
    resize: none;

    ::placeholder{
        color: var(--Cod-Gray-Disabled-Text, #D4D4D4);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.5px;
    }
`;

// MULTICHOICE
export const MultiChoiceResponse = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-top: 4px;
`;


// RATING
export const RatingResponse = styled.div`
display: flex;
align-items: center;
gap: 8px;
    input{
        display: none;
    }
`;