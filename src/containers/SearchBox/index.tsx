import React from 'react';

interface Props {
    onChange: React.ReactEventHandler<HTMLInputElement>;
}

const SearchBox: React.FC<Props> = props => {
    return (
        <input
            type="text"
            style={{
                width: '100%',
                height: 30,
                padding: 10,
                fontSize: 16,
                fontFamily: "Noto Sans', sans-serif",
            }}
            placeholder="Search Pokemon"
            onChange={props.onChange}
            alt="pokemon"
        />
    );
};

export default SearchBox;
