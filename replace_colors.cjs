const fs = require('fs');
const path = require('path');

const colorMap = {
  '#FBF9F5': '#FAF6F0',
  '#F2EFE9': '#F0ECE4',
  '#EAE6DD': '#E6E1D6',
  '#6C7D6B': '#8B2332',
  '#8E9E8D': '#A64654',
  '#374436': '#5C121F',
  '#CBD4CB': '#E8D1D5',
  '#2A2E2C': '#1A1A1A',
  '#5A605D': '#4A4A4A',
  '#B59960': '#C5A059',
  '#1A1D1B': '#111111' // dark hero bg
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const [oldColor, newColor] of Object.entries(colorMap)) {
        // Case insensitive replacement for hex codes
        const regex = new RegExp(oldColor, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newColor);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Color replacement complete.');
