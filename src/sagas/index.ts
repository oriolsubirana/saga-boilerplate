import { actionIds } from "../common";
import { generateNewNumber } from "../services";
import { takeEvery, call } from "@redux-saga/core/effects";

//todas las acciones de GET_NUMBER_REQUEST_START ejecutaran el requestNewGeneratedNumber
function* watchNewGeneratedNumberRequestStart() {
    yield takeEvery(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);
}

//el call espera a que la promesa (generatedNewNumber) se resuelva y devuelve el generatedNumber
function* requestNewGeneratedNumber() {
    const generatedNumber = yield call(generateNewNumber);
}