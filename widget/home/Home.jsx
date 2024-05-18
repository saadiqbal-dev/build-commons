const { Hero } = VM.require("new/widget/home.Hero") || {
  Hero: () => <></>,
};
const { Exosystem } = VM.require("new/widget/home.Exosystem") || {
  Exosystem: () => <></>,
};
const { Build } = VM.require("new/widget/home.Build") || {
  Build: () => <></>,
};
const { Cards } = VM.require("new/widget/home.Cards") || {
  Cards: () => <></>,
};
const { CTA } = VM.require("new/widget/home.CTA") || {
  CTA: () => <></>,
};
const { Footer } = VM.require("new/widget/home.Footer") || {
  Footer: () => <></>,
};
const poppinsCss = fetch(
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
).body;

const TopArch =
  "https://ipfs.near.social/ipfs/bafkreiftibkjr3teps4va7wd7chhlohhxa7fp3n35l5twu3o3olizvvelu";

const ScrollMask =
  "https://ipfs.near.social/ipfs/bafkreidi2yppuhqqv6b3acddqrddvldadibclg3cvcgbsqroj5lwmtgpvi";

const MiddleArc =
  "https://ipfs.near.social/ipfs/bafkreifs53iepsuuglzcffvzhgvcrcp2hlq4ustyhowlw55sssdp754hte";

const BuilderCircle =
  "https://ipfs.near.social/ipfs/bafybeif433aznu7345ynen2ixcyg7ygewbwkuc6y3bxstxbybpcw6hopla";

const Glow =
  "https://ipfs.near.social/ipfs/bafkreiez5qynxwerwizviolzcaxuq7qz7fgj4jt5x4onc2fyr5zb5tg6m4";
const GlowCenter =
  "https://ipfs.near.social/ipfs/bafybeid732rhjdehigkonncc5ojayufvfca4rrsyuwv6t3embwdsqmyrqy";
const Blocks =
  "https://ipfs.near.social/ipfs/bafkreidojwecmxrsaknl5n5qydr3y4hqckpgvhtr3wszuopeiqy45ccs5e";

const BigCircle =
  "https://ipfs.near.social/ipfs/bafkreiarw4c44ujtvvjq3rfw5oi5fdtq2vdvnctss7pzpti5riybun4ecu";

const SmallCircle =
  "https://ipfs.near.social/ipfs/bafkreigjute34d7gk366enhqubqkafy5e7dn6giqhpr5ibisvzjfk2ilrm";

const Eclipse =
  "https://ipfs.near.social/ipfs/bafkreihhrxl4haseaevansbeg3wcxn7jr2f2rfd3jzzdyqqlq3vinuy6wa";

const EclipseCenter =
  "https://ipfs.near.social/ipfs/bafkreifddwbqkpvocgkatructumeng3irjefne6fxvk3wuc5gbrg7zh34i";

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  min-height: 100vh;
  overflow-x: clip;

  button {
    z-index: 5;
  }

  ${poppinsCss}
`;

const ScrollMaskImg = styled.img`
  pointer-events: none;
  position: absolute;
  width: 100%;
  top: 180px;
  right: 0;
  z-index: 2;
`;

const TopArcImg = styled.img`
  pointer-events: none;
  position: absolute;
  width: 100%;
  opacity: 0.5;
  top: -80px;
`;

const MiddleArcImg = styled.img`
  pointer-events: none;
  position: absolute;
  width: 100%;
  top: 280px;
`;

const BuilderCircleImg = styled.img`
  pointer-events: none;
  position: absolute;
  width: 35%;
  bottom: 50px;
  right: 0;
  transform: translateY(50%);
`;

const GlowImg = styled.img`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
`;

const BlockImg = styled.img`
  position: absolute;
  pointer-events: none;
  width: 70%;
  bottom: -50%;
  right: 0;
  /* transform: translateY(-50%); */
  z-index: 0;
`;

const BigCircleImg = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0;
`;

const SmallCircleImg = styled.img`
  position: absolute;
  pointer-events: none;
  width: 30%;
  right: 0;
  bottom: -800px;
`;

const GlowCircle = styled.img`
  position: absolute;
  pointer-events: none;
  width: 50%;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
`;
const EclipseTop = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
  width: 30%;
  z-index: 1;
`;

const EclipseTopCenter = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0;
  bottom: 0;
  width: 8%;
`;

return (
  <HomeContainer>
    <TopArcImg src={TopArch} />
    <div className="position-relative">
      <ScrollMaskImg src={ScrollMask} />
      <Hero />
      <GlowImg src={Glow} />
    </div>
    <MiddleArcImg src={MiddleArc} />

    <div className="position-relative">
      <Exosystem />
      <BuilderCircleImg src={BuilderCircle} />
    </div>
    <div className="z-1 position-relative ">
      <BigCircleImg src={BigCircle} />
      <SmallCircleImg src={SmallCircle} />
      <Build />
      <BlockImg src={Blocks} />
    </div>
    <div className="position-relative">
      <GlowCircle src={GlowCenter} />
      <Cards />
      <EclipseTop src={Eclipse} />
      <EclipseTopCenter src={EclipseCenter} />
    </div>

    <CTA />
    <Footer />
  </HomeContainer>
);
