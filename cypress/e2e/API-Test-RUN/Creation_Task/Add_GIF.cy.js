describe("Comment API", () => {
    it("should create a comment successfully", () => {
      cy.request(
        {
        method: 'PUT',
          url: 'https://www.reetro.app/api/comment',
      
        headers:{   
           "accept":"application/json",
           "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
        },

        body:
        {
            "companyId":"6343aae05465136fe0c01c59",
            "boardId":"646c65db9c7dccb3dc45d7de",
            "columnId":"column2",
            "text":"add",
            "author":"mahrukh.loxvo13+jack@gmail.com",
            "position":-1,"userId":"6343b3115465136fe0c02f5d",
            "isGif":true,
            "gif":{"type":"gif","id":"cQtlhD48EG0SY",
            "url":"https://giphy.com/gifs/manscape-fixing-testosterone-cQtlhD48EG0SY",
            "slug":"manscape-fixing-testosterone-cQtlhD48EG0SY","bitly_gif_url":"http://gph.is/1pGfoeq",
            "bitly_url":"http://gph.is/1pGfoeq",
            "embed_url":"https://giphy.com/embed/cQtlhD48EG0SY",
            "username":"",
            "source":"http://tnation.t-nation.com/free_online_forum/music_movies_girls_life/fixing_bad_bo_",
            "title":"Frustrated Clint Eastwood GIF",
            "rating":"g","content_url":"","source_tld":"tnation.t-nation.com",
            "source_post_url":"http://tnation.t-nation.com/free_online_forum/music_movies_girls_life/fixing_bad_bo_",
            "is_sticker":false,"import_datetime":"2014-10-01 18:25:20",
            "trending_datetime":"2019-05-31 15:49:08",
            "images":{"original":{"height":228,"width":240,
            "size":"789790",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.gif&ct=g","mp4_size":"1181119","mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
            "webp_size":"552870",
            "webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.webp&ct=g","frames":"47","hash":"62b2e4fd9653680d367ecd7ecf2ba619"},"downsized":{"height":228,"width":240,"size":"789790","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.gif&ct=g"},"downsized_large":{"height":228,"width":240,"size":"789790","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.gif&ct=g"},
            "downsized_medium":{"height":228,"width":240,"size":"789790",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.gif&ct=g"},
            "downsized_small":{"height":144,"width":151,"mp4_size":"33431",
            "mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy-downsized-small.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"},
            "downsized_still":{"height":228,"width":240,"size":"789790",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy_s.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"},"fixed_height":{"height":200,"width":211,"size":"790384","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/200.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200.gif&ct=g",
            "mp4_size":"176952",
            "mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/200.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200.mp4&ct=g","webp_size":"370532","webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/200.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200.webp&ct=g"},"fixed_height_downsampled":{"height":200,"width":211,"size":"110182","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/200_d.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200_d.gif&ct=g","webp_size":"62690","webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/200_d.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200_d.webp&ct=g"},
            "fixed_height_small":{"height":100,"width":106,"size":"235907",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/100.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100.gif&ct=g","mp4_size":"41787",
            "mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/100.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100.mp4&ct=g","webp_size":"112892","webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/100.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100.webp&ct=g"},"fixed_height_small_still":{"height":100,"width":106,"size":"5841","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/100_s.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100_s.gif&ct=g"},"fixed_height_still":{"height":200,"width":211,"size":"17813",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/200_s.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200_s.gif&ct=g"},
            "fixed_width":{"height":190,"width":200,
            "size":"716299",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/200w.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200w.gif&ct=g","mp4_size":"149212","mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/200w.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200w.mp4&ct=g","webp_size":"329906",
            "webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/200w.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200w.webp&ct=g"},"fixed_width_downsampled":{"height":190,"width":200,"size":"95767","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/200w_d.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
            "webp_size":"56746","webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/200w_d.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200w_d.webp&ct=g"},"fixed_width_small":{"height":95,"width":100,"size":"217223","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/100w.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100w.gif&ct=g",
            "mp4_size":"35378",
            "mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/100w.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100w.mp4&ct=g","webp_size":"102718",
            "webp":"https://media3.giphy.com/media/cQtlhD48EG0SY/100w.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100w.webp&ct=g"},"fixed_width_small_still":{"height":95,"width":100,"size":"5403","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/100w_s.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=100w_s.gif&ct=g"},
            "fixed_width_still":{"height":190,"width":200,"size":"16176",
            "url":"https://media3.giphy.com/media/cQtlhD48EG0SY/200w_s.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=200w_s.gif&ct=g"},"looping":{"mp4_size":"3632030","mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy-loop.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
            "width":null,"height":null},"original_still":{"height":228,"width":240,"size":"19012","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy_s.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"},"original_mp4":{"height":456,"width":480,"mp4_size":"1181119","mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy.mp4&ct=g"},"preview":{"height":176,"width":185,"mp4_size":"38768","mp4":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy-preview.mp4?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"},"preview_gif":{"height":66,"width":69,"size":"48906","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy-preview.gif?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"},"preview_webp":{"height":116,"width":122,"size":"29392","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/giphy-preview.webp?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"},"480w_still":{"height":456,"width":480,"size":"789790","url":"https://media3.giphy.com/media/cQtlhD48EG0SY/480w_s.jpg?cid=7bae464fbvqwo7swwfrihzg4mlqfud74frtst80ebkjr89br&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"}},"analytics_response_payload":"e=Z2lmX2lkPWNRdGxoRDQ4RUcwU1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03YmFlNDY0ZmJ2cXdvN3N3d2ZyaWh6ZzRtbHFmdWQ3NGZydHN0ODBlYmtqcjg5YnImY3Q9Zw","analytics":{"onload":{"url":"https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNRdGxoRDQ4RUcwU1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03YmFlNDY0ZmJ2cXdvN3N3d2ZyaWh6ZzRtbHFmdWQ3NGZydHN0ODBlYmtqcjg5YnImY3Q9Zw&action_type=SEEN"},"onclick":{"url":"https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNRdGxoRDQ4RUcwU1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03YmFlNDY0ZmJ2cXdvN3N3d2ZyaWh6ZzRtbHFmdWQ3NGZydHN0ODBlYmtqcjg5YnImY3Q9Zw&action_type=CLICK"},"onsent":{"url":"https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNRdGxoRDQ4RUcwU1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03YmFlNDY0ZmJ2cXdvN3N3d2ZyaWh6ZzRtbHFmdWQ3NGZydHN0ODBlYmtqcjg5YnImY3Q9Zw&action_type=SENT"}},"tags":[],"is_anonymous":false,"is_community":false,"is_featured":false,"is_hidden":false,"is_indexable":false,"is_preserve_size":false,"is_realtime":false,
            "is_removed":false,"is_dynamic":false},"username":"mahrukh.loxvo13+jack@gmail.com"
        }
    }
      ).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success',true)
       

     });
    });
  });