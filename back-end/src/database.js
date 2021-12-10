const mongoose = require('mongoose');

const uri =
"mongodb+srv://dbUser:OAyQXFoAmqEcXk15@cluster0.wsmyw.mongodb.net/CoOfi?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
() => {
  console.log("Conectado a la base de datos.");
},
(err) => {
  console.log(err);
}
);

