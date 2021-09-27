import React from "react";
import styles from "styled-components";

const Container = styles.div`
  font-size: 32px;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <span>hi</span>
      <h2>there</h2>
    </Container>
  );
};

export default Home;
