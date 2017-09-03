import React from 'react';
import { connect } from 'react-redux';
import { animationSelectors, animationActions } from '../../scado';


const mapDispatchToProps = (dispatch) => {
    return {
        animate: (payload) => dispatch(animationActions.animate(payload)),
    };
};

const AnimationButtons = ({ animate }) => {
    return (
        <div>
            <button onClick={() => animate({ id: 'button-animation', type: 'enter', className: 'vivify flipInX' })}>Show it!</button>
            <button onClick={() => animate({ id: 'button-animation', type: 'leave', className: 'vivify flipOutX' })}>Hide it!</button>
            <button onClick={() => animate({ id: 'button-animation', className: 'vivify spin' })}>Spin it!</button>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(AnimationButtons);
