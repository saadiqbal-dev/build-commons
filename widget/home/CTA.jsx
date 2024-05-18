const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>,
};

const {
  BuildDAO: BuildDAOSVG,
  BuildDAOBottom: BuildDAOSVGBottom,
  Hammer: HammerSVG,
} = VM.require("${config_account}/widget/icons") || {
  BuildDAOSVG: () => <></>,
  BuildDAOSVGBottom: () => <></>,
  HammerSVG: () => <></>,
};

const CTABG =
  "https://ipfs.near.social/ipfs/bafkreigoa47u7cn7mibiq2vfb7jrrjkvl3ho736x6r4rpo6ajcqmnsc64q";

const noise =
  "https://onedrive.live.com/embed?resid=DB95EB47BE356546%215827&authkey=%21AMNyTJWjGaSnGqQ&width=5760&height=3072";

const YellowGlow =
  "https://ipfs.near.social/ipfs/bafkreiblid6kdrasnlatfldvzooa67vvgfhx6h6tebs4zstyjgvwwe3d6y";

const MainContainer = styled.div`
  position: relative;
  border-radius: 24px;
  margin: 72px 48px;
  z-index: 2;
  overflow: clip;
  @media screen and (max-width: 500px) {
    padding: 2rem 48px;
  }
`;

const Container = styled.div`
  position: relative;
  border-radius: 24px;
  background: #9a5c22;
  overflow: clip;
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  overflow: clip;
  padding: 72px 48px;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 5px;
  }
`;

const Ellipse_1 = styled.div`
  position: absolute;
  width: 1236.657px;
  height: 1558.226px;
  flex-shrink: 0;
  border-radius: 1558.226px;
  background: #7539ca;
  filter: blur(232.74249267578125px);
  top: 65px;
  right: 282px;
`;
const Ellipse_2 = styled.div`
  position: absolute;
  width: 1601.53px;
  height: 2020.945px;
  flex-shrink: 0;
  border-radius: 2020.945px;
  background: #1b1717;
  filter: blur(216.57391357421875px);
  top: -530px;
  right: 408px;
`;
const SVGBuildDAO = styled.div`
  position: absolute;
  transform: scale(0.8);
  right: -20px;
  top: -20px;
`;
const BuildDAOBottom = styled.div`
  position: absolute;
  width: 452px;
  height: 248px;
  flex-shrink: 0;
  transform: scale(0.8);
  right: 70px;
  top: 180px;
`;
const Hammer = styled.div`
  position: absolute;
  top: 34px;
  right: 16px;
  transform: scale(0.8);
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    transform: scale(0.5);
    opacity: 0.5;
    top: -31px;
    right: -80px;
  }
`;
const BGImage = styled.img`
  position: absolute;
  width: 600px;
  height: 368px;
  flex-shrink: 0;

  top: 0px;
  right: 0px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    transform: scaleX(1.5);
    opacity: 0.5;
  }
`;

const Heading = styled.div`
  h2 {
    color: var(--FFFFFF, #fff);
    font-family: Poppins;
    font-size: 72px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 79.2px */
    letter-spacing: -2.88px;
    margin: 0;
    span {
      color: var(--ECA227, #eca227);
      font-family: Poppins;
      font-size: 72px;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: -2.88px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 327px;
    h2 {
      font-size: 48px;
      span {
        font-size: 48px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    max-width: 327px;
    h2 {
      font-size: 24px;
      letter-spacing: -1px;

      span {
        font-size: 24px;
        letter-spacing: -1px;
      }
    }
  }
`;
const CTADiv = styled.div`
  position: relative;
  padding-bottom: 24px;
  @media screen and (max-width: 768px) {
    max-width: 327px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column !important;
    padding-bottom: 0px;
  }
`;
const CtaText = styled.div`
  p {
    max-width: 452px;
    color: var(--E8E8E8, #e8e8e8);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: right;
    padding-top: 1rem;
    margin: 0;
  }

  img {
    width: 150px;
    opacity: 0;
    transition: all 500ms ease;
  }
  .button-container:hover {
    img {
      width: 500px;
      opacity: 0.3;
    }
  }
  @media screen and (max-width: 768px) {
    width: 190px;
    bottom: 31px;
    right: 5px;
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
    width: 190px;
    padding: 18px 0px;
    p {
      font-size: 12px;
    }
  }
`;
const NoiseBG = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.15;
  background: url(${noise}) lightgray 0% 0% / 12.67087310552597px
    12.67087310552597px repeat;
  mix-blend-mode: color-burn;
`;

const MobileText = styled.div`
  padding: 18px 0px;
  p {
    font-size: 12px;
  }
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

return (
  <MainContainer>
    <NoiseBG src={noise} />
    <Container>
      <Ellipse_1 />
      <Ellipse_2 />
      <SVGBuildDAO>
        <BuildDAOSVG />
      </SVGBuildDAO>
      <BuildDAOBottom>
        <BuildDAOSVGBottom />
      </BuildDAOBottom>
      <BGImage src={CTABG} />
      <Content>
        <Heading>
          <h2>
            Common Agreement <span>Access</span>
          </h2>
        </Heading>
        <CTADiv className="d-flex">
          <CtaText className="d-flex align-items-end gap-2 flex-grow-1">
            <p>
              Everyone is welcome to BuildCommons, whether contributing to the
              global commons, or receiving support to contribute locally, it all
              begins simply by signalling your interest:
            </p>
            <div className="form-group d-flex gap-3 flex-grow-1">
              <input
                className="form-control z-1"
                data-bs-theme="dark"
                placeholder="email@email.com"
                type="email"
              />
              <div className="button-container position-relative">
                <Button
                  className="flex-shrink-0 position-relative z-3 ms-5"
                  variant="primary"
                  style={{ width: "max-content" }}
                >
                  Confirm
                </Button>
                <HammerSVG
                  className={`position-absolute start-50 top-50 translate-middle`}
                />
                <img
                  className={`z-2 position-absolute start-50 top-50 translate-middle`}
                  src={YellowGlow}
                />
              </div>
            </div>
          </CtaText>
        </CTADiv>
        <MobileText>
          <p>We hope you join us to build better futures for everyone!</p>
        </MobileText>
      </Content>
    </Container>
  </MainContainer>
);
