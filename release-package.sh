#!/usr/bin/env bash

# Prompt the user for the 'type' variable
read -p "Enter the release type (patch, minor, major): " type

# Validate the 'type' input
case "$type" in
    patch|minor|major)
        ;;
    *)
        echo "Invalid release type: $type"
        exit 1
        ;;
esac

# Prompt the user for the 'stage' variable
read -p "Enter the release stage (dev, qa, main): " stage

# Validate the 'stage' input
case "$stage" in
    dev|qa|main)
        ;;
    *)
        echo "Invalid release stage: $stage"
        exit 1
        ;;
esac

releaseType=""
preRelease=""

case "$stage" in
    dev|qa)
        preRelease="--preRelease=${stage}"
        case "$type" in
            patch)
                releaseType="prepatch"
                ;;
            minor)
                releaseType="preminor"
                ;;
            major)
                releaseType="premajor"
                ;;
        esac
        ;;
    main)
        releaseType=$type
        ;;
esac

git pull

release-it $releaseType --git.requireBranch=$stage $preRelease





