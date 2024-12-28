import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";


export const HeroPage = () => {

    const { id } = useParams();
    const hero = useMemo(() => getHeroById(id), [id])
    const navigate = useNavigate();


    if (!hero) {
        return <Navigate to="/"></Navigate>
    }

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={heroImageUrl} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft"></img>
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b> Alter ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b> Publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b> First Appeareance: </b>
                        {hero.first_appearance}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-outline-primary" onClick={onNavigateBack}>Regresar</button>
            </div>
        </div>
    )
}
