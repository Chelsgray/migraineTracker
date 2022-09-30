const mongoose = require("mongoose");
const User = require("./User");

const AttackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  startDate: {
    type: Date,
    require: true
  },
  endDate: {
    type: Date,
  },
  startTime: {
    type: String,
  },
  endTime : {
    type: String,
  },
  painLevel: {
    type: Number,
  },
  triggers: {
    type: String,
  },
  aura: {
    type: Boolean,
  },
  medicineTaken:{
    type: String,
  },
  otherRelief: {
    type: String,
  } ,
  notes: {
    type: String,
  }


})

module.exports = mongoose.model("Attack", AttackSchema);


// const AttackSchema = new mongoose.Schema({
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User"
//         },
//         painLevel: {
//             type: String,
//             require: true
//         },
//         triggers: {
//             type: String,
//             require: true
//         },
//         medicineTaken: {
//             type: String,
//             require: true
//         },
//         otherRelief: {
//             type: String,
//             require: true
//         },
//         notes: {
//             type: String,
//             require: true
//         },
//     });