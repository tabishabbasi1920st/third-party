import {
  AboutMainBgContainer,
  AboutBodyContainer,
  AboutCard,
  AboutIcon,
  OptionText,
} from './styledComponent'
import Header from '../Header'

const Home = () => {
  console.log('Home')
  return (
    <AboutMainBgContainer>
      <Header />
      <AboutBodyContainer>
        <AboutIcon
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
      </AboutBodyContainer>
    </AboutMainBgContainer>
  )
}

export default Home
