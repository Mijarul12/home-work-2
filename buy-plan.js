document.addEventListener('DOMContentLoaded', () => {
    console.log('Buy Plan script loaded.');

    const buyButtons = document.querySelectorAll('.buy-now-btn');
    if (buyButtons.length === 0) {
        console.error('No "Buy Now" buttons found.');
        return;
    }
    console.log(`Found ${buyButtons.length} "Buy Now" buttons.`);

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log('A "Buy Now" button was clicked.');
            try {
                const planCard = event.target.closest('.plan-card');
                if (!planCard) {
                    console.error('Could not find the parent .plan-card element.');
                    alert('An error occurred. Could not identify the selected plan.');
                    return;
                }

                const planName = planCard.querySelector('h2').textContent;
                const amount = planCard.dataset.amount;
                const planPeriod = planCard.querySelector('.price-period').textContent;

                console.log(`Selected Plan: ${planName}, Amount: ${amount}, Period: ${planPeriod}`);

                if (!amount) {
                    console.error('The data-amount attribute is missing or empty.');
                    alert('An error occurred. The price for this plan is not set.');
                    return;
                }

                const options = {
                    key: 'rzp_live_SL3CsZmkbWBD7c',
                    amount: amount,
                    currency: 'INR',
                    name: 'Homework Management',
                    description: `Purchase ${planName} Plan - ${planPeriod}`,
                    image: 'logo.png',
                    handler: function (response) {
                        console.log('Payment successful!', response);
                        alert(`Thank you for your purchase! Your Payment ID is: ${response.razorpay_payment_id}`);
                        // Redirect to a thank you or confirmation page
                        window.location.href = "https://forms.gle/2YAHfUt9rjzdpYNt9";
                    },
                    prefill: {
                        name: '', // Let user fill this
                        email: '', // Let user fill this
                        contact: '' // Let user fill this
                    },
                    notes: {
                        plan: planName,
                        amount: amount
                    },
                    theme: {
                        color: '#FF00FF'
                    }
                };

                console.log('Initializing Razorpay with options:', options);
                const rzp1 = new Razorpay(options);

                rzp1.on('payment.failed', function (response){
                    console.error('Payment failed:', response);
                    alert(`Payment failed. Reason: ${response.error.description}. Please try again.`);
                });

                console.log('Opening Razorpay checkout...');
                rzp1.open();

            } catch (error) {
                console.error('An unexpected error occurred during checkout setup:', error);
                alert('An unexpected error occurred. Please check the console for more details.');
            }
        });
    });
});