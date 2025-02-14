import React from 'react';

const RazorpayPayment = () => {
    const handlePayment = () => {
        const options = {
            key: 'rzp_test_TOGAyR5vOJ3zVE', // Your Razorpay Key ID
            amount: 5000 * 100, // Amount in paise (50000 paise = 500 INR)
            currency: 'INR',
            name: 'Dairy farm',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            handler: function (response) {
                alert('Payment Successful');
                console.log(response);
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#F37254',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div>
            <h2>Razorpay Payment</h2>
            <button onClick={handlePayment}>Proceed to payment</button>
        </div>
    );
};

export default RazorpayPayment;
