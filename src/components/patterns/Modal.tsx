import x from '../../assets/images/x.svg'
import { Wrapper } from '../../assets/wrappers/Modal.styles';
import {  ExtendedButton } from '../elements/Button/Button.styles';

interface ModalTypes{
    prompt?:string;
    title:string;
    closeModal: ()=> void;
    children: React.ReactNode;
    onConfirm: ()=> void;
    buttonLabel: string;
    backgroundColor?: string;

}

const Modal: React.FC<ModalTypes> = ({prompt, title, closeModal, buttonLabel, onConfirm, children, backgroundColor}) => {
  return (
    <Wrapper>
    <div className='Modal'>
        <header className='ModalHeader'>
            <h6>{title}</h6>
            <img src={x} alt="X Icon"  onClick={closeModal}/>
        </header>
        <div className='ModalBody'>
          <p>{prompt}</p>
          
        </div>
        <div className='ModalBody'>
        {children}
        </div>
        {

        <div className='ModalFooter'>
           <ExtendedButton onClick={onConfirm} backgroundColor={backgroundColor}>{buttonLabel}</ExtendedButton>
           <ExtendedButton onClick={closeModal} color='#222' border='none' backgroundColor='#FAFAFA'>Cancel</ExtendedButton>

         
        </div>
        }
    </div>
</Wrapper>
  )
}

export default Modal