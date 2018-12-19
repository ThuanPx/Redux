import { FETCHING_DATA } from "../actions/types";
import { getDataSuccess, getDataFailure } from "../actions/actions";
import getPeople from "../actions/test";

import "rxjs";
import { Observable } from "rxjs/Observable";

const fetchUserEpic = action$ =>
  action$.ofType(FETCHING_DATA).mergeMap(action =>
    Observable.fromPromise(getPeople())
      .map(response => getDataSuccess(response))
      .catch(error => Observable.of(getDataFailure(error)))
  );

export default fetchUserEpic;
