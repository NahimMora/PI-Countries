import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_NAME, PAGINATOR, SORT_ALFABETIC } from "./actions/actions-types";

const initialState = {
    allCountries: [],
    filteredCountries: [],
    backupCountries: [],
    country: {},
    currentPage: 0
};

function rootReducer(state = initialState, action) {
    const itemsPerPage = 10;

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload.slice(0, itemsPerPage),
                backupCountries: action.payload,
                filteredCountries: action.payload
            };

        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            };

        case GET_COUNTRY_NAME:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries: action.payload.slice(0, itemsPerPage)
            };

            case PAGINATOR:
                const next_page = state.currentPage + 1;
                const prev_page = state.currentPage - 1;
                const firstIndex = action.payload === "next" ? next_page * itemsPerPage : prev_page * itemsPerPage;
            
                if (action.payload === "next" && firstIndex >= state.backupCountries.length) return state;
                if (action.payload === "prev" && prev_page < 0) return state;
            
                const filteredCountries = state.filteredCountries.length > 0 ? state.filteredCountries : state.backupCountries;
            
                const newAllCountries = filteredCountries.slice(firstIndex, firstIndex + itemsPerPage);
            
                return {
                    ...state,
                    allCountries: newAllCountries,
                    currentPage: action.payload === "next" ? next_page : prev_page
                };
            

        case SORT_ALFABETIC:
            const sortedCountries = [...state.backupCountries];
            if (action.payload === "Ascending") {
                sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                allCountries: sortedCountries.slice(0, itemsPerPage),
                filteredCountries: sortedCountries
            };

        default:
            return state;
    }
}

export default rootReducer;
