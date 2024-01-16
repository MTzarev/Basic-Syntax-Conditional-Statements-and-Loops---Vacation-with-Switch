function newVacation(num, type, day) {

    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                totalPrice = num * 8.45;
            } else if (day === "Saturday") {
                totalPrice = num * 9.80;
            } else if (day === "Sunday") {
                totalPrice = num * 10.46;
            }
            if (num >= 30) {
                totalPrice *= 0.85;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            } else {
                totalPrice = totalPrice;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            }
            break;
        case "Business":
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }
            if (num >= 100) {
                totalPrice = (num - 10) * price;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            } else {
                totalPrice = num * price;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            }
            break;
        case "Regular":
            if (day === "Friday") {
                totalPrice = num * 15;
            } else if (day === "Saturday") {
                totalPrice = num * 20;
            } else if (day === "Sunday") {
                totalPrice = num * 22.5;
            }
            if (num > 10 && num < 20) {
                totalPrice *= 0.95;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            } else {
                totalPrice = totalPrice;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            }
    }
    console.log();
}
newVacation(40,
    "Regular",
    "Saturday")