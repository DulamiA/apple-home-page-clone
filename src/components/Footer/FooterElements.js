import styled from "styled-components";

export const Box = styled.div`
  background: rgb(245, 245, 247);
  position: absolute;
  width: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 10px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`

export const FooterLink = styled.a`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.72);
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
`

export const Heading = styled.p`
  color: rgba(0, 0, 0, 0.88);
  font-size:11px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: bold;
`

export const Section = styled.p`
  color: rgba(0, 0, 0, 0.56);
  font-size:11px;
  margin-bottom: 10px;
  margin-top: 10px;
  letter-spacing: 0.5px;
`
export const Link = styled.a`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.72);
  text-decoration: underline;
  cursor: pointer;
`

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.16);
  width:100%;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const Container2 = styled.div`
  display: flex;
`

export const Container3 = styled.div`
  display: flex;
  margin-top:10px;
  margin-left: 60px;
`