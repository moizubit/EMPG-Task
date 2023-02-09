
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Gist from './components/Gist';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { getGistForUser, getPublicGists } from "./store/actions/gist.action";
import { useDispatch} from "react-redux";


const App = () => {

  const dispatch = useDispatch();

  //making state for seaarch
  const [searchText, updateSearchText] = useState("");

  //invoking useEffect on text change
  useEffect(() => {
    getUser();
  }, [searchText])

  const getUser = (text = searchText) => {
    if (text) {
      dispatch(getGistForUser(text))
    } else {
      dispatch(getPublicGists())
    }
  }

  // passing updateSearchText on Header to mutate search text value
  return (
    <Wrapper className="App" data-testid="app">
      <Header searchProps={{
        onChange: updateSearchText
      }} />
      <Gist />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
