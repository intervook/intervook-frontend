import { SEARCH_PLACEHOLDER } from '../../static/constants';

function SearchInput() {
  return (
    <div className="w-[25%] h-[60%] ml-[50%] rounded-sm">
      <input
        placeholder={SEARCH_PLACEHOLDER}
        className="w-[100%] h-[100%] pl-[3%] bg-lightGray/20 focus:outline-none"
      />
    </div>
  );
}

export default SearchInput;
