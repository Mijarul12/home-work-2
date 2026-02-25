document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.');
    const buyButtons = document.querySelectorAll('.buy-now-btn');
    console.log(`Found ${buyButtons.length} buy buttons.`);

    buyButtons.forEach(button => {
        console.log('Attaching click listener to a buy button.');
        button.addEventListener('click', (event) => {
            console.log('Buy button clicked.');
            try {
                const planCard = event.target.closest('.plan-card');
                if (!planCard) {
                    console.error('Could not find .plan-card element.');
                    return;
                }
                console.log('Found plan card:', planCard);

                const planName = planCard.querySelector('h2').textContent;
                const amount = planCard.dataset.amount;
                const planPeriod = planCard.querySelector('.price-period').textContent;
                console.log(`Plan: ${planName}, Amount: ${amount}, Period: ${planPeriod}`);

                if (!amount) {
                    console.error('Amount is missing from data-amount attribute.');
                    return;
                }

                const options = {
                    key: 'rzp_test_SCpspL9vTaNsUz',
                    amount: amount,
                    currency: 'INR',
                    name: 'Homework Management',
                    description: `Purchase ${planName} Plan - ${planPeriod}`,
                    image: 'logo.png',
                    handler: function (response) {
                        console.log('Payment successful:', response);
                        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                        window.location.href = "https://forms.gle/2YAHfUt9rjzdpYNt9";
                    },
                    prefill: {
                        name: 'Test User',
                        email: 'test.user@example.com',
                        contact: '9999999999'
                    },
                    notes: {
                        plan: planName,
                        amount: amount
                    },
                    theme: {
                        color: '#FF00FF'
                    }
                };
                console.log('Razorpay options:', options);

                const rzp1 = new Razorpay(options);

                rzp1.on('payment.failed', function (response){
                    console.error('Payment failed:', response);
                    alert(`Payment failed: ${response.error.description}`);
                });

                console.log('Opening Razorpay checkout.');
                rzp1.open();

            } catch (error) {
                console.error('An error occurred:', error);
                alert('An unexpected error occurred. Please check the console for details.');
            }
        });
    });
});
