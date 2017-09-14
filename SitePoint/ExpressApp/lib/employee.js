var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback) {
	Employee.finc().sort('name.last').exec(callback);
}

function getEmployees (callback) {
	Employee.findOne({
		id: employeeId
	}).populate('team').exec(callback);
}