import{ Header, Main }  from './styles.js';
import Grid from '../Grid';

export default function App() {

  const gridColumns = [
    {
      id: 'col1',
      label: 'column1'
    },
    {
      id: 'col2',
      label: 'column2'
    },
    {
      id: 'col3',
      label: 'column3'
    },
  ];

  const gridData = [
    [
      {
        id: 1,
        columnId: 'col1',
        value: 'column1'
      },
      {
        id: 2,
        columnId: 'col2',
        value: 'column2'
      },
      {
        id: 3,
        columnId: 'col3',
        value: 'column3'
      }
    ],
    [
      {
        id: 4,
        columnId: 'col1',
        value: 'column1a'
      },
      {
        id: 5,
        columnId: 'col2',
        value: 'column2a'
      },
      {
        id: 6,
        columnId: 'col3',
        value: 'column3a'
      }
    ]
  ];



  

  return (
    <>
      <Header>
        React-hooks-grid header
      </Header>
      <Main>
        <Grid columns={gridColumns} data={gridData}/>
      </Main>
    </>
  );
}

