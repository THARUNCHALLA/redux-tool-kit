import { useSelector } from "react-redux"

const Account = () => {
    const data = useSelector((s) => {
        return s
    })

    return (
        <div>
            <table className="table caption-top table-striped table-bordered" Style="width:30%">
            <caption className="text-primary">Account Details</caption>
                <thead className="table-dark"><tr>
                    <th width={100}>Balance</th>
                    <th width={100}>User Name</th>
                    <th width={100}>Mobile</th>
                </tr></thead>
                <tbody><tr>
                    <td>{data.user1.balance}</td>
                    <td>{data.user1.Fullname}</td>
                    <td>{data.user1.PhoneNumber}</td>
                </tr></tbody>
            </table>
            <table className="table  border-primary  caption-top table-bordered table-hover table-responsive text-center" Style="width:40%">
            <caption className="text-primary">Transaction Details</caption>
                <thead>
                    <tr>
                    <th>Transaction Id</th>
                    <th>Amount </th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {data.transaction.map(each => (
                    <tr key={each.date.getTime().toString()}>
                        <td>{each.date.getTime().toString()}</td>
                        <td align="center">{each.amount}</td>
                        <td align="center">{each.type}</td>
                        <td align="center">{each.date.toString()}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>

        </div>
    )
}

export default Account
