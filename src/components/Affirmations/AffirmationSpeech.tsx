import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const AffirmationSpeech = () => {
    const {state} = useLocation();
    const {entryId, user} = state;
    console.log(entryId, user)

    useEffect(() => {
        axios
        .get(`/affirmations/retrieve/${user}/${entryId}`)
        .then(({ data }) => console.log(data))
        .catch((err) => console.error(err))

    }, [])

return (
    <div>this is your a11y feat</div>
)
}

export default AffirmationSpeech;