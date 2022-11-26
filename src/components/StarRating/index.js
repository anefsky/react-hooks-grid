import React from 'react';
import BookContext from '../../shared/BookContext';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Wrapper } from './styles';

export default function StarRating({ bookId, ratingNum }) {

    const [numStars, setNumStars] = React.useState(ratingNum);

    const value = React.useContext(BookContext);

    function clicked(num) {
        setNumStars(num);
        value.updateUserRating(bookId, num);
    }

    return (
        <Wrapper>
            {Array(5).fill('').map((_, idx) =>
                <div key={idx}> 
                    {idx < numStars ?
                        <StarIcon sx={{ color: "red" }} size="small" onClick={() => clicked(idx + 1)} /> :
                        <StarBorderIcon size="small" onClick={() => clicked(idx + 1)} />
                    }
                </div>
            )}
        </Wrapper>
    )
}