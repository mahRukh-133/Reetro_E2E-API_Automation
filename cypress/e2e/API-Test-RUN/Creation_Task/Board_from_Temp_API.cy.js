

describe('Create Board From Template API Test', () => {
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

            body:{
              "title": "aassssxx",
              "column1": {
                  "isActive": true,
                  "title": "Went Well"
              },
              "column2": {
                  "isActive": true,
                  "title": "To Improve"
              },
              "column3": {
                  "isActive": true,
                  "title": "Action Items"
              },
              "column4": {
                  "isActive": false,
                  "title": ""
              },
              "column5": {
                  "isActive": false,
                  "title": ""
              },
              "column6": {
                  "isActive": false,
                  "title": ""
              },
              "type": "default",
              "iconId": 4,
              "companyId": "6343aae05465136fe0c01c59",
              "projectId": "64071ffdaba228540fb4207a",
              "createdBy": "6343b3115465136fe0c02f5d",
              "username": "mahrukh.loxvo13+jack@gmail.com"
          }
              
    }
    )
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success',true)
       
        
    })
  
})
})