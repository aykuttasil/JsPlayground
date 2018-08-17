import style from '../assets/stylesheets/styles.scss';
import ThreeDot from './array_threedot';
import Sum from './sum';

const App = () => {
    console.log("Aykut Asil");
    console.log("Aykut Asillll");

    getGithubUser('aykuttasil').then(user => {
        console.log(user);
        console.log(user.login);
    }).catch(err => console.log(err));

    // person nesnesinde ki propertyleri değişken olarak yakalayabiliriz.
    const {
        firstName: first,
        age,
        city = "Paris"
    } = person;
    console.log(age);

    // person nesnesi const olarak tanımlanmıştır. nesnenin kendisine yeni değer
    // atanamaz fakar property'lerine yeni değer ataması yapılabilir
    person.firstName = "Aykut Kerem";
    console.log(person); // > Aykut Kerem

    // array içerisinde ki değerleri map'liyoruz
    const numbers = [0, 1, 2, 3, 4, 5, 6];
    const doubledNumbers = numbers.map(function (n) {
        return n * 2;
    });
    console.log(doubledNumbers); // [0, 2, 4, 6, 8, 10, 12]




};

const person = {
    firstName: "Aykut",
    lastName: "Asil",
    age: 26,
    sex: "M"
}

async function getGithubUser(username) { // promise + await keyword usage allowed
    const response = await fetch(`https://api.github.com/users/${username}`); // Execution stops here until fetch promise is fulfilled
    return response.json();
}

export default App;
