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

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.allCountries);
  const numCountries = useSelector((state) => state.filteredCountries);

  const activitys = useSelector((state) => state.activitys);

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

  return (
    <>
      <div className={Style.home}>

        <NavBar />

        <div className={Style.filterSort}>

          <div className={Style.filters}>

            <Filters activitys={activitys} />

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

          <div className={Style.sorts}>

            <Sorts />

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

          <button className={Style.buttonReset} onClick={handleReset}>Reset Filters</button>

        </div>

        <Paginator page={page + 1} maxPage={maxPage} />

        <Cards countries={countries} />

        <Paginator page={page + 1} maxPage={maxPage} />

        <FlagsBar countries={numCountries} />

        <Footer />
      </div>
    </>
  );
};

export default Home;
