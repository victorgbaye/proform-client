import { Link } from "react-router-dom"
import SearchBar from "../components/patterns/SearchBar"
import { PageHeader } from "../assets/wrappers/PageHeader.styles"
import { Dropdown } from "../assets/wrappers/Dropdown.styles"
import { useEffect, useRef, useState } from "react"
import profile from '../assets/images/profile.svg'
import user from '../assets/images/user.svg'
import logout from '../assets/images/logout.svg'
import chevronLeft from '../assets/images/chevronLeft.svg'
import { AccountWrapper } from "../assets/wrappers/Account.styles"
import { Button, ExtendedButton } from "../components/elements/Button/Button.styles"
import { Input } from "../components/elements/Input/Input"
import Modal from "../components/patterns/Modal"
const Account = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null); 
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log('hey');
    };

    const handleChangePassword = () =>{
        setIsModalOpen(!isModalOpen)
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            // Attach event listener when the component mounts
            document.addEventListener('mousedown', handleClickOutside);
            
        }
        
        // Detach event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

  return (
    <div >
        <PageHeader>
            <p className="page-title">proform</p>
            <div className="page-header-right">
                <SearchBar/>
                <div style={{position:'relative'}}>
                    <img src={profile} onClick={toggleDropdown}/>
                    <Dropdown isopen={isOpen} ref={dropdownRef} style={{right:'0px', width:'190px'}}>
                        <Link to='/account' style={{textDecoration:'none', color:'inherit', width:'100%'}}>
                            <span>
                                <img src={user}/>
                                <p>Account</p>
                            </span>
                        </Link>
                        <span>
                            <img src={logout}/>
                            <p>Log out</p>
                        </span>
                    </Dropdown>
                </div>
            </div>
        </PageHeader>
        <AccountWrapper>
            <Link to='/workspace' style={{textDecoration:'none'}}>
                <nav>
                    <img src={chevronLeft}/>
                    <p>Forms</p>
                </nav>
            </Link>
            <header>
                <p>Account</p>
                <Button>Save</Button>
            </header>
            <main>
                <div className="change-avatar">
                    <img src={profile}/>
                    <ExtendedButton backgroundColor="#EDF1FF" color="#5D55F7" border="none">Change avatar</ExtendedButton>
                </div>
                <div className="input-container">
                    <Input label="Full name" placeholder="Johnson Doe"/>
                </div>
                <div className="input-container">
                    <Input label="Email" placeholder="Johnsondoe@gmail.com"/>
                </div>
                <div className="change-password">
                    <Input label="Password" placeholder="********"/>
                    <ExtendedButton backgroundColor="#EDF1FF" color="#5D55F7" border="none" onClick={handleChangePassword}>Change password</ExtendedButton>
                </div>
            </main>
        </AccountWrapper>
        {
            isModalOpen &&
            <Modal title="Change password" closeModal={()=>setIsModalOpen(false)} buttonLabel="Save" onConfirm={handleChangePassword} >
                <div className="new-password-modal-content">
                    <Input label="current password" placeholder="Enter password"/>
                    <Input label="new password" placeholder="Enter new password"/>
                </div>
            </Modal>
        }
    </div>
  )
}

export default Account