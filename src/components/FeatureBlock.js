import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width:768px) {
      flex-flow: column;
      padding: 25px 0;
  }
`
const FeatureBlockWrap = styled.section`
background-color: var(--secondary-bg-color);
`
const Column = styled.div`
    width: 50%;
    padding: 55px 15px;
    text-align: left;

     img {
         max-width: 80%;
     }

    @media screen and (max-width:768px) {
        padding: 25px 0;
        width: 100%;

        &:first-child {
            text-align: center;
        }

    }
`
const Heading = styled.h2`
    font-size: 34px;
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: -1.2px;

    @media screen and (max-width:480px) {
      font-size: 28px;
    }
`
const Listing = styled.ul`
    list-style: none;
    padding:0;
    margin:0;
    color: var(--main-text-color);
    font-weight: normal;

    li {
        background: url('/images/check.png') no-repeat;
        background-size: 16px;
        padding-left: 28px;
    }
`

const FeatureBlock = () => {
    return (
        <FeatureBlockWrap>
            <div className="wrapper">
                <Banner>
                    <Column>
                        <img src="./images/quiz_display.png" alt="Test" />
                    </Column>
                    <Column>
                        <Heading>
                            Take test on different evaluations bank
                        </Heading>
                        <p>You can explore different categories and take test.</p>
                        <Listing>
                            <li>Logical Reasoning</li>
                            <li> Emotional Intelligence</li>
                            <li> Abstract Reasoning</li>
                            <li>Inductive  &amp; Reasoning</li>
                            <li>MBTI</li>
                            <li> DISC</li>
                            <li> Behavioural &amp; Test</li>
                            <li> Numerical &amp; Analysis </li>

                        </Listing>
                    </Column>
                </Banner>
            </div>
        </FeatureBlockWrap>
    )
}


export default FeatureBlock;