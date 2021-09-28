import { Input } from 'antd'

const { Search } = Input;
const Searchbox = () => {


    return (
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
        />
    )

}
export default Searchbox