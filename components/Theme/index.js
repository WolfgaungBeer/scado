import { connect } from 'react-redux';
import { theme } from './selectors';
import Theme from './Theme';

const mapStateToProps = (state) => {
    return {
        theme: theme(state)
    };
};

export default connect(mapStateToProps)(Theme);
