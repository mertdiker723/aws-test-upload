type OscarProps = {
  children: React.ReactNode;
};
// https://dev.to/debs_obrien/typescript-and-react-children-4epg
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
