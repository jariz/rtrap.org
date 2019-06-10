import styled, { createGlobalStyle } from 'styled-components';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const wrapPageElement = ({ element }) => (
    <Fragment>
        <Helmet>
            <title>r/trap essentials list</title>

            <link
                href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700,900&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <GlobalStyling />
        
        <Layout>
            {element}
        </Layout>
    </Fragment>
);

const GlobalStyling = createGlobalStyle`
    body {
        background: #283364;
        font-family: "Fira Sans", sans-serif;
        color: #FFF;
        font-size: 14px;
    }
    
    * {
        box-sizing: border-box;
    }
    
    a {
        color: inherit;
    }
    
    h1 {
        font-family: "Fira Sans", sans-serif;
        font-weight: 900;
        font-size: 24px;
    }
    
    /**
     * @license
     * MyFonts Webfont Build ID 3771670, 2019-06-10T17:51:22-0400
     * 
     * The fonts listed in this notice are subject to the End User License
     * Agreement(s) entered into by the website owner. All other parties are 
     * explicitly restricted from using the Licensed Webfonts(s).
     * 
     * You may obtain a valid license at the URLs below.
     * 
     * Webfont: Miedinger-Bold by Canada Type
     * URL: https://www.myfonts.com/fonts/canadatype/miedinger/bold/
     * Copyright: Copyright &#x00A9; 2007 Canada Type. All rights reserved.
     * Licensed pageviews: 10,000
     * 
     * 
     * License: https://www.myfonts.com/viewlicense?type=web&buildid=3771670
     * 
     * © 2019 MyFonts Inc
    */
    
      
    @font-face {
      font-family: "Miedinger-Bold";
      src: url('${require('./src/fonts/398D16_0_0.eot')}');
      src: url('${require('./src/fonts/398D16_0_0.eot?#iefix')}') format('embedded-opentype'), 
      url('${require('./src/fonts/398D16_0_0.woff2')}') format('woff2'), 
      url('${require('./src/fonts/398D16_0_0.woff')}') format('woff'), 
      url('${require('./src/fonts/398D16_0_0.ttf')}') format('truetype');
    }
     
`;

const Layout = styled.main`
    max-width: 1260px;
    margin: 40px auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
`;