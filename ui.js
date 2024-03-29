class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }
  //display profile in the UI
  showProfile(user){
    console.log(user);
    //create a template literal and insert it into the ui
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.events_url}" class="btn btn-primary btn-block mb-4">Viw Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.updated_at}</li>
            
            </ul>
          </div>
      
        </div>
      
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  //show Repos (array)
  showRepos(repos){
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.deployments_url}" target="blank"> ${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Followers: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    //Output the repositories
    document.getElementById('repos').innerHTML = output;

  }


  //show Alert message
  showAlert(message, className){
    //clear any reamining alerts if any available
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get a parent to insert the div
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);

    //Timeout after 3 secs
    setTimeout(() =>{
      this.clearAlert();
    }, 15000);
  }
  //Clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }

  }

  //clear Profile
  clearProfile(){
    this.profile.innerHTML = '';
  }
}