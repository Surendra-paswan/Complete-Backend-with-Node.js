
// Native Modules or Built-in Modules or Core Modules
import fs from 'node:fs';
import net from 'node:net';
import dgram from 'node:dgram';
import http from 'node:http';
import https from 'node:https';
import child_process from 'node:child_process';
import zlib from 'node:zlib';
import cluster from 'node:cluster';
import worker_threads from 'node:worker_threads';
import crypto from 'node:crypto';

// User Modules
import {num} from './math.js';

// NPM Modules or Third Party Modules
import axios from 'axios';

console.log(num);
const data = fs.readFileSync('./math.js', 'utf-8');
console.log(data);
console.log(fs);

