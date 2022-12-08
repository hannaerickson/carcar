import { useState, useEffect } from "react";

function ManufacturersList() {
    const [list, setList] = useState(null);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setList(data.manufacturers)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <br/>
            <h1>All Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                    <tr className="table-success">
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {list?.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ManufacturersList;
