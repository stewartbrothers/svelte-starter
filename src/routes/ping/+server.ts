export function GET() {
	return new Response('pong', {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
