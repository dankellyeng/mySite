const profileReducer = (state = false, action: any) => {
    switch(action.type){
        case 'PROF_ON':
            return true;
        case 'PROF_OFF':
            return false;
            default:
                return state;
        }
    };

export default profileReducer;