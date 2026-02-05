import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";

const ViewOrderManagement= () => {
    const navigate = useNavigate();

    // Static order data
    const order = {
        id: "ORD12345",
        customerName: "John Doe",
        customerPhone: "123-456-7890",
        orderDateTime: "2025-11-19 14:30",
        amount: "250.00",
        method: "Credit Card",
        status: "Shipped",
        category: "Electronics",
        subCategory: "Mobile Phones",
        quantity: 2,
        expectedDelivery: "2025-11-25",
        notes: "Handle with care",
        items: [
            {
                name: "iPhone 14",
                amount: "1200.00",
                quantity: 1,
                sku: "IPH14",
                commission: 10,
                netAmount: "1080.00",
                image: "/static/images/placeholder.png",
            },
            {
                name: "Samsung Galaxy S21",
                amount: "1000.00",
                quantity: 1,
                sku: "SGS21",
                commission: 8,
                netAmount: "920.00",
                image: "/static/images/placeholder.png",
            },
        ],
        paymentStatus: "Paid",
        courier: "FedEx",
        trackingNumber: "FX123456789",
        pickupDateTime: "2025-11-19 16:00",
        activityLog: [
            { time: "2025-11-19 14:35", action: "Order placed", actor: "Customer" },
            { time: "2025-11-19 15:00", action: "Order shipped", actor: "Vendor" },
        ],
    };

    // Map order status to workflow steps
    const workflowSteps = [
        "Pending",
        "Shipped",
        "Delivered",
        "Payout Pending",
        "Cancelled / Returned",
        "Payout Released",
        "Paid",
    ];

    const activeStepIndex = workflowSteps.indexOf(order.status);

    return (
        <div className="view_order_page">
            <div className="main_title">
                <h1>View Order</h1>
                <p>
                    <button onClick={() => navigate("/dashboard")}>Dashboard</button> -{" "}
                    <button onClick={() => navigate("/order-management")}>
                        Order Management
                    </button>{" "}
                    - View
                </p>
            </div>

            {/* Order Summary */}
            <div className="cards view_page">
                <h3>Order Summary</h3>
                <div className="gap_p">
                    <div className="w_33">
                        <h6>Order ID</h6>
                        <p>{order.id}</p>
                    </div>
                    <div className="w_33">
                        <h6>Order Date & Time</h6>
                        <p>{order.orderDateTime}</p>
                    </div>
                    <div className="w_33">
                        <h6>Payment Method</h6>
                        <p>{order.method}</p>
                    </div>
                    <div className="w_33">
                        <h6>Payment Status</h6>
                        <p>{order.paymentStatus || "Pending"}</p>
                    </div>
                    <div className="w_33">
                        <h6>Total Amount</h6>
                        <p>{order.amount}</p>
                    </div>
                    <div className="w_33">
                        <h6>Admin Commission</h6>
                        <p>20</p>
                    </div>
                    <div className="w_33">
                        <h6>Vendor Net Payout </h6>
                        <p>100</p>
                    </div>
                    <div className="w_33">
                        <h6>ETA </h6>
                        <p>16-02-2025</p>
                    </div>
                </div>
            </div>
            <div className="cards view_page">
                <h3>User Details</h3>
                <div className="gap_p view_page">
                    <div className="w_100 vew_img">
                        <h6>User Image</h6>
                        <figure>
                            <img src="/static/images/user_placeholder.png" alt="" />
                        </figure>
                    </div>
                    <div className="w_33">
                        <h6>User Name</h6>
                        <p>Jeo</p>
                    </div>
                    <div className="w_33">
                        <h6>User Email</h6>
                        <p>Jeogmail.com</p>
                    </div>
                    <div className="w_33">
                        <h6>User Phone</h6>
                        <p>892738623767</p>
                    </div>
                </div>
            </div>
            {/* Order Status Workflow */}
            <div className="cards view_page">
                <h3>Order Status Workflow</h3>
                <Stepper activeStep={activeStepIndex} alternativeLabel>
                    {workflowSteps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            {/* Items Details */}
            <div className="cards">
                <CardContent>
                    <h3 >Items Details</h3>
                    <Grid container spacing={2}>
                        {order.items?.map((item, idx) => (
                            <Grid item xs={12} md={6} key={idx}>
                                <Card variant="outlined" sx={{ display: "flex", padding: 1 }}>
                                    <Box sx={{ width: 100, height: 100, mr: 2 }}>
                                        <img
                                            src={item.image || "/static/images/placeholder.png"}
                                            alt={item.name}
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle1">{item.name}</Typography>
                                        <Typography variant="body2">Amount: ${item.amount} | Qty: {item.quantity}</Typography>
                                        <Typography variant="body2">SKU: {item.sku}</Typography>
                                        <Typography variant="body2">Commission: {item.commission}%</Typography>
                                        <Typography variant="body2">Vendor Net: ${item.netAmount}</Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </div>

            {/* Delivery & Logistics */}
            <div className="cards view_page">
                <h3>Delivery & Logistics</h3>
                <div className="gap_p">
                    <div className="w_33">
                        <h6>Courier Name</h6>
                        <p>{order.courier || "-"}</p>
                    </div>
                    <div className="w_33">
                        <h6>Tracking Number</h6>
                        <p>{order.trackingNumber || "-"}</p>
                    </div>
                    <div className="w_33">
                        <h6>Pickup Date & Time</h6>
                        <p>{order.pickupDateTime || "-"}</p>
                    </div>
                </div>
            </div>

            {/* Activity Log */}
            <div className="cards view_page">
                <h3>Activity Log</h3>
                {order.activityLog?.length ? (
                    <ul>
                        {order.activityLog.map((log, idx) => (
                            <li key={idx}>
                                <strong>{log.time}</strong>: {log.action} ({log.actor})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No activity recorded.</p>
                )}
            </div>

        </div>
    );
};

export default ViewOrderManagement;
