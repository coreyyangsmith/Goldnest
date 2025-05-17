export function getDates(accountEntries) {
	// Get List of Unique Dates
	var uniqueDates;
	uniqueDates = removeDuplicateDates(accountEntries);
	return uniqueDates;
}

export function removeDuplicateDates(arr) {
	let unique = [];
	arr.forEach((element) => {
		if (!unique.includes(element.date)) {
			unique.push(element.date);
		}
	});
	return unique;
}
