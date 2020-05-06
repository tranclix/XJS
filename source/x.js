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
 *  version: 1.2.0
 *  date: 5-may-2020 20:56
 *  author: tranclix
 */

export const x = (function() {
	function _pi(_m) {
		// parse integer

		let _a = parseInt(_m)
		return _a
	}

	function _ri(min, max) {
		// generate random integer
		min = this._pi(min)
		max = this._pi(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	function _keyGen(lengthOfKey, numberOfKeys, joinedByChar, typeOfKeys) {
		/*
        	@ lengthOfKey: 	(optional) length of single key. integer, default: 5
        	@ numberOfKeys: (optional) how many keys to generate? default: 1
        	@ joinedByChar: (optional) which char to use to join the keys with? default: null => returns an array of keys. otherwise joins them with the provided character.
          	@ typeOfKeys:
	        	00 => numbers only. ex: 04278
	        	0a => numbers + small alphabets. ex: a67s3
	        	0A => numbers + CAPITAL alphabets. ex: GH67A
	        	aa => small alphabets only. ex: abywi
	        	AA => CAPITAL alphabets only. ex: WISLK
	        	aA => small + CAPITAL alphabets. ex: sAHnS
	        	0aA => numbers + small + CAPITAL alphabets. ex: b6Hi8
         */

		typeOfKeys = typeOfKeys ? typeOfKeys : "0aA"
		numberOfKeys = numberOfKeys ? numberOfKeys : 1
		lengthOfKey = lengthOfKey ? lengthOfKey : 5

		let charSpace = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		]
		let buffer = []

		function _allMixedGen(minIndex, maxIndex) {
			for (let j = 1; j <= numberOfKeys; j++) {
				let _temp = []
				for (let i = 1; i <= lengthOfKey; i++) {
					let shifter = Math.random() >= 0.5
					if (shifter) {
						_temp.push(charSpace[_ri(minIndex, maxIndex)])
					} else {
						_temp.push(_ri(0, 9))
					}
				}
				buffer.push(_temp.join(""))
			}
		}

		function _alphaGen(minIndex, maxIndex) {
			for (let j = 1; j <= numberOfKeys; j++) {
				let _temp = []
				for (let i = 1; i <= lengthOfKey; i++) {
					_temp.push(charSpace[_ri(minIndex, maxIndex)])
				}
				buffer.push(_temp.join(""))
			}
		}

		switch (typeOfKeys) {
			case "00":
				for (let j = 1; j <= numberOfKeys; j++) {
					buffer.push(
						_ri(
							Math.pow(10, lengthOfKey - 1),
							Math.pow(10, lengthOfKey) - 1
						).toString()
					)
				}
				break
			case "0a":
				_allMixedGen(26, 51)
				break
			case "0A":
				_allMixedGen(0, 25)
				break
			case "aa":
				_alphaGen(26, 51)
				break
			case "AA":
				_alphaGen(0, 25)
				break
			case "aA":
				_alphaGen(0, 51)
				break
			case "0aA":
			default:
				_allMixedGen(0, 51)
				break
		}

		if (joinedByChar) {
			return buffer.join(joinedByChar)
		} else {
			return buffer
		}
	}
	// LOCAL STORAGE
	return {
		ls: function(_k, _v) {
			// set
			localStorage.setItem(_k, _v)
		},

		lg: function(_k) {
			// get
			return localStorage.getItem(_k)
		},

		jls: function(_k, _v) {
			// JSON set
			localStorage.setItem(_k, JSON.stringify(_v))
		},

		jlg: function(_k) {
			// JSON get
			return JSON.parse(localStorage.getItem(_k))
		},

		lr: function(_k) {
			// remove
			localStorage.removeItem(_k)
		},

		lc: function(_k) {
			// check if key exists in LS
			if (localStorage.hasOwnProperty(_k)) {
				return true
			} else if (!localStorage.hasOwnProperty(_k)) {
				return false
			}
		},

		lclr: function() {
			// clear localStorage
			localStorage.clear()
		},

		lex: function() {
			// export entire LS
			return JSON.stringify(JSON.stringify(localStorage))
		},

		lim: function(_data) {
			// import LS via data/string generated from lex() method.
			_data = JSON.parse(_data)
			Object.keys(_data).forEach(function(k) {
				localStorage.setItem(k, _data[k])
			})
		},

		// SESSION STORAGE

		ss: function(_k, _v) {
			// set
			sessionStorage.setItem(_k, _v)
		},

		sg: function(_k) {
			// get
			return sessionStorage.getItem(_k)
		},

		jss: function(_k, _v) {
			// JSON set
			sessionStorage.setItem(_k, JSON.stringify(_v))
		},

		jsg: function(_k) {
			// JSON get
			return JSON.parse(sessionStorage.getItem(_k))
		},

		sr: function(_k) {
			// remove
			sessionStorage.removeItem(_k)
		},

		sc: function(_k) {
			// check if key exists in LS
			if (sessionStorage.hasOwnProperty(_k)) {
				return true
			} else if (!sessionStorage.hasOwnProperty(_k)) {
				return false
			}
		},

		sclr: function() {
			// clear sessionStorage
			sessionStorage.clear()
		},

		sex: function() {
			// export entire SS
			return JSON.stringify(JSON.stringify(sessionStorage))
		},

		sim: function(_data) {
			// import SS via data/string generated from sex() method.
			_data = JSON.parse(_data)
			Object.keys(_data).forEach(function(k) {
				localStorage.setItem(k, _data[k])
			})
		},

		// COMMON DATE / TIME FUNCTIONS (FOR CURRENT DATE ONLY)

		gm: function() {
			// get month
			return new Date().getMonth()
		},

		gy: function() {
			// get year
			return new Date().getFullYear()
		},

		gdy: function() {
			// get day
			return new Date().getDay()
		},

		gdt: function() {
			// get date
			return new Date().getDate()
		},

		gt: function() {
			// get time in ms
			return new Date().getTime()
		},

		w2m: function(time) {
			// weeks in ms. (supplied in weeks)
			return time * 7 * 24 * 60 * 60 * 1000
		},

		d2m: function(time) {
			// days in ms. (supplied in days)
			return time * 24 * 60 * 60 * 1000
		},

		h2m: function(time) {
			// hrs in ms. (supplied in hrs)
			return time * 60 * 60 * 1000
		},

		m2m: function(time) {
			// mins in ms. (supplied in mins)
			return time * 60 * 1000
		},

		s2m: function(time) {
			// sec in ms. (supplied in sec)
			return time * 1000
		},

		// OTHER TOOLS

		pi: _pi,

		pf: function(_m) {
			// parse float
			return parseFloat(_m)
		},

		ri: _ri,

		jp: function(_m) {
			// JSON parse
			return JSON.parse(_m)
		},

		js: function(_m) {
			// JSON stringify
			return JSON.stringify(_m)
		},

		b6e: function(_m) {
			// b64 encode
			return btoa(_m)
		},

		b6d: function(_m) {
			// b64 decode
			return atob(_m)
		},

		euc: function(_m) {
			return encodeURIComponent(_m)
		},

		eu: function(_m) {
			return encodeURI(_m)
		},

		duc: function(_m) {
			return decodeURIComponent(_m)
		},

		du: function(_m) {
			return decodeURI(_m)
		},

		keyGen: _keyGen,
	}
})()
