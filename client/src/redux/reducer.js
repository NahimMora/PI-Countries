import { 
    GET_COUNTRIES, 
    GET_COUNTRY, 
    GET_COUNTRY_NAME, 
    GET_ACTIVITYS,

    PAGINATOR, 

    SORT_ALFABETIC, 
    SORT_POPULATION, 

    FILTER_CONTINENT, 
    FILTER_ACTIVITY,
    RESET_FILTERS, 
} from "./actions/actions-types";

const initialState = {
    allCountries: [],
    filteredCountries: [],
    backupCountries: [],
    country: {},

    activitys: [],

    currentPage: 0,
    activeFilters: {
        continent: null,
        alphabeticalSort: null,
        populationSort: null,
        activity: null
    }
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
                allCountries: action.payload.slice(0, itemsPerPage),
                filteredCountries: action.payload,
                currentPage: 0
            };

        case GET_ACTIVITYS:
            return {
                ...state,
                activitys: action.payload
            }

        case PAGINATOR:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? next_page * itemsPerPage : prev_page * itemsPerPage;
            
            if (action.payload === "next" && firstIndex >= state.filteredCountries.length) return state;
            if (action.payload === "prev" && prev_page < 0) return state;
            
            const filteredCountries = state.filteredCountries.length > 0 ? state.filteredCountries : state.backupCountries;
            
            return {
                ...state,
                allCountries: filteredCountries.slice(firstIndex, firstIndex + itemsPerPage),
                currentPage: action.payload === "next" ? next_page : prev_page
            };
            
        case SORT_ALFABETIC:
            const sortedCountries = [...state.filteredCountries];
            if (action.payload === "Ascending") {
                sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                allCountries: sortedCountries.slice(0, itemsPerPage),
                filteredCountries: sortedCountries,
                currentPage: 0,
                activeFilters: {
                    ...state.activeFilters,
                    alphabeticalSort: action.payload
                }
            };

        case SORT_POPULATION:

            const populationCountries = [...state.filteredCountries];
            if (action.payload === "Ascending"){
              populationCountries.sort((a, b) => a.population - b.population);
            } else {
              populationCountries.sort((a, b) => b.population - a.population)
            }

            return {
              ...state,
              allCountries: populationCountries.slice(0, itemsPerPage),
              filteredCountries: populationCountries,
              currentPage: 0,
              activeFilters: {
                ...state.activeFilters,
                populationSort: action.payload
              }
            }
              
        case FILTER_CONTINENT:

        const continentCountries = [...state.filteredCountries].filter(c => {
            return c.continents[0] === action.payload;
          });

          return {
            ...state,
            allCountries: [...continentCountries].slice(0, itemsPerPage),
            filteredCountries: [...continentCountries],
            currentPage: 0,
            activeFilters: {
                ...state.activeFilters,
                continent: action.payload
            }
          };

          case FILTER_ACTIVITY:

            const activityCountries = [...state.filteredCountries].filter(c => {
                return action.payload.includes(c.name);
            });
        
            return {
                ...state,
                allCountries: [...activityCountries].slice(0, itemsPerPage),
                filteredCountries: [...activityCountries],
                currentPage: 0,
                activeFilters: {
                    ...state.activeFilters,
                    activity: action.payload
                }
            };
        

        case RESET_FILTERS:
            return {
                ...state,
                allCountries: [...state.backupCountries].splice(0, itemsPerPage),
                filteredCountries: [...state.backupCountries],
                currentPage: 0,
                activeFilters: {
                    continent: null,
                    alphabeticalSort: null,
                    populationSort: null,
                    activity: null
                }
            }

        default:
            return state;
    }
}

export default rootReducer;
