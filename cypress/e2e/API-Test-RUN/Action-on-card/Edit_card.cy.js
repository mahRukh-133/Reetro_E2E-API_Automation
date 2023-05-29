describe('Edit comment card',()=>{

    it('check edit comment card api working fine',()=>{
 
        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/comment',

          headers:{
            "accept":"application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
          }, 

          body:{
            "_id":"646da6118c9d76bd67bd9bea",
          "userId":"6343b3115465136fe0c02f5d", 
          "companyId":"6343aae05465136fe0c01c59",
          "bId":"646d9ec58c9d76bd67bd9036",
          "text":"test32a","author":"mahrukh.loxvo13+jack@gmail.com",
          "username":"mahrukh.loxvo13+jack@gmail.com"}


        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success',true)
           

    })
})
})