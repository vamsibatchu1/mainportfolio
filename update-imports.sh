#!/bin/bash

# Update imports with relative paths to absolute paths with @/lib/config/fonts
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' -e "s/from '\.\.\/*fonts'/from '@\/lib\/config\/fonts'/g"

# Update imports from @/app/fonts to @/lib/config/fonts 
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' -e "s/from '@\/app\/fonts'/from '@\/lib\/config\/fonts'/g"

echo "Import paths updated!" 