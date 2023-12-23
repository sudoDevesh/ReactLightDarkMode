let initialThemeState = {
    theme: 'dark'
};

const resume = (state = initialThemeState, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            const updatedTheme = {
                ...state,
                theme: action.payload.theme,
            };
            return updatedTheme;

        default:
            return state;
    }
};

export default resume;
