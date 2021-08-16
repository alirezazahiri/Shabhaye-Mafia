import React from 'react'
import Container from './common/Container'
import Card from './common/Card'
import styled from 'styled-components'

const GodVisionSenario = () => {
    const characters = JSON.parse(localStorage.getItem('characters'))
    const players = JSON.parse(localStorage.getItem('players'))
    const names = JSON.parse(localStorage.getItem('names'))
    const n_p = JSON.parse(localStorage.getItem('n_p'))

    return (  
        <Container>
            <Title>اتاق راوی</Title>
            {players.map(player => {
                const item = characters[names.indexOf(n_p[player])][n_p[player]]
                return <Card 
                key={player}
                p_name={player}
                title={item.title}
                description={item.description}
                type={item.type}
                icon={item.icon}
                have_status={true}
                />
            })}
        </Container>
    );
}

const Title = styled.h1`
  margin-top: 10px;
  margin-left: 30px;
  color: rgba(92, 82, 127, 2);
  font-family: "Lato", sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: 'Cairo', sans-serif;
`;
 
export default GodVisionSenario;