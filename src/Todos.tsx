type Todos = {
  data: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[];
};

const Todos = ({ data }: Todos) => {

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Todos;
