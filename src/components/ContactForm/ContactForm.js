import React, {useEffect} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import  "./ContactForm.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-blue-600 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '46051784',
                    formId: '554264a3-bbc8-461c-b377-71997f1850bf',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <Container id="Contact">
            <Content>
            <FormContainer>
                <div tw="mx-auto max-w-4xl">
                    <div id="hubspotForm"></div>
                </div>
        </FormContainer>
      </Content>
    </Container>
   
    );

}

export default HubspotContactForm;

