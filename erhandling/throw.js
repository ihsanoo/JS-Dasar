const price = 10;
const paid = 8;

if (paid < price) {
    throw new Error('pembayaran tidak cukup');
}