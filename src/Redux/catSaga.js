import { call, put, takeEvery } from 'redux-saga/effects'

import {getCatsSuccess} from './catState'

function* workGetCatsFetch(){
    const api = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const formattedApi = yield api.json()
    // console.log(formattedApi)
    const shortListCats = formattedApi.slice(0,10)
    yield put(getCatsSuccess(shortListCats))
}

function* catSaga(){
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}


export default catSaga