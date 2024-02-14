import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body{
  background: #fff;
}


body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1rem;
}

body::-webkit-scrollbar-track {
   background-color: #fff;
}

body::-webkit-scrollbar-thumb {
 
  background: #000;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
  font-family: 'Montserrat', sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-weight:bold;
  font-size: clamp(25px, 1.4vw, 50px);

}

 h2 {
   color: ${({ theme }) => theme.colors.heading};

  
  }

h3 {
  font-size: clamp(18.8px, 1.4vw, 26px);
}
 
h4 {
  font-size: clamp(15.8px, 1.4vw, 23px);
}
h5 {
  font-size: clamp(12.8px, 1.4vw, 20px);
  font-weight:bold;
  
}
p{
  font-size: clamp(9px, 1.2vw, 25px);
  color:#fff;
}
span {
  font-size: clamp(10px, 1.2vw, 20px) ;
}



a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    max-height: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid gray;
    border-radius:5px;
    font-size:15px
}


::-webkit-input-placeholder{
  font-size: 15px !important;
 
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    border-radius:30px
    }
    
@media (max-width: ${({ theme }) => theme.media.tab}) {

  h2{
  }
  h3{
  }
  p{

  }
  }
  
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {

    }
    h2{
   
    }
    h3{

    }
    p{

    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }
`;
