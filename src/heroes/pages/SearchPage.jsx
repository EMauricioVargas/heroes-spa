import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from '../components';
export const SearchPage = () => {




    const navigate = useNavigate();

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText.toLowerCase()}`)
    }
    return (
        <>
            <h1>Search</h1>
            <hr></hr>
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr></hr>
                    <form onSubmit={onSearchSubmit}>
                        <input onChange={onInputChange} value={searchText} type="text" placeholder="Search a hero" className="form-control" name="searchText" autoComplete="off">
                        </input>

                        <button className="btn btn-outline-primary mt-2">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr></hr>
                    <div className="alert alert-primary">
                        Search a hero
                    </div>
                    {
                        heroes.length == 0 && (<div className="alert alert-danger">
                            No hero with: <b>{q}</b>
                        </div>)
                    }

                    {
                        heroes.map(
                            heroe => (
                                <HeroCard key={heroe.id} id={heroe.id} {...heroe}></HeroCard>
                            )
                        )
                    }

                </div>
            </div>
        </>
    )
}
