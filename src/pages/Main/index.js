import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositório" />

        <SubmmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmmitButton>
      </Form>
    </Container>
  );
}
