module.exports = function() {
	var test = document.createElement('div');
	let alex = {
		arr: '你好',
		syso() {
			return arr;
		}
	};
	[1, 2, 3].map(n => { console.log(n) });
	test.textContent = alex.arr;
	return test;
};