import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Wrapper } from './styles';

export default function StarRating({ratingNum}) {

    const [numStars, setNumStars] = React.useState(ratingNum);

    function clicked(num) {
        setNumStars(num);
    }

    return (
        <Wrapper>
            {Array(5).fill('').map((_, idx) =>
                <div key={idx}> 
                    {numStars <= idx ?
                        <StarBorderIcon size="small" onClick={() => clicked(idx + 1)} /> : 
                        <StarIcon sx={{ color: "red" }} size="small" onClick={() => clicked(idx + 1)} />
                    }
                </div>
            )}
        </Wrapper>
    )
}