#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🔧 Committing all project cleanup changes to GitHub...\n');

try {
  // Check git status
  console.log('1. Checking git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  console.log('Changes detected:');
  console.log(status || 'No changes detected');
  
  if (!status.trim()) {
    console.log('✅ No changes to commit');
    process.exit(0);
  }

  // Add all changes (including deletions)
  console.log('\n2. Adding all changes...');
  execSync('git add -A', { stdio: 'inherit' });
  console.log('✅ Added all changes including deletions');

  // Commit the changes
  console.log('\n3. Committing project cleanup...');
  const commitMessage = `chore: clean up project structure and remove redundant files

- Removed redundant attached_assets folder (assets moved to client/public/images/)
- Removed build artifacts (dist folder) 
- Removed development log files (server.log)
- Removed Replit configuration (.replit)
- Removed Claude AI temporary files (.claude/)
- Updated .gitignore with comprehensive ignore patterns
- Organized project structure for better maintainability
- Optimized for Vercel deployment`;

  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  console.log('✅ Project cleanup committed');

  // Push to remote
  console.log('\n4. Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });
  console.log('✅ Changes pushed to GitHub');

  console.log('\n🎉 All cleanup changes committed and pushed successfully!');
  console.log('✅ Project structure is now clean and organized on GitHub');

} catch (error) {
  console.error('❌ Git operation failed:', error.message);
  
  // Show more detailed error info
  if (error.stdout) {
    console.error('STDOUT:', error.stdout.toString());
  }
  if (error.stderr) {
    console.error('STDERR:', error.stderr.toString());
  }
  
  process.exit(1);
} 