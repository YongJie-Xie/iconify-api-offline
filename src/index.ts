import { config } from 'dotenv';
import { loaded } from './data/loading.js';
import { startHTTPServer } from './http/index.js';
import { loadEnvConfig } from './misc/load-config.js';
import { initAPI } from './init.js';
import { FullLocalPackageImporter } from './config/importers/full-local-package.js';

(async () => {
	// Configure environment
	config();
	loadEnvConfig();

	// Start HTTP server
	startHTTPServer();

	// Init API
	await initAPI({
		cleanup: true,
		importers: [
			FullLocalPackageImporter,
		],
	});

	// Loaded
	loaded();
})()
	.then(() => {
		console.log('API startup process complete');
	})
	.catch(console.error);
