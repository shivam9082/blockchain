const mongoose = require('mongoose');

// Define the Transaction schema
const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
}, { collection: 'recent_transactions' }); // Explicitly set the collection name

// Create the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

// Insert hardcoded sample data into 'recent_transactions' collection
async function insertSampleData() {
    const recentTransactionsData = [
        {
            type: "Registration",
            status: "Completed",
            details: "Registered Plot A12345",
            timestamp: "Yesterday"
        },
        {
            type: "Ownership Transfer",
            status: "Pending",
            details: "Transferring ownership of Plot B67890",
            timestamp: "2 days ago"
        },
        {
            type: "Mortgage",
            status: "Completed",
            details: "Mortgage approval for Plot C54321",
            timestamp: "3 days ago"
        },
        {
            type: "Dispute Resolution",
            status: "In Progress",
            details: "Resolving dispute for Plot D09876",
            timestamp: "1 week ago"
        }
    ];

    try {
        await Transaction.insertMany(recentTransactionsData);
        console.log("Sample transactions inserted into recent_transactions.");
    } catch (error) {
        console.error("Error inserting sample data:", error);
    }
}

// Call the function to insert data
insertSampleData();

module.exports = Transaction;
