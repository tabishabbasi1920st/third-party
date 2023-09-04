import {
  HomeMainBgContainer,
  HomeBodyContainer,
  HomeIcon,
} from './styledComponent'
import Header from '../Header'

const Home = () => {
  console.log('Home')
  return (
    <HomeMainBgContainer>
      <Header />
      <HomeBodyContainer>
        <HomeIcon
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
      </HomeBodyContainer>
    </HomeMainBgContainer>
  )
}

export default Home
