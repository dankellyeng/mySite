const skillsReducer = (state = false, action: any) => {
    switch(action.type){
        case 'SKILLS_ON':
            return true;
        case 'SKILLS_OFF':
            return false;
            default:
                return state;
        }
    };
export default skillsReducer;