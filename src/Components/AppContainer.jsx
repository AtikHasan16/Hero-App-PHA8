import React from "react";
import Container from "./Container";
import AppCard from "./AppCard";

const AppContainer = ({ appForHome }) => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-4 gap-10 py-20">
          {appForHome.map((data) => (
            <AppCard data={data}></AppCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AppContainer;
