import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="mt-4">
			<h1 className="ms-4">Personajes</h1>
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<div className="col">
					<CharacterCard
					name= "Nader"
					status= "Alive"
					specie= "Human"
					img= "img"
					/>
					</div>
				</div>
			</div>

		</div>
	);
}; 