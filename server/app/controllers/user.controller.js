exports.allAccess = (req, res) => {
  res.status(200).send("Please register/login to use ToDo app to make notes.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
