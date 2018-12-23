/* 
MIT License

Copyright 2018 Devashish Bahri (@tranclix)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*  
 *  XJS
 *  version: 1.1.0
 *  date: 23-12-2018 15:56
 *  author: tranclix
 */

const x = Object.freeze({

    // LOCAL STORAGE

    ls: function(_k, _v) { // set

        localStorage.setItem(_k, _v);

    },

    lg: function(_k) { // get

        var _a = localStorage.getItem(_k);
        return _a;

    },

    jls: function(_k, _v) { // JSON set

        localStorage.setItem(_k, JSON.stringify(_v));

    },

    jlg: function(_k) { // JSON get

        var _a = JSON.parse(localStorage.getItem(_k));
        return _a;

    },

    lr: function(_k) { // remove

        var _a = localStorage.removeItem(_k);

    },

    lc: function(_k) { // check if key exists in LS

        if (localStorage.hasOwnProperty(_k)) {
            return true;
        } else if (!localStorage.hasOwnProperty(_k)) {
            return false;
        }

    },

    lss: function() { // calc LS space
        var allStrings = '';
        for (var key in window.localStorage) {
            if (window.localStorage.hasOwnProperty(key)) {
                allStrings += window.localStorage[key];
            }
        }
        return allStrings ? 3 + ((allStrings.length * 16) / (8 * 1024)) + ' KB' : '0 KB';
    },

    lclr: function() { // clear localStorage
        localStorage.clear();
    },

    lex: function() { // export entire LS
        return JSON.stringify(JSON.stringify(localStorage));
    },

    lim: function(_data) { // import LS via data/string generated from lex() method.
        _data = JSON.parse(_data);
        Object.keys(_data).forEach(function(k) {
            localStorage.setItem(k, _data[k]);
        });
    },

    // SESSION STORAGE

    ss: function(_k, _v) { // set

        sessionStorage.setItem(_k, _v);

    },

    sg: function(_k) { // get

        var _a = sessionStorage.getItem(_k);
        return _a;

    },

    jss: function(_k, _v) { // JSON set

        sessionStorage.setItem(_k, JSON.stringify(_v));

    },

    jsg: function(_k) { // JSON get

        var _a = JSON.parse(sessionStorage.getItem(_k));
        return _a;

    },

    sr: function(_k) { // remove

        var _a = sessionStorage.removeItem(_k);

    },

    sc: function(_k) { // check if key exists in LS

        if (sessionStorage.hasOwnProperty(_k)) {
            return true;
        } else if (!sessionStorage.hasOwnProperty(_k)) {
            return false;
        }

    },

    sss: function() { // calc SS space
        var allStrings = '';
        for (var key in window.sessionStorage) {
            if (window.sessionStorage.hasOwnProperty(key)) {
                allStrings += window.sessionStorage[key];
            }
        }
        return allStrings ? 3 + ((allStrings.length * 16) / (8 * 1024)) + ' KB' : '0 KB';
    },

    sclr: function() { // clear sessionStorage
        sessionStorage.clear();
    },

    sex: function() { // export entire SS
        return JSON.stringify(JSON.stringify(sessionStorage));
    },

    sim: function(_data) { // import SS via data/string generated from sex() method.
        _data = JSON.parse(_data);
        Object.keys(_data).forEach(function(k) {
            localStorage.setItem(k, _data[k]);
        });
    },


    // COMMON DATE / TIME FUNCTIONS (FOR CURRENT DATE ONLY)

    gm: function() { // get month

        var _a = (new Date()).getMonth();
        return _a;

    },

    gy: function() { // get year

        var _a = (new Date()).getFullYear();
        return _a;

    },

    gdy: function() { // get day

        var _a = (new Date()).getDay();
        return _a;

    },

    gdt: function() { // get date

        var _a = (new Date()).getDate();
        return _a;

    },

    gt: function() { // get time in ms

        var _a = (new Date()).getTime();
        return _a;

    },

    hms: function(time) { // hrs in ms. (supplied in hrs)
        return (time * 60 * 60 * 1000);
    },

    mms: function(time) { // mins in ms. (supplied in mins)
        return (time * 60 * 1000);
    },


    // OTHER TOOLS

    pi: function(_m) { // parse integer

        var _a = parseInt(_m);
        return _a;

    },

    pf: function(_m) { // parse float

        var _a = parseFloat(_m);
        return _a;

    },

    sp: function(_s, _f, _i) { // split

        if (_s && _f) { // if index not given

            var _a = _s.split(_f);
            return _a;

        } else if (_s && _f && _i) { // if index given

            var _a = _s.split(_f)[_i];
            return _a;

        } else if (_s && !_f && !_i) { // if only split

            var _a = _s.split('');
            return _a;

        }

    },

    ri: function(min, max) {
        min = this.pi(min);
        max = this.pi(max);
        return (Math.floor(Math.random() * (max - min + 1)) + min).toFixed(0);
    },

    jp: function(_m) { // JSON parse

        var _a = JSON.parse(_m);
        return _a;

    },

    js: function(_m) { // JSON stringify

        var _a = JSON.stringify(_m);
        return _a;

    },

    cl: function(_m) {

        console.log(_m);

    }

});