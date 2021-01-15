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
    Icon
}
    from "./SigninElements"

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Dollar</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>
                                Sign in to your account
                            </FormH1>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormInput type="email" required />
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">OK
                            </FormButton>
                            <Text>
                                Forgot password?
                            </Text>

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>

    )
}

export default SignIn;
