import { MdPendingActions } from "react-icons/md";

const channelReducers = (states = [], action) => {
    switch(action.type) {
        case 'UPDATE_DATE':
            return states.map(state=>state._id===MdPendingActions.payload._id? action.payload: state)
        case "FETCH_CHANNELS":
            return action.payload;
        default:
            return states;
    }
}
export default channelReducers;