export default {
  async fetch(req: Request, env: any) {
    const url = new URL(req.url);

    // Return all published movies
    if (url.pathname === "/movies") {
      const { results } = await env.movie_db
        .prepare("SELECT * FROM movies WHERE published = 1")
        .all();

      return new Response(JSON.stringify(results), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return single movie by ID
    if (url.pathname.startsWith("/movies/")) {
      const movieId = url.pathname.split("/")[2];
      const { results } = await env.movie_db
        .prepare("SELECT * FROM movies WHERE id = ?")
        .bind(movieId)
        .all();

      if (!results[0]) return new Response("Movie not found", { status: 404 });

      return new Response(JSON.stringify(results[0]), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
