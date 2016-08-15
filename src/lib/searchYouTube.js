var searchYouTube = ({key, query, max = 10}, callback) => {
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search', 
  //   type: 'GET',
  //   items: {
  //     part: 'snippet',
  //     key: key,
  //     q: query,
  //     maxResults: max,
  //     type: 'video',
  //     videoEmbeddable: 'true'
  //   },
  //   success: items => {
  //     callback(items);
  //   },
  //   error: err => {
  //     error.errors.forEach((err) => 
  //     console.error(err);
  //   );
  //   }
  // });


  //using jquery.get
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    callback && callback(items);
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => 
      console.error(err)
    );
  });
};

window.searchYouTube = searchYouTube;
