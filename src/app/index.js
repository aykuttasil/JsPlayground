import style from '../assets/stylesheets/styles.scss';

const App = () => {
    console.log("Aykut Asil");
    console.log("Aykut Asillll");

    getGithubUser('aykuttasil').then(user => {
        console.log(user);
        console.log(user.login);
    }).catch(err => console.log(err));

};

async function getGithubUser(username) { // promise + await keyword usage allowed
    const response = await fetch(`https://api.github.com/users/${username}`); // Execution stops here until fetch promise is fulfilled
    return response.json();
}

export default App;
