//Init GitHub
const github = new GitHub;
//Init UI
const ui = new UI;

//keyup event
//search input
const searchUser = document.getElementById("searchUser");
//searchinput event listener
searchUser.addEventListener('keyup', (e) => {
  //Get the input text
  const userText = e.target.value;
  if(userText!== ''){
    //get http call to github    
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //Show an alert -> ui.js
        ui.showAlert('User not found', 'alert alert-danger');
        
      }else{
        //Show the profile -> ui.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
      console.log(data);
    })    
  }else {
    //clear profile
    ui.clearProfile();
  }
})