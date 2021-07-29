import styled from "styled-components"

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: center;
  margin-bottom: 20px;
  min-height: 100vh;

  img{
    width: 35%;
    margin-top: 30%;
  }
`

export const LoginForm = styled.form`
    margin-top: 9%;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
`