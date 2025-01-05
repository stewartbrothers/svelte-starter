import { contentTable } from '$lib/db/schema';
import { db } from '$lib/db';

export async function load() {
	//Fetch all the content (for now).
	const content = await db.select().from(contentTable);
	return {
		rows: content
	};
}
