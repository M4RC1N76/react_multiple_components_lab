import react from "react";
import FilmsBox from "../containers/FilmsBox";
import Film from "./Film";

const FilmsList = () => {
        return (
            <>
            <h2>Films List here</h2>
            <Film />
            <Film film = "S"/>
            <Film film = "T"/>
            </>
        )
    }

export default FilmsList;