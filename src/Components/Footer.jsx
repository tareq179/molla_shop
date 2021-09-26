import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Container = styled.div `
    display: flex;
`
const Logo = styled.h1 ``

const Desc = styled.p `
    margin: 20px 0px;
`

const SocialContainer = styled.div `
    display: flex;
`
const SocialIcon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Left = styled.div ``
const Center = styled.div ``
const Right = styled.div ``

const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MOLLA.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
      </Container>
    );
}

export default Footer
