import TRAINERS from '../../data/dummy-trainers';

const initialState = {
  availableTrainers: TRAINERS,
  filteredTrainers: TRAINERS,
};

export default (state = initialState, action) => {
  return state;
};
