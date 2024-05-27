const fs = require('fs');

// Read the Prisma schema file
const schema = fs.readFileSync('./prisma/schema.prisma', 'utf8');

// Parse the schema to extract model information
const modelsRegex = /model\s+(\w+)\s+{([^}]+)}/g;
let match;
const models = [];
while ((match = modelsRegex.exec(schema))) {
  const modelName = match[1];
  const modelFields = match[2]
    .trim()
    .split('\n')
    .map((field) => field.trim())
    .filter((field) => !field.startsWith('@@') && field.trim() !== '');
  models.push({ name: modelName, fields: modelFields });
}

// Function to format each field in the entity
function formatField(field) {
  const [fieldName, fieldType] = field.split(/\s+/);
  const formattedType = mapPrismaTypeToTypeScript(fieldType);
  return `${fieldName}: ${formattedType};`;
}

// Function to map Prisma types to TypeScript types
function mapPrismaTypeToTypeScript(prismaType) {
  // Remove "?" if it exists at the end
  prismaType = prismaType.replace(/\?$/, '');

  switch (prismaType) {
    case 'Int':
      return 'number';
    case 'String':
      return 'string';
    case 'DateTime':
      return 'Date';
    case 'Json':
      return 'any';
    default:
      return prismaType;
  }
}

// Function to generate import statements for related entities
// function generateImports(model) {
//   const relationsRegex = /@relation\((.*?)\)/g;
//   const imports = new Set(); // Using a Set to avoid duplicate imports
//   let match;
//   while ((match = relationsRegex.exec(model.fields.join('\n')))) {
//     const relationArgs = match[1].trim().replace(/\s+/g, '');
//     const map = relationArgs.split(',').find(arg => arg.includes('map')).split(':')[1].replace(/"/g, '').trim();
//     const relatedEntityName = map.split('_')[0].charAt(0).toUpperCase() + map.split('_')[0].slice(1);
//     imports.add(`import { ${relatedEntityName} } from '../${map.toLowerCase()}/entities/${map.toLowerCase()}.entity';`);
//   }
//   return Array.from(imports).join('\n');
// }

// Generate entity files
models.forEach((model) => {
  // ${generateImports(model)}
  const entityContent = `
    export class ${model.name} {
      ${model.fields.map((field) => formatField(field)).join('\n      ')}
    }
  `;
  fs.writeFileSync(
    `src/${model.name.toLowerCase()}/entities/${model.name.toLowerCase()}.entity.ts`,
    entityContent,
  );
});

console.log('Entities generated successfully!');
