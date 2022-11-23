import { Wrapper } from './styles';
import Grid from '../Grid';

export default function Content({ gridColumns, data, deleteRecord }) {
    return (
        <Wrapper>
            <Grid columns={gridColumns} data={data} deleteRecord={deleteRecord} />
        </Wrapper>
    )
}
