import React from 'react';
import { Table } from 'react-bootstrap';

const Orders = () => {
    return (
        <div>
             <h2>Your Orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#1357</td>
                        <td>March 45, 2020</td>
                        <td>Processing</td>
                        <td>$125.00 for 2 item</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>#1357</td>
                        <td>March 45, 2020</td>
                        <td>Processing</td>
                        <td>$125.00 for 2 item</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>#1357</td>
                        <td>March 45, 2020</td>
                        <td>Processing</td>
                        <td>$125.00 for 2 item</td>
                        <td>View</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;