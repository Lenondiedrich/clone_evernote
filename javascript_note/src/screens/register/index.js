import { Card, Column, Container, Section, Title } from "rbx";
import LogoImage from "../../assets/images/logo.png";
import RegisterForm from "../../components/auth/registerForm";
import Header from "../../components/header";
import "../../styles/auth.scss";

const RegisterScreen = () => {
  return (
    <>
      <Header />
      <Section size="medium" className="auth">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card>
                <Card.Content>
                  <Section>
                    <Column.Group centered>
                      <Column size={12}>
                        <img src={LogoImage} alt="Logo" />
                      </Column>
                    </Column.Group>

                    <Column.Group>
                      <Column size={12}>
                        <Title
                          size={6}
                          className="has-text-grey has-text-centered"
                        >
                          Your notes on the cloud
                        </Title>
                      </Column>
                    </Column.Group>
                  </Section>
                  <RegisterForm />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  );
};

export default RegisterScreen;
