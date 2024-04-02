export const getSelection = (
  event: React.MouseEvent<HTMLDivElement>,
  setter: (state: string) => void
) => {
  const target = event.currentTarget as HTMLDivElement;
  const dataId = target.getAttribute('data-id');
  setter(dataId as string);
};
