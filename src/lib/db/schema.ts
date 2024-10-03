import { integer, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id').primaryKey(),
	firstname: text('firstname').notNull(),
	lastname: text('lastname').notNull(),
	email: text('email').notNull(),
	phone: varchar('phone', { length: 256 })
});

export const products = pgTable('products', {
	id: uuid('id').primaryKey(),
	name: text('name').notNull(),
	code: text('code').notNull(),
	description: text('description'),
	price: integer('price').notNull(),
});
