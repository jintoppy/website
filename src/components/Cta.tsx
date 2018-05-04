import React from 'react';
import { Button, Col, Icon, Row } from 'antd';

import styled from 'styled-components';
import MarketSubscriberForm from './MarketSubscriberForm';
import { MarketText } from '../Styles';
import { device } from '../breakpoints';
import EmailConstant from '../constants/email';

export const SectionWrapper = styled.section`
  background: #f0f0f0;

  @media ${device.mobileS} {
    padding: 0 10px 70px 10px;
  }

  @media ${device.tablet} {
    padding: 0 50px 70px 50px;
  }
`;

// encoded
const PartnersEmail = {
  body:
    'Please%20explain%20your%20company%20and%20your%20interest%20' +
    'in%20the%20protocol%20as%20well%20as%20any%20other%20helpful%20details.',
  email: 'partnerships@marketprotocol.io',
  subject: 'Partnership%20with%20MARKET%20Protocol'
};

const emailLink = `mailto:${EmailConstant.PARTNERS_EMAIL.email}?subject=${
  EmailConstant.PARTNERS_EMAIL.subject
}&body=${EmailConstant.PARTNERS_EMAIL.body}`;

const Cta = () => {
  return (
    <SectionWrapper id="subscribe">
      <Row type="flex" align="middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{ padding: '0 20px', marginTop: '70px' }}
        >
          <MarketSubscriberForm
            title="Join our Newsletter"
            hint="Enter your email here"
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{ padding: '0 20px', marginTop: '40px' }}
        >
          <MarketText style={{ fontSize: '24px', marginBottom: '30px' }}>
            Become a Partner
          </MarketText>
          <Button
            href={emailLink}
            type="primary"
            style={{ width: '100%', textAlign: 'left' }}
          >
            Email Us{' '}
            <Icon
              type="arrow-right"
              style={{ position: 'absolute', top: '35%', right: '15px' }}
            />
          </Button>
        </Col>
      </Row>
    </SectionWrapper>
  );
};
export default Cta;
