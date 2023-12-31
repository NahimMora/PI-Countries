import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivitys, getCountries, resetFilters } from '../../redux/actions/actions';

import Style from './Home.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import Paginator from '../../components/Paguinator/Paguinator';
import Sorts from '../../components/Sorts/Sorts';
import FlagsBar from '../../components/FlagsBar/FlagsBar';
import Footer from '../../components/Footer/Footer';
import Page404 from '../../components/Page 404/Page404';

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.allCountries);
  const numCountries = useSelector((state) => state.filteredCountries);

  const activitys = useSelector((state) => state.activitys);

  const continents = ['Africa', 'Europe', 'Oceania', 'Asia', 'South America', 'North America', 'Antarctica']

  const activeFilters = useSelector((state) => state.activeFilters);

  const page = useSelector((state) => state.currentPage);

  const isSortAlphabeticActive = activeFilters.alphabeticalSort !== null;
  const isSortPopulation = activeFilters.populationSort !== null;
  const isFilterContinent = activeFilters.continent !== null;
  const isFilterActivity = activeFilters.activity !== null;

  const maxPage = Math.ceil(numCountries.length / 10);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivitys());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(resetFilters());
  };

  console.log(countries.length);

  return (
    <>
      <div className={Style.home}>

        <NavBar />

        <div className={Style.filterSort}>

          <div className={Style.filters}>

            <Filters activitys={activitys} continents={continents}/>
            <div className={Style.FilterInfo}>
            {isFilterContinent ? (
              <div className={Style.filterActive}>
                Filter Continent Active: {activeFilters.continent}
              </div>
            ) : (
              <div className={Style.filterDesactive}>
                Filter Continent Inactive
              </div>
            )}

            {isFilterActivity ? (
              <div className={Style.filterActive}>
                Activity available in: {activeFilters.activity}
              </div>
            ) : (
              <div className={Style.filterDesactive}>
                Filter Activity Inactive
              </div>
            )}
            </div>

          </div>

          <div className={Style.sorts}>

            <Sorts />
            
            <div className={Style.SortInfo}>
            {isSortAlphabeticActive ? (
              <div className={Style.filterActive}>
                Sort Alphabetic Active: {activeFilters.alphabeticalSort}
              </div>
            ) : (
              <div className={Style.filterDesactive}>
                Sort Alphabetic Inactive
              </div>
            )}

            {isSortPopulation ? (
              <div className={Style.filterActive}>
                Sort Population Active: {activeFilters.populationSort}
              </div>
            ) : (
              <div className={Style.filterDesactive}>
                Sort Population Inactive
              </div>
            )}
            </div>
          </div>

          <button className={Style.buttonReset} onClick={handleReset}>Reset Filters</button>

        </div>

        <Paginator page={page + 1} maxPage={maxPage} />

        <Cards countries={countries} />

        {countries.length === 0 ? <Page404/> : null}

        <Paginator page={page + 1} maxPage={maxPage} />

        <FlagsBar countries={numCountries} />

        <Footer />
      </div>
    </>
  );
};

export default Home;
