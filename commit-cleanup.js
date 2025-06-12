#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🧹 Committing project cleanup changes...\n');

try {
  // Check git status
  console.log('1. Checking git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  console.log('Modified/Deleted files:');
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
  console.log('\n3. Committing cleanup changes...');
  execSync('git commit -m "chore: clean up project structure and remove redundant files\n\n- Removed redundant attached_assets folder (assets moved to client/public)\n- Removed build artifacts (dist folder)\n- Removed development log files (server.log)\n- Removed Replit configuration (.replit)\n- Removed Claude AI temporary files (.claude)\n- Updated .gitignore with comprehensive ignore patterns\n- Organized project structure for better maintainability"', { stdio: 'inherit' });
  console.log('✅ Cleanup changes committed');

  // Push to remote
  console.log('\n4. Pushing to remote...');
  execSync('git push', { stdio: 'inherit' });
  console.log('✅ Changes pushed to GitHub');

  console.log('\n🎉 Project cleanup committed and pushed successfully!');
  console.log('✅ Project structure is now clean and organized');

} catch (error) {
  console.error('❌ Git operation failed:', error.message);
  process.exit(1);
} 