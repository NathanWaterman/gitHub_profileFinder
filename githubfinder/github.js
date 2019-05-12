/*
*   Github Oauth Class
*/
class Github{
    constructor(){
        this.client_id = 'CLIENT_ID_OAUTH_KEY';
        this.client_secret = 'CLIENT_SECRET_OAUTH_KEY';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        //profile response
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //repo response
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //get profile json after await
        const profile = await profileResponse.json();
        //get repos json after await
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}