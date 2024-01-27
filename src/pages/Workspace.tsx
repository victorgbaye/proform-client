import { PageHeader } from "../assets/wrappers/PageHeader.styles"
import SearchBar from "../components/patterns/SearchBar"
import profile from '../assets/images/profile.svg'
import { Button } from "../components/elements/Button/Button.styles"
import newform from '../assets/images/newform.svg'
import FormCard from "../components/patterns/FormCard"
const Workspace = () => {
  return (
    <>
    <PageHeader>
        <p className="page-title">proform</p>
        <div className="page-header-right">
            <SearchBar/>
            <img src={profile}/>
        </div>
    </PageHeader>
    <section style={{padding:'0 120px'}}>
        <div style={{padding:'20px 0'}}>
            <Button>
                <img src={newform}/>
                <p>New form</p>
            </Button>
        </div>
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
    </section>
    </>
  )
}

export default Workspace