export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const fileIds: number[] = [];

  for (let change of changes) {
    if (change[0] > lastBackupTime) {
      if (!fileIds.includes(change[1])) {
        fileIds.push(change[1]);
      }
    }
  }

  return fileIds.sort((fileIds1, fileIds2) => fileIds1 - fileIds2);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
