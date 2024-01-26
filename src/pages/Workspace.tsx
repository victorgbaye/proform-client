import { PageHeader } from "../assets/wrappers/PageHeader.styles"
import SearchBar from "../components/patterns/SearchBar"
import profile from '../assets/images/profile.svg'
const Workspace = () => {
  return (
    <>
    <PageHeader>
        <p className="page-title">Form Builder</p>
        <div className="page-header-right">
            <SearchBar/>
            <img src={profile}/>
        </div>
    </PageHeader>
    </>
  )
}

export default Workspace