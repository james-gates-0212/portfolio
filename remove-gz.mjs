import { deleteSync } from 'del';

const deletedFilePaths = deleteSync(['./build/**/*.gz']);

console.log('Deleted files:');
console.log(deletedFilePaths.join('\n'));
