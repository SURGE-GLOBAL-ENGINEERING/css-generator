export const getBookTitleCss = (publisherDetailFont: string, prefix: string, ) => {
  return `
    ${prefix}.title{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: 100vh;
    }
    
    ${prefix}.title-card{
      width: 100%;
      text-align: center;
      padding: 2rem 0.4rem;
    }

    ${prefix}.title-card h1{
      font-size: 2.5rem;
      text-align: inherit;
      padding: 0.4rem 0rem;
    }
    
    ${prefix}.title-card h2{
      font-size: 1.75rem;
      text-align: inherit;
      padding: 0.2rem 0rem;
    }
    
    ${prefix}.title-card h3{
      font-size: 1.5rem;
      text-align: inherit;
      padding: 0.2rem 0rem;
    }

    ${prefix}.publisher-details{
      width: 100%;
      padding: 2rem 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    ${prefix} .publisher-details{
      font-family: '${publisherDetailFont}';
    }
    
    ${prefix}.publisher-logo{
      width: auto;
      max-width: 80px !important;
      padding: 0.8rem 0rem;
    }

    ${prefix}.publisher-logo img{
      width: 80px;
      height: auto;
    }
  `
};