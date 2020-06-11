const educationReducer = (state = false, action: any) => {
    switch(action.type){
        case 'EDU_ON':
            return true;
        case 'EDU_OFF':
            return false;
            default:
                return state;
    }
};

export default educationReducer;