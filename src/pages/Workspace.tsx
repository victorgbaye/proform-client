import { PageHeader } from "../assets/wrappers/PageHeader.styles"
import SearchBar from "../components/patterns/SearchBar"
import profile from '../assets/images/profile.svg'
import empty from '../assets/images/empty.svg'
import { Button } from "../components/elements/Button/Button.styles"
import newform from '../assets/images/newform.svg'
import FormCard from "../components/patterns/FormCard"
import { Link } from "react-router-dom"
import { useState } from "react"
const Workspace = () => {
    const [isEmpty] = useState(true)
  return (
    <>
    <PageHeader>
        <p className="page-title">proform</p>
        <div className="page-header-right">
            <SearchBar/>
            <img src={profile}/>
        </div>
    </PageHeader>
    <section style={{padding:'0 120px', marginTop:'60px'}}>
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