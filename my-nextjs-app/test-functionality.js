// Simple test to verify the expand/collapse functionality
// This would be run in the browser console to test the implementation

console.log('Testing expand/collapse functionality...');

// Test 1: Check if navigation buttons are clickable
const navButtons = document.querySelectorAll('nav button');
console.log(`Found ${navButtons.length} navigation buttons`);

// Test 2: Check if sections exist
const sections = document.querySelectorAll('section[id]');
console.log(`Found ${sections.length} sections with IDs`);

// Test 3: Check if sections have the expand/collapse structure
sections.forEach(section => {
  const button = section.querySelector('button');
  const content = section.querySelector('.overflow-hidden');
  console.log(`Section ${section.id}: has button=${!!button}, has content=${!!content}`);
});

console.log('Test completed. Check the browser for actual functionality.');