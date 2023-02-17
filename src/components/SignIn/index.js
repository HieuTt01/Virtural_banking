import React from 'react'
import {
    FormWrap,
    FormButton,
    FormInput,
    FormLabel,
    Container,
    Text,
    FormH1,
    Form,
    FormContent,
    TextButton,
    Icon
}
    from "./SigninElements"

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                        <Icon >Dollar Sign In</Icon>
                            {/* <FormH1>
                                Please enter your account
                            </FormH1> */}
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormInput type="email" required placeholder="Enter your email" />
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormInput type="password" placeholder="Enter your password" required />
                            <FormButton type="submit">OK
                            </FormButton>
                            <TextButton>
                            <Text href="/">
                                Back
                            </Text>
                            <Text>
                                Forgot password?
                            </Text>
                            </TextButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>

    )
}

export default SignIn;
