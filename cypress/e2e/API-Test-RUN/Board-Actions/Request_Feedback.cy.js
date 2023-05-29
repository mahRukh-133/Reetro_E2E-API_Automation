describe('Request Feedback',()=>{

    it('Api of request feedback',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/token/requestfeedback',

          headers:{
            "accept":"application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
          }, 

          body:{"user":{"_id":"6343b3115465136fe0c02f5d",
          "companyId":"6343aae05465136fe0c01c59",
          "projectIds":["6343aae05465136fe0c01c5b",
          "6371e00b1028018b5dee3a9d","63735d8080e9517ee9f8f599",
          "64071ef8aba228540fb4192a","64071ffdaba228540fb4207a",
          "6407200daba228540fb420c2","640f0a29e10cf56fe9c7e8ee",
          "6422958f1d02ee22d6a6c623","6360b343e09078253e34dd33",
          "64268393fb6ea21847c6a362","64520d444afb71504df55d3a",
          "64520db59cad9c52fde7dec4","64520de54afb71504df56016",
          "6452127b06709d8e262dad3f","64534916e6522ae66398d9ed",
          "64534c70f21772522634dccc","64534d8bf21772522634e021"
          ,"6461ca2a02f485439664fd99","6461ca554a63a39cc9de0dd8",
          "6461e0de4a63a39cc9de618e","6461e1074a63a39cc9de634b",
          "6461e1b102f4854396656020","6461e3557f93b6e72a59a1bf",
          "64630cede9404990d7c6af05","64630fe7e9404990d7c6b3a1",
          "6463104ba305ede09efe76c8","6463108ea305ede09efe7777",
          "64631420a305ede09efe7f85"],"lastCompany":"6343aae05465136fe0c01c59",
          "name":"JAck Jack","email":"mahrukh.loxvo13+jack@gmail.com","role":"product-owner",
          "avatar":"6343b3115465136fe0c02f5d-1684307256506.jpeg","isSuperAdmin":true,"isAdmin":false,"isGuest":false,"isAnonymous":false,"invitationPending":false,"invitedBy":"6343aae05465136fe0c01c5d","failedLoginAttempts":0,"isLocked":false,"is2faEnabled":false,"notes":"","createdAt":"2022-10-10T05:52:17.526Z","updatedAt":"2023-05-26T06:11:48.948Z","__v":0},"companyId":"6343aae05465136fe0c01c59","projectId":"64071ffdaba228540fb4207a","boardId":"646b417135105e84b961202f",
          "username":"mahrukh.loxvo13+jack@gmail.com"}

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})