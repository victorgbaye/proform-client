import { CopyLinkContainer } from "../../assets/wrappers/ShareLink.styles"
import { Button } from "../elements/Button/Button.styles"

const CopyLink = () => {
  return (
    <CopyLinkContainer>
        <p className="description">Copy and share link with respondents</p>
        <div className="copy-link">
            <p>www.link.com</p>
            <Button>Copy link</Button>
        </div>
    </CopyLinkContainer>
  )
}

export default CopyLink