const notifyByEmail = (email) => {
  console.log("Email sent to:" + email);
}

const notifyByText = (phone) => {
  console.log("Text sent to:" + phone);
}

const notify = (contact, notifyFunction) => {
  console.log(notifyFunction(contact));
}

module.exports = { 
  notifyByEmail : notifyByEmail,
  notifyByText : notifyByText,
  notify : notify
}