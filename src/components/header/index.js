import React from 'react';

import { FaGithubAlt } from 'react-icons/fa';
import { Header } from './styles';

export default function Nav() {
  return (
    <Header>
      <nav>
        <FaGithubAlt color="#fff" size={25} />
        <span>Git Search</span>
      </nav>
    </Header>
  );
}
