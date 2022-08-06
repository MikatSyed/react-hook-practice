

import React from 'react';

function Title() {
    console.log('rendering title...');

    return <h2>useCallback && useMemo Hook Tutorial</h2>;
}

export default React.memo(Title);