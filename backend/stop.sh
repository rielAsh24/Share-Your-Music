#!/bin/bash

echo "Stopping containers..."

container stop symc-me
container stop symc-mongo

container rm symc-me
container rm symc-mongo

echo "Done!"

