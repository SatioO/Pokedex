import React from 'react';

interface Props {
    title: string;
}

const Header: React.FC<Props> = props => (
    <header
        className="mdl-layout__header"
        style={{
            backgroundColor: 'rgb(206, 64, 58)',
        }}
    >
        <div className="mdl-layout__header-row">
            <span
                className="mdl-layout-title"
                style={{ fontFamily: "Noto Sans', sans-serif" }}
            >
                {props.title}
            </span>
            <div className="mdl-layout-spacer" />
        </div>
    </header>
);

export default Header;
