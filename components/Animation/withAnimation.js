import React, { PureComponent } from 'react';
import Animation from './';

const withAnimation = (id, hideOnMount) => (Component) => {
    return class extends PureComponent {
        render() {
            return (
                <Animation id={id} hideOnMount={hideOnMount}>
                    <Component { ...this.props } />
                </Animation>
            );
        }
    }
};

export default withAnimation;
