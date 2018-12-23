export const UserSchema = {
		tableName: [null, 'users'],
		email: ['string', 'email'],
		firstName: ['string', 'fistName'],
		lastName: ['string', 'lastName'],
		password: ['string', 'password'],
		activated: ['boolean', 'activated'],
		tmpAuthHash: ['string', 'tmpAuthHash'],
		created: ['integer', 'created'],
		id: ['string', 'id']
};
