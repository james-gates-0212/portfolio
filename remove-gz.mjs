import { deleteSync } from 'del';

const deletedFilePaths = deleteSync(['./build/**/*.gz']);

console.log('Deleted files:\n', deletedFilePaths.filter(Boolean).join('\n'));
