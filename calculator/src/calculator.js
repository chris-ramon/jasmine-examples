window.Calculator = {
	current: 0,
	add: function() {
		this.operate('add', arguments);
		return this.current;
	},
	substract: function() {
		this.operate('substract', arguments);	
		return this.current;
	},
	multiply: function() {
		this.operate('multiply', arguments);
		return this.current;
	},
	divide: function() {
		this.operate('divide', arguments);
		return this.current;
	},
	operate: function(operation, numbers) {
		sum = this.current;
		if (operation == 'multiply' && this.current == 0)
			sum = 1;			
		if (operation == 'divide' && this.current == 0) {
			sum = numbers[0];
			numbers = Array.prototype.slice.call(numbers);
			numbers.splice(0,1);
		}
		for (var i = 0; i < numbers.length; i++) {
			if (operation == 'add')
				sum += numbers[i];
			if (operation == 'substract')
				sum -= numbers[i];
			if (operation == 'multiply')
				sum *= numbers[i];
			if (operation == 'divide') {
				console.log(numbers[i]);
				sum /= numbers[i];
			}
		}
		this.current = sum;
	},
}