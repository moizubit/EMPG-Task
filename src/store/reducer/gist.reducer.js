import GIST from "../constants/gist.constant"

const initialState = {
    gistLoading: true,
    gist: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GIST.GET_GIST:
            return {
                ...state,
                gist: action.data,
                gistLoading: action.loading,
            };
        default:
            return state;
    }
};
