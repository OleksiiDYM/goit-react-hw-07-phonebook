import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <div>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
