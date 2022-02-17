import styled from 'styled-components'

export const P = styled.p` {/*modificar html*/ }
  color:hsl(345, 95%, 68%);
display: flex;
padding:80px;
margin: auto;
align-items: center;
text-align: center;
justify-content: center;

     
`
export const NUMEROS = styled.p` {/*modificar html*/ }
background:hsl(236, 21%, 26%);
font-size: 5em;
	margin:3.5rem;
border:3px solid hsl(236, 21%, 26%);
border-radius:5px;
padding-bottom: 10%;
width:100%;
height:90px;
cursor: pointer;

&:hover {
    background: hsl(236, 21%, 26%);;
}
       
`
export const ICON = styled.footer` {/*modificar html*/ }

font-size:40px;
cursor: pointer;
color:white;


&:hover {
    color:hsl(345, 95%, 68%);
    
}
       
`