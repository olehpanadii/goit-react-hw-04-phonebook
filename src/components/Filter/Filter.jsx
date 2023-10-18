import { FilterWrapper } from './Filter.styled';

export const Filter = ({ sorted, onChangeFilter }) => {
  return (
    <FilterWrapper>
      <label>Find contact by name</label>
      <input
        type="text"
        value={sorted}
        onChange={evt => {
          onChangeFilter(evt.target.value);
        }}
        placeholder="Search contact"
      />
    </FilterWrapper>
  );
};
