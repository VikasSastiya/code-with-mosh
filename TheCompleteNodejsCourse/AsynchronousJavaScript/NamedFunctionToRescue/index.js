
  console.log('Before')
  getUser(1,function(user) {
        console.log(1,user);
      getRepositories(user.gitHubUsername,(repos)=> {
        getCommits(repos,(commits) => {
     
        });
      });
  });
  console.log('After');

  
  function getUser(id,callback) {
      setTimeout(()=> {
          console.log('Reading a user data');
          callback({id:id,gitHubUsername:'mosh'});
      },2000);
  }
  function getRepositories(username,callback) {
      setTimeout(()=> {
         console.log('Calling github API');
          callback(['repo1','repo2','repo3']);
      },2000);
  }
  