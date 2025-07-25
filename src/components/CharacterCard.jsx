

export const CharacterCard = ({name, status, specie, img}) => {

    return (
        <div className="card" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{specie}</p>
                <p className="card-text">{status}</p>

                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}