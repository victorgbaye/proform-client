import { PageHeader } from "../assets/wrappers/PageHeader.styles"
import SearchBar from "../components/patterns/SearchBar"
import profile from '../assets/images/profile.svg'
import empty from '../assets/images/empty.svg'
import user from '../assets/images/user.svg'
import logout from '../assets/images/logout.svg'
import { Button } from "../components/elements/Button/Button.styles"
import newform from '../assets/images/newform.svg'
import FormCard from "../components/patterns/FormCard"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { Dropdown } from "../assets/wrappers/Dropdown.styles"
const Workspace = () => {
    const [isEmpty] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); 
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log('hey');
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
    <>
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
    <section style={{padding:'0 40px', marginTop:'60px'}}>
        <div style={{padding:'20px 0'}}>
            <Link to='/form' style={{textDecoration:'none'}}>
                <Button>
                    <img src={newform}/>
                    <p>New form</p>
                </Button>
            </Link>
        </div>
        {
           isEmpty ?
           <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'16px',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
               <img src={empty}/>
               <p style={{width:'200px', textAlign:'center'}}>Click <Link to='/form' style={{textDecoration:'none', color:'#5D55F7'}}>“New form”</Link> to start your creation journey</p>
           </div>:
            <section className="form-card-grid">
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
            </section>
        }
    </section>
    </>
  )
}

export default Workspace