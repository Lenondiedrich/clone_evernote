import HeaderLogged from "../../../components/headerLogged";
import { Card, Column, Container, Field, Section, Title } from "rbx";
import "../../../styles/users.scss";

const UsersEditScreen = () => {
  return (
    <>
      <HeaderLogged />
      <Section size="large">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card className="usersEdit">
                <Card.Content>
                  <Title>Atualizar informações</Title>
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  );
};

export default UsersEditScreen;
