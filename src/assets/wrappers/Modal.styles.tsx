import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
    min-width: 600px;

    .Modal{
    background: white;
    padding: 20px;
    border-radius: 12px;
    min-width: 400px;
    width: auto;
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);

  }
.ModalHeader{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

    h6{
        color: var(--Cod-Gray-Primary-Text, #171717);
        font-family: 'Quicksand';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 150% */
        letter-spacing: 0.15px;
    }

    img{
        padding: 8px;
        border-radius: 100%;
        background: #EFEFEF;
        cursor: pointer;
    }
}


.ModalBody{
    margin-bottom: 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}

.ModalFooter{
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}
`;