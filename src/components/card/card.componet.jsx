import './card.styles.css';

const Card = ({ monster: {name, id, email } }) => {
    // const {name, email, id} = monster; this is optional which can be destructured as a object as above
   
        return (
            <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
           <h2>{name}</h2>
           <p>{email}</p>
        </div>
        )
    }


export default Card;