exports.getDiscountByVale = function(active) {
	if (active) return 0.05;
	else throw new Error('El vale ha caducado');
}

exports.getDiscountByPrice = function(price) {
	if (price>100) return 0.1; 
	else if (price>50) return 0.05;	
}