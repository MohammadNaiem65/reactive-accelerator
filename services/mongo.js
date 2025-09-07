const { default: mongoose } = require('mongoose');

export async function dbConnect() {
    try {
        const connection = await mongoose.connect(
            process.env.MONGO_CONNECTION_URI
        );

        return connection;
    } catch (error) {
        console.log('🚀 ~ dbConnect ~ error:', error);
    }
}
