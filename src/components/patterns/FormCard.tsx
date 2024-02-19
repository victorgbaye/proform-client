import { Wrapper } from "../../assets/wrappers/FormCard.styles"
import ellipsis from '../../assets/images/ellipsis.svg'
import { Dropdown } from "../../assets/wrappers/Dropdown.styles"
import { useState, useEffect, useRef } from 'react';
import eye from '../../assets/images/eye.svg'
// import chart from '../../assets/images/chart.svg'
import clone from '../../assets/images/clone.svg'
import file from '../../assets/images/file.svg'
import share from '../../assets/images/share.svg'
import trash from '../../assets/images/trash.svg'
import users from '../../assets/images/users.svg'

const FormCard = () => {
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
    <Wrapper>
        <div className="form-card-thumbnail">

        </div>
        <div className="form-card-details-container">
            <div className="form-card-details">
                <p className="form-card-title">Document Name</p>
                <p className="form-card-description">Document long description</p>
            </div>
            <div className="form-card-ellipsis">
                <img src={ellipsis} onClick={toggleDropdown} className="ellipsis"/>
                <Dropdown isopen={isOpen} ref={dropdownRef} style={{right:0}}>
                    <span>
                        <img src={eye}/>
                        <p>Open</p>
                    </span>
                    <span>
                        <img src={file}/>
                        <p>Preview</p>
                    </span>
                    <span>
                        <img src={share}/>
                        <p>Share</p>
                    </span>
                    {/* <span>
                        <img src={chart}/>
                        <p>Insight</p>
                    </span> */}
                    <span>
                        <img src={users}/>
                        <p>Recipients</p>
                    </span>
                    <span>
                        <img src={clone}/>
                        <p>Duplicate</p>
                    </span>
                    <span>
                        <img src={trash}/>
                        <p>Delete</p>
                    </span>
                </Dropdown>
            </div>
        </div>
    </Wrapper>
  )
}

export default FormCard