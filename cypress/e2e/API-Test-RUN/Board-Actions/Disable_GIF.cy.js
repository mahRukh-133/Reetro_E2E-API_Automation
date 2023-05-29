describe('Disable GIF',()=>{

    it('Disable GIF',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/board',

          headers:{
            "accept":"application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
          }, 

          body:{"_id":"646b417135105e84b961202f","companyId":"6343aae05465136fe0c01c59",
          "projectId":"64071ffdaba228540fb4207a","updatedBy":"6343b3115465136fe0c02f5d",
          "disableGif":true,"username":"mahrukh.loxvo13+jack@gmail.com"}

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})