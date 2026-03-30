<?php

/**
 * Forward Vercel serverless requests to the normal Laravel application.
 */
if (!file_exists('/tmp/storage/framework/views')) {
    mkdir('/tmp/storage/framework/views', 0755, true);
}
if (!file_exists('/tmp/storage/framework/cache/data')) {
    mkdir('/tmp/storage/framework/cache/data', 0755, true);
}

require __DIR__ . '/../public/index.php';
