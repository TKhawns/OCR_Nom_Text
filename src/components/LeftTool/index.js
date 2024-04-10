import { Divider } from 'antd';
import FileImport from './ImportFile';
import DrawTool from './DrawTool';

const LeftToolbar = () => (
    <>
        <FileImport />
        <Divider style={{ margin: '0 0 16px 0' }} />
        <DrawTool />
    </>
);

export default LeftToolbar;
