import { Card, Column, Container, Section, Title } from "rbx";
import HeaderLogged from "../../../components/headerLogged";
import "../../../styles/users.scss";
import { UsersEditForm } from "../../../components/users/usersEditForm";

const UsersEditScreen = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <HeaderLogged />
      <Section size="small">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card className="usersEdit">
                <Card.Content>
                  <Title className="title">Atualizar informações</Title>
                  <UsersEditForm user={user} />
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
