import {
  NotFoundMainBgContainer,
  NotFoundBodyContainer,
  NotFoundCard,
  NotFoundImage,
  OptionText,
  DescriptionText,
} from './styledComponent'
import Header from '../Header'

const Home = () => {
  console.log('Not Found')
  return (
    <NotFoundMainBgContainer>
      <Header />
      <NotFoundBodyContainer>
        <NotFoundCard>
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <OptionText>Lost Your Way?</OptionText>
          <DescriptionText>
            Sorry, we cannot find that page. You will find lots to explore on
            the home page
          </DescriptionText>
        </NotFoundCard>
      </NotFoundBodyContainer>
    </NotFoundMainBgContainer>
  )
}

export default Home
