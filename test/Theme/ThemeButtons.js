import React from 'react';
import { connect } from 'react-redux';
import { themeSelectors, defaultTheme, themeActions } from '../../scado';

const mapStateToProps = (state) => {
    return {
        theme: themeSelectors.theme(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTheme: (theme) => dispatch(themeActions.setTheme(theme))
    };
};

const ThemeButtons = ({ setTheme }) => {
    const theme1 = { ...defaultTheme, color: { ...defaultTheme.color, error: '#FF0000' } };
    const theme2 = { ...defaultTheme, color: { ...defaultTheme.color, error: '#00FF00' } };
    return (
        <div>
            <button onClick={() => setTheme(theme1)}>Theme 1</button>
            <button onClick={() => setTheme(theme2)}>Theme 2</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButtons);
