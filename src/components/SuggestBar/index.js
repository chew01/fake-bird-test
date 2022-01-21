import styled from 'styled-components';
import MagnifyingGlass from '../../assets/buttons/searchicon.svg';
import { FollowSuggest } from '../FollowSuggest';
import { TrendSuggest } from '../TrendSuggestion';

const Bar = styled.div`
  width: 350px;
  height: 100%;
  min-height: 985px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  position: fixed;
`;

const BarContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding: 12px 0px 64px 0px;
`;

const SearchContainer = styled.div`
  height: 53px;
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  background-color: rgb(255, 255, 255);
  z-index: 2;
  margin-bottom: 12px;
  top: 0px;
`;

const SearchBar = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: rgb(239, 243, 244);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  box-sizing: border-box;

  &:focus-within {
    border-color: rgb(29, 155, 240);
    background-color: rgba(0, 0, 0, 0);
  }
`;

const SearchForm = styled.form`
  width: 100%;
`;

const SearchLabel = styled.label`
  display: flex;
  flex-direction: row;
`;

const SearchIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const SearchIcon = styled.img`
  height: 18.75px;
  max-width: 100%;
  min-width: 32px;
  padding-left: 12px;
`;

const SearchInputContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  display: block;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 400;
  background-color: rgb(0, 0, 0, 0);
  color: rgb(15, 20, 25);
  border: 0px inset rgb(118, 118, 118);
  outline-style: none;
`;

const SearchSpacer = styled.div`
  display: flex;
  flex-direction: column;
  height: 53px;
  align-items: stretch;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchBar>
        <SearchForm>
          <SearchLabel>
            <SearchIconContainer>
              <SearchIcon src={MagnifyingGlass} />
            </SearchIconContainer>
            <SearchInputContainer>
              <SearchInput />
            </SearchInputContainer>
          </SearchLabel>
        </SearchForm>
      </SearchBar>
    </SearchContainer>
  );
};

export const SuggestBar = () => {
  return (
    <Bar>
      <BarContents>
        <Search />
        <SearchSpacer></SearchSpacer>
        <TrendSuggest />
        <FollowSuggest />
      </BarContents>
    </Bar>
  );
};
