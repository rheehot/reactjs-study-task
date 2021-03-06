import React from 'react';

interface SearchBtnProps {
  onSubmit: any,
}

const SearchBtn: React.FC<SearchBtnProps> = (props) => {
  const { onSubmit } = props;

  return <button type="submit" onClick={onSubmit}>검색</button>;
};
export default SearchBtn;