import React from 'react';
import { connect } from 'react-redux';
import { animationSelectors, animationActions } from '../../scado';


const mapDispatchToProps = (dispatch) => {
    return {
        animate: (id, className, type) => dispatch(animationActions.animate({ id, type, className })),
    };
};

const AnimationButtons = ({ animate }) => {
    return (
        <div>
            <button onClick={() => animate('button-animation', 'enterAnimation', 'enter')}>Show it!</button>
            <button onClick={() => animate('button-animation', 'leaveAnimation', 'leave')}>Hide it!</button>
            <button onClick={() => animate('button-animation', 'rotateAnimation')}>Rotate it!</button>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(AnimationButtons);
