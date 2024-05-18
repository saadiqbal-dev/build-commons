const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 32px;
padding: 48px;
`;
const Matric = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
opacity: 0.7;
h2 {
  font-family: Poppins;
font-size: 48px;
font-weight: 300;
line-height: 57.6px;
letter-spacing: -0.04em;
text-align: left;

color: rgba(255, 255, 255, 1);
margin: 0;

}
p {
  font-family: Poppins;
font-size: 89px;
font-weight: 600;
line-height: 106.8px;
letter-spacing: -0.04em;
text-align: left;
color: rgba(255, 255, 255, 1);
margin: 0;
}

`;
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
justify-content: center;
h3 {
  font-family: Poppins;
font-size: 72px;
font-weight: 500;
line-height: 86.4px;
letter-spacing: -0.04em;
text-align: left;
color: #fff;
margin: 0;
span {

  color: #ECA227;

}
}

p {
  font-family: Poppins;
font-size: 42px;
font-weight: 400;
line-height: 58.8px;
text-align: left;
margin: 0;
color: var(--A0A0A0, rgba(160, 160, 160, 1));

}
`;
const Exosystem = () => {
  return (
<Container>
<Matric>
  <h2>Ecosystems</h2>
  <p>+15</p>
</Matric>
<Content>
  <h3>Welcome to <span>the exosystem</span></h3>
  <p>A Resource Innovation initiative focused on welcoming future-ready organizations into programs and protocols that accellerate growth internally and globally</p>
</Content>
<Matric style={{
  alignItems: "flex-end",
  marginTop: "50px",
  marginRight: "100px"
}}>
  <h2>Builders</h2>
  <p>+70</p>
</Matric>
</Container>    
    );
    
};

return {Exosystem};
