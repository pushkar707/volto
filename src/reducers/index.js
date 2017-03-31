/**
 * Root reducer.
 * @module reducers/root
 */

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import breadcrumbs from './breadcrumbs/breadcrumbs';
import content from './content/content';
import form from './form/form';
import navigation from './navigation/navigation';
import schema from './schema/schema';
import search from './search/search';
import userSession from './userSession/userSession';
import workflow from './workflow/workflow';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  breadcrumbs,
  content,
  form,
  navigation,
  schema,
  search,
  userSession,
  workflow,
});
