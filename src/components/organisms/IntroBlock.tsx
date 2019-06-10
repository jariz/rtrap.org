import { graphql } from 'gatsby';
import { IntroBlockFragment } from '../../entities/operationResults';
import React, { FC } from 'react';
import styled from 'styled-components';
import CmsContent from '../molecules/CmsContent';
import logo from '../../images/logo.svg';

export const fragment = graphql`
    fragment IntroBlockFragment on Craft_Intro {
        contentField {
            content
        }
    }
`;

interface Props {
    data: IntroBlockFragment;
}

export const IntroBlock: FC<Props> = ({ data: { contentField } }) => (
    <Container>
        <img src={logo} alt="r/trap essentials list" />
        {contentField && contentField.content && (
            <CmsContent
                dangerouslySetInnerHTML={{
                    __html: contentField.content,
                }}
            />
        )}
    </Container>
);

const Container = styled.div`
    width: 33.33%;
    
`;
    