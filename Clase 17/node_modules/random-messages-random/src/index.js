const messages = [
  "Oscar",
  "Carolina",
  "Paulina",
  "Ana",
  "Nicolay",
  "Yesica",
  "Diego",
  "Laura"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  return message;
};

module.exports = { randomMsg };