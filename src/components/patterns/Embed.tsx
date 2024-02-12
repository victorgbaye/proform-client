import { Button } from '../elements/Button/Button.styles'
import { EmbedLinkContainer } from '../../assets/wrappers/ShareLink.styles'

const Embed = () => {
  return (
    <EmbedLinkContainer>
    <p className="description">Copy and share link with respondents</p>
    <div className="copy-link">
        <p>
        {`<iframe width="560" height="315" src="https://www.youtube.com/embed/C5QFHp1oAws?si=Iv6z_5s6emyDoyKW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
        </p>
        <Button>Copy link</Button>
    </div>
</EmbedLinkContainer>
  )
}

export default Embed