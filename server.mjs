import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
const port=Number(process.env.PORT||3000);
createServer(async (_req,res)=>{try{const html=await readFile(new URL('./index.html',import.meta.url));res.writeHead(200,{'content-type':'text/html; charset=utf-8','cache-control':'no-store'});res.end(html)}catch{res.writeHead(500);res.end('Unable to load app')}}).listen(port,'0.0.0.0',()=>console.log(`Lotus Garden running on port ${port}`));
