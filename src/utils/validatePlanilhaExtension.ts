export function validatePlanilhaExtension(
  e: React.ChangeEvent<HTMLInputElement>
) {
  if (!e?.target?.files) return;

  const acceptedFiles = ['xlsx', 'xls', 'csv', 'ods', 'xltx', 'xlsm'];

  const file = e.target.files[0];

  const extension = file?.name?.split('.')?.pop()?.toLowerCase();

  const isAValidExtension: boolean[] = acceptedFiles?.map(
    (extensionType) => extensionType !== extension
  );

  console.log(isAValidExtension);

  return isAValidExtension.includes(false);
}
