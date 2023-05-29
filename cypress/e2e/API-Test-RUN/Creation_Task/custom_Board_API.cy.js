

describe('Create Custom Board API Test', () => {
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc0OTc5MCwiZXhwIjoxNjg3MzQxNzkwfQ.pQEA_SUEvWW_8_l9ZzCBouJXbpevsvqGZrsY2i2fYxc'
        it.only('should return an success message', () => {
            cy.request(
                {
              method: 'PUT',
              url: 'https://www.reetro.app/api/board',
    
              headers:{
                "accept":"application/json",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
              }, 
    
                body:{"title":"test board template",
                "description":"description","type":"default","isMasked":true,
                "isPublic":true,"isAnonymous":false,"enableMultiVotes":false,
                "votesLimit":8,"doSaveTemplate":true,"templateTitle":"my template","projectId":"64071ffdaba228540fb4207a",
                "companyId":"6343aae05465136fe0c01c59","column1":{"title":"👌 Went well","isActive":true},
                "column2":{"title":"📈 To improve","isActive":true},"column3":{"title":"📍 Action items",
                "isActive":true},"column4":{"title":"","isActive":false},"column5":{"title":"","isActive":false},
                "column6":{"title":"","isActive":false},
                "createdBy":"6343b3115465136fe0c02f5d","username":"mahrukh.loxvo13+jack@gmail.com"}
                  
        }
        )
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success',true)
           
            
        })
      
    })
    })