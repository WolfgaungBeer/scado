import { connect } from 'react-redux';
import * as themeSelectors from './selectors';
import Theme from './Theme';

const mapStateToProps = (state) => {
    return {
        theme: themeSelectors.theme(state)
    };
};

export default connect(mapStateToProps)(Theme);
