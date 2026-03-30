<?php

/**
 * Forward Vercel serverless requests to the normal Laravel application.
 */

// Create the necessary directories for the Laravel application to function in a read-only filesystem.
$dirs = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/bootstrap/cache',
    '/tmp/storage/logs',
];

foreach ($dirs as $dir) {
    if (!file_exists($dir)) {
        mkdir($dir, 0755, true);
    }
}

require __DIR__ . '/../public/index.php';
