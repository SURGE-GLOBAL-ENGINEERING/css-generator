#!/usr/bin/env bash

type="default"
stage="default"

# Function to validate the type flag
validate_type() {
     if [ -z "$1" ]; then
        echo "Type can not be empty"
        exit 1
    fi

    case "$1" in
        patch|minor|major)
            ;;
        *)
            echo "Invalid type: $1; Expected type to be patch, minor or major"
            exit 1
            ;;
    esac
}

# Function to validate the stage flag
validate_stage() {
    if [ -z "$1" ]; then
        echo "Stage can not be empty"
        exit 1
    fi
    case "$1" in
        dev|qa|main)
            ;;
        *)
            echo "Invalid stage: $1; Expected stage to be dev, qa or main"
            exit 1
            ;;
    esac
}

# Parse command-line arguments
while [[ $# -gt 0 ]]; do
    case "$1" in
        --type)
            shift
            validate_type "$1"
            type="$1"
            ;;
        --stage)
            shift
            validate_stage "$1"
            stage="$1"
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
    shift
done

# Check if both type and stage flags have been provided
if [[ "$type" == "default" || "$stage" == "default" ]]; then
    echo "Both type and stage arguments are mandatory."
    exit 1
fi

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

echo "Type flag is set to: $type"
echo "Stage flag is set to: $stage"

echo "release type: $releaseType"
echo "prerelease: $preRelease"

release-it --dry-run $releaseType --git.requireBranch=release-it-extended $preRelease





