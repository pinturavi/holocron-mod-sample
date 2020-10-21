import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import childRoutes from '../childRoutes';
import MyContainer from '../container/MyContainer';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
const reducer = (state, action) => {
  switch (action.type){
  case 'add':
    return state
    default:
      return state
  }
}
const store = createStore(reducer);

export const RootMod = ({ switchLanguage, languageData, localeName }) => {
  const locales = ['en-US', 'en-CA', 'es-MX'];
  // naive solution - up to user on how to load in data
  if (languageData.greeting) {
    return (
      <Provider store={store}>
      <IntlProvider locale={localeName} messages={languageData}>
        <div>
          <span id="greeting-message">
            <h1><FormattedMessage id="greeting" /></h1>
          </span>
          <div id="locale">
            <label htmlFor="locale-selector">
              <p>Choose a locale:</p>
              <select name="locale" id="locale-selector" onChange={switchLanguage}>
                {locales.map((locale) => <option key={locale} value={locale}>{locale}</option>
                )}
              </select>
            </label>
          </div>
        </div>
        {/*<MyContainer />*/}
      </IntlProvider>
      </Provider>
    );
  }
  return null;
};

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/Routing.md#childroutes
RootMod.childRoutes = childRoutes;

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  RootMod.appConfig = require('../appConfig').default;
}

RootMod.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  languageData: PropTypes.shape({
    greeting: PropTypes.string.isRequired,
    greeting2: PropTypes.string.isRequired,
  }).isRequired,
  localeName: PropTypes.string.isRequired,
};

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async ({ target }) => {
    await dispatch(updateLocale(target.value));
    await dispatch(loadLanguagePack('root-mod', { fallbackLocale: 'en-US' }));
  },
});

export const mapStateToProps = (state) => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'root-mod'],
    fromJS({})
  ).toJS();

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName,
  };
};

export const loadModuleData = ({ store: { dispatch } }) => dispatch(loadLanguagePack('root-mod', { fallbackLocale: 'en-US' }));

RootMod.holocron = {
  name: 'root-mod',
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootMod);
