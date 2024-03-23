export default function CreateNewQuiz({prop}){
    console.log(prop);
    let list = [];

    for (let i = 0; i < prop; i++){
        return (
        <form>
            <input 
                type='text'
                placeholder = 'Enter a Question'
                required
                ></input>
            <input
                type = 'text'
                placeholder = 'Enter answer'
                required></input>
            
        </form>)
    }

    console.log(list)
}