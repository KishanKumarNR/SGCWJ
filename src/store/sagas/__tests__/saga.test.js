import {changeColorSaga, changeUI, CHOOSE_COLOR, chooseColor, chooseNumber, doStuffThenChangeColor} from "../saga";
import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

var assert = require('assert');

const gen = changeColorSaga();

describe("Test", () => {
    test("it", () => {
        assert.deepEqual(
            gen.next().value,
            take(CHOOSE_COLOR),
            'it should wait for a user to choose a color'
        );
        const color = 'red';
        assert.deepEqual(
            gen.next(chooseColor(color)).value,
            put(changeUI(color)),
            'it should dispatch an action to change the ui'
        );
        assert.deepEqual(
            gen.next().done,
            true,
            'it should be done'
        );
    })
})

// test('doStuffThenChangeColor', assert => {
//     const gen = cloneableGenerator(doStuffThenChangeColor)();
//     gen.next(); // DO_STUFF
//     gen.next(); // DO_STUFF
//     gen.next(); // CHOOSE_NUMBER
//
//     assert.test('user choose an even number', a => {
//         // cloning the generator before sending data
//         const clone = gen.clone();
//         a.deepEqual(
//             clone.next(chooseNumber(2)).value,
//             put(changeUI('red')),
//             'should change the color to red'
//         );
//
//         a.equal(
//             clone.next().done,
//             true,
//             'it should be done'
//         );
//
//         a.end();
//     });
//
//     assert.test('user choose an odd number', a => {
//         const clone = gen.clone();
//         a.deepEqual(
//             clone.next(chooseNumber(3)).value,
//             put(changeUI('blue')),
//             'should change the color to blue'
//         );
//
//         a.equal(
//             clone.next().done,
//             true,
//             'it should be done'
//         );
//
//         a.end();
//     });
// });
