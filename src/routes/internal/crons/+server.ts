export function GET(req) {
	if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response('Unauthorized', {
			status: 401
		});
	}
	return new Response('Hello Cron!');
}
