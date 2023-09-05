import {Popup} from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {
  GlobalStyle,
  HeaderContainer,
  WebsiteLogo,
  NavContainer,
  HamburgerMenuIcon,
  PopupModal,
  HamburgerMenuOption,
  HamburgerIconContainer,
  CloseIconContainer,
  CloseIcon,
  MenuOptionsContainer,
  HomeIcon,
  OptionText,
  AboutIcon,
  StyledLink,
} from './styledComponent'

const Header = () => {
  console.log('Header')

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <NavContainer>
          <Link to="/">
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
            />
          </Link>
          <Popup
            className="pop-content"
            modal
            trigger={
              <HamburgerIconContainer>
                <button type="button" data-testid="hamburgerIconButton">
                  <HamburgerMenuIcon />
                </button>
              </HamburgerIconContainer>
            }
          >
            {close => (
              <PopupModal>
                <CloseIconContainer>
                  <button
                    type="button"
                    data-testid="closeButton"
                    onClick={close}
                  >
                    <CloseIcon />
                  </button>
                </CloseIconContainer>
                <MenuOptionsContainer>
                  <StyledLink to="/">
                    <HamburgerMenuOption>
                      <HomeIcon />
                      <OptionText>Home</OptionText>
                    </HamburgerMenuOption>
                  </StyledLink>
                  <StyledLink to="/about">
                    <HamburgerMenuOption>
                      <AboutIcon />
                      <OptionText>About</OptionText>
                    </HamburgerMenuOption>
                  </StyledLink>
                </MenuOptionsContainer>
              </PopupModal>
            )}
          </Popup>
        </NavContainer>
      </HeaderContainer>
    </>
  )
}
export default Header
