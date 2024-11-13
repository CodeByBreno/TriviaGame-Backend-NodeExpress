import http from "http";
import { app, connectDatabase } from "./app";

const server = http.createServer(app);

connectDatabase().then(() => {
  server.listen(process.env.PORT || 3333, async () => {
    console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`);
  });
});
