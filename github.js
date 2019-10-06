class GitHub {
  constructor() {
    this.client_id = 'c295ee1f2100b6ab62e7';
    this.client_secret = 'df504cefb1beccbbbff8a7cafb879e0b13ea023a';
    this.repos_count = 3;
    this.repos_sort = 'created: asc';
  }
  //get a user method
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    //return an object
    return {
      profile,
      repos 
      //profile: profile
      //repos: repos
    }
  }

}