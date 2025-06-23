// 1. for ციკლი 10 დან 25 - მდე
for (let i = 10; i <= 25; i++) {
  console.log("1. for loop:", i);
}

// 2. while ციკლი 0 დან 10 - მდე
let i = 0;
while (i <= 10) {
  console.log("2. while loop:", i);
  i++;
}

// 3. do while ციკლი 0 დან 15 - მდე
let j = 0;
do {
  console.log("3. do while loop:", j);
  j++;
} while (j <= 15);

// 4. მასივიდან მხოლოდ კენტი რიცხვები
const numbers = [23, 44, 123, 234, 765, 1023, 2368];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log("4. კენტი რიცხვი:", numbers[i]);
  }
}

// 5. კვირის დღეების სახელებად გადაყვანა
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("5. დღეა: კვირა");
    break;
  case 1:
    console.log("5. დღეა: ორშაბათი");
    break;
  case 2:
    console.log("5. დღეა: სამშაბათი");
    break;
  case 3:
    console.log("5. დღეა: ოთხშაბათი");
    break;
  case 4:
    console.log("5. დღეა: ხუთშაბათი");
    break;
  case 5:
    console.log("5. დღეა: პარასკევი");
    break;
  case 6:
    console.log("5. დღეა: შაბათი");
    break;
  default:
    console.log("5. უცნობი დღე");
}

// 6. პროდუქტების გაფილტვრა (storageQuantity > 10)
const data = {
  items: [
    { productName: "Samsung S25", storageQuantity: 38 },
    { productName: "Xiaomi Poco", storageQuantity: 21 },
    { productName: "AirPods Pro 2", storageQuantity: 243 },
    { productName: "Robot Vacuum", storageQuantity: 210 },
    { productName: "iPhone 16 Pro", storageQuantity: 39 },
    { productName: "Xiaomi TV", storageQuantity: 7 },
    { productName: "Canon EOS R100", storageQuantity: 12 },
    { productName: "HP Victus 16", storageQuantity: 8 },
    { productName: "Apple Watch Series 10", storageQuantity: 17 },
    { productName: "Canon EOS R8", storageQuantity: 10 },
  ],
};

for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].storageQuantity > 10) {
    console.log("6. მარაგშია მეტი ვიდრე 10:", data.items[i].productName);
  }
}
