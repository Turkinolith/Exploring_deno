// To use: deno run --allow-net http_requester.ts "https://www.google.com"
const url = Deno.args[0]; //Get first argument passed and store it in the URL const
const res = await fetch(url); // Make the request to the URL, await response, and store it as res note no "async" decoration.
const body = new Uint8Array(await res.arrayBuffer()); //parse the response body as arrayBuffer, await the response, convert it to a uint8array
await Deno.stdout.write(body); // write contents of the body constant to stdout
