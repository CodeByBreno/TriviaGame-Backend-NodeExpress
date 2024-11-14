"use strict";

const {
  exec
} = require("child_process");
const args = process.argv.slice(2);
const migrationArg = args.find(arg => arg.startsWith("--m="));
if (!migrationArg) {
  console.error("Error: Migration name is required. Use --m=<migration-name>");
  process.exit(1);
}
const migrationName = migrationArg.split("=")[1];
if (!migrationName) {
  console.error("Error: Migration name is required. Use --m=<migration-name>");
  process.exit(1);
}
const command = `npm run typeorm migration:generate ./src/migrations/${migrationName}`;
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`stdout: ${stdout}`);
});